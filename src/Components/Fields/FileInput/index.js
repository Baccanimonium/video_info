import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"
import dayjs from "dayjs"
import uniqueId from "lodash/uniqueId"
import { newApiService, WRAP_IN_PARAMS } from "@/api"
import { isMimeTypeAllowed, isFileSizeAllowed } from "@/Utils/Files/FileValidation"
import Pipe from "@/Utils/FunctionsCall/pipe"
import { DEFAULT_DATE_FORMAT, FormContainerContext } from "@/constants"
import useOpenModalWindow from "@/Core/Hooks/useOpenModalWindow"
import PureUpdateArrayItems from "@/Utils/Arrays/PureUpdateArrayItems"
import { URL_FILE_LIST } from "@/APIList"
import { FileContainer, FileInputIconContainer, FileInputIcon } from "./styles"
import UploadFilePreview from "./UploadFilePreview"
import { unAllowedMimeTypes } from "./constants"

const FileInput = ({ value, disabled, id, multiple, allowedTypes, onInput, folderPath, renderInputZone, inputRef }) => {
  // todo подключить withFileInput
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
  const focusInput = useCallback(() => { fileInputRef.current.click() }, [])

  useEffect(() => {
    setTempFiles(refTempFiles.current.filter(tempFile => !value.some(file => tempFile.VALUE === file.VALUE)))
  }, [value])

  useEffect(() => {
    inputRef(id, fileInputRef.current)
    return () => inputRef(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const removeFileByIndex = useCallback((fileIndex) => {
    removeItem(currentFiles[fileIndex].VALUE, fileIndex)
  }, [currentFiles, removeItem])

  const reloadTempFile = useCallback((fileId) => {
    const reloadedFileIndex = tempFiles.findIndex(({ id }) => id === fileId)
    const resetedFile = { ...tempFiles[reloadedFileIndex], fail: false, progress: 0 }
    setTempFiles(PureUpdateArrayItems(tempFiles, reloadedFileIndex, resetedFile))
    uploadFiles([resetedFile])
  }, [tempFiles, uploadFiles])

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
    <FileContainer isFileOverflowed={isFileOverflowed}>
      {!disabled && (
      <button type="button" className="m-b-10 w-100" onClick={focusInput}>
        {renderInputZone && (
        <FileInputIconContainer className="btn">
          <FileInputIcon className="file-input-icon m-r-15" size="24" />
          or drop file here
        </FileInputIconContainer>
        )}
        <input
          className="display-none"
          id={id}
          type="file"
          onInput={handleInput}
          multiple={multiple}
          ref={fileInputRef}
        />
      </button>
      )}
      <UploadFilePreview
        value={currentFiles}
        onRemoveItem={removeFileByIndex}
        disabled={disabled}
        onReload={reloadTempFile}
      />
    </FileContainer>
  )
}

FileInput.propTypes = {
  onInput: PropTypes.func.isRequired,
  inputRef: PropTypes.func,
  allowedTypes: PropTypes.array,
  value: PropTypes.array,
  // todo нормально что при disabled поле загрузки просто пропадает?
  disabled: PropTypes.bool,
  renderInputZone: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  folderPath: PropTypes.string,
}
FileInput.defaultProps = {
  value: [],
  multiple: true,
  renderInputZone: true,
  inputRef: () => null,
  folderPath: ""
}

export default FileInput
