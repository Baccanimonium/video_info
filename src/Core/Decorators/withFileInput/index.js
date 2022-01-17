import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"
import { DEFAULT_DATE_FORMAT, FormContainerContext } from "@/constants"
import useOpenModalWindow from "@/Core/Hooks/useOpenModalWindow"
import { newApiService, WRAP_IN_PARAMS } from "@/api"
import { URL_FILE_LIST } from "@/APIList"
import Pipe from "@/Utils/FunctionsCall/pipe"
import dayjs from "dayjs"
import { isFileSizeAllowed, isMimeTypeAllowed } from "@/Utils/Files/FileValidation"
import { unAllowedMimeTypes } from "@/Components/Fields/FileInput/constants"
import uniqueId from "lodash/uniqueId"

const withFileInput = (Component) => {
  const FileInput = ({ value, disabled, id, multiple, allowedTypes, onInput, folderPath, ...props }) => {
    const [isFileOverflowed, setOverflowedStatus] = useState(false)
    const refFileOverStatus = useRef(isFileOverflowed)
    refFileOverStatus.current = isFileOverflowed
    const [tempFiles, setTempFiles] = useState([])
    const formContainerContext = useContext(FormContainerContext)
    const refTempFiles = useRef(tempFiles)
    refTempFiles.current = tempFiles
    const openModalWindow = useOpenModalWindow()
    const currentFiles = useMemo(() => ([...value, ...tempFiles]), [tempFiles, value])
    const fileInputRef = useRef()

    useEffect(() => {
      setTempFiles(refTempFiles.current.filter(tempFile => !value.some(file => tempFile.VALUE === file.VALUE)))
    }, [value])

    const progressUpload = useCallback((files) => ({ loaded, total }) => {
      const filesLength = files.length
      const { f } = files.reduce((acc, { size, ...file }, i) => {
        let progress = i + 1 === filesLength ? acc.loaded : acc.loaded * (size / acc.total + (filesLength - i) / 100)
        progress = progress > size ? size : progress > 0 ? progress : 1
        acc.loaded -= progress
        acc.total -= size
        acc.f.push({ ...file, size, progress: Math.round((progress * 100) / size) })
        return acc
      }, { total, loaded, f: [] })
      setTempFiles(refTempFiles.current.map(file => f.find(newFile => newFile.id === file.id) || file))
    }, [])

    const updateValue = useCallback((value) => {
      onInput(value, id)
    }, [id, onInput])

    const uploadFiles = useCallback(async (files) => {
      try {
        const FData = new FormData()
        files.forEach(({ fileData }) => {
          FData.append(fileData.VALUE || fileData.name, fileData, fileData.VALUE || fileData.name)
        })
        const downloadedFiles = await newApiService.post(`${URL_FILE_LIST}${folderPath}`, FData, {
          onUploadProgress: progressUpload(files),
          errorMessage: "Error has happened during upload files",
          [WRAP_IN_PARAMS]: false
        })
        updateValue(multiple ? [...value, ...downloadedFiles] : downloadedFiles)
        fileInputRef.current.value = ""
      } catch (e) {
        setTempFiles(refTempFiles.current.map((item) => (item.id ? { ...item, progress: undefined, fail: true } : item)))
      }
    }, [folderPath, multiple, progressUpload, updateValue, value])

    const removeItem = useCallback((VALUE, fileIndex = currentFiles.findIndex((file) => file.VALUE === VALUE)) => {
      if (fileIndex <= value.length - 1) {
        updateValue(value.filter((file) => file.VALUE !== VALUE))
      } else {
        setTempFiles(tempFiles.filter((file) => file.VALUE !== VALUE))
      }
    }, [currentFiles, tempFiles, updateValue, value])

    const handleInput = useCallback(async ({ target: { files } }) => {
      const { allowed, rejected } = Object.values(files).reduce((acc, file) => {
        new Pipe(file, value => acc.allowed.push(value), value => acc.rejected.push(value)).apply([
          f => {
            f.VALUE = f.name
            return f
          },
          f => {
            const [name, ext] = f.VALUE.split(/\.(?=[^.]+$)/)
            if (!name) {
              f.VALUE = `new file ${dayjs().format(DEFAULT_DATE_FORMAT)}.${ext}`
            }
            return f
          },
          isMimeTypeAllowed(allowedTypes || unAllowedMimeTypes, !!allowedTypes),
          isFileSizeAllowed("250mb")
        ])
        return acc
      },
      { allowed: [], rejected: [] })
      if (rejected.length > 0) {
        openModalWindow({
          message: rejected.reduce((acc, { message }, i) => `${acc}${i + 1}. ${message}`, ""),
          dialogueParams: { title: "Files does not match" }
        })
      }
      const allowedFiles = await Promise.all(
        allowed.reduce((acc, file) => {
          if (currentFiles.some(({ VALUE }) => VALUE === file.VALUE)) {
            acc.push(
              new Promise(resolve => {
                openModalWindow({
                  message: "File with same name already exist in this location \n do you want replace it",
                  dialogueParams: {
                    title: "File with same name already exist",
                    cancelLabel: "Replace old file",
                    submitLabel: "keep both"
                  },
                  onCancel: () => {
                    removeItem(file.name)
                    resolve(file)
                  },
                  onSubmit: () => {
                    const fileName = file.VALUE.replace(/\.[^.]+$/, "")
                    file.VALUE = file.VALUE.replace(".", ` ${dayjs().format(DEFAULT_DATE_FORMAT)} copy(${
                      currentFiles.filter(({ VALUE }) => VALUE.includes(fileName)).length}).`)
                    resolve(file)
                  }
                })
              })
            )
          } else {
            acc.push(file)
          }
          return acc
        }, [])
      )
      if (allowedFiles.length === 0) return
      const f = allowedFiles.reduce((acc, cur) => [
        ...acc,
        {
          fileData: cur,
          VALUE: cur.VALUE,
          id: uniqueId(),
          progress: 0,
          fail: false,
          size: cur.size
        }
      ], [])

      setTempFiles(multiple ? [...tempFiles, ...f] : f)
      uploadFiles(f)
    }, [allowedTypes, currentFiles, multiple, openModalWindow, removeItem, tempFiles, uploadFiles])

    useEffect(() => {
      if (formContainerContext) {
        formContainerContext.ondragover = (e) => {
          if (!refFileOverStatus.current) {
            setOverflowedStatus(true)
          }
          e.preventDefault()
          e.stopPropagation()
        }
        formContainerContext.ondragleave = (e) => {
          setOverflowedStatus(false)
          e.preventDefault()
          e.stopPropagation()
        }
        formContainerContext.ondrop = (e) => {
          e.preventDefault()
          e.stopPropagation()
          const files = []
          for (const item of e.dataTransfer.items) {
            if (item.kind === "file") {
              files.push(item.getAsFile())
            }
          }
          handleInput({ target: { files } })
          setOverflowedStatus(false)
        }
        return () => {
          formContainerContext.ondragover = null
          formContainerContext.ondragleave = null
          formContainerContext.ondrop = null
        }
      }
      return () => null
    }, [formContainerContext, handleInput])
    return (
      <Component {...props} allowedTypes={allowedTypes} onInput={handleInput} />
    )
  }
  FileInput.propTypes = {
    onInput: PropTypes.func.isRequired,
    allowedTypes: PropTypes.array,
    value: PropTypes.array,
    disabled: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    multiple: PropTypes.bool,
    folderPath: PropTypes.string,
  }
  FileInput.defaultProps = {
    value: [],
    multiple: true,
    folderPath: ""
  }
  return FileInput
}

export default withFileInput
