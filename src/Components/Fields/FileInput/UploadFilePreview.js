import React, { useCallback, useMemo, useState } from "react"
import PropTypes from "prop-types"
import Icon from "@/Components/Icon"
import BsProgressbar from "@/Components/ProgressBars/BsProgressBar"
import { URL_FILE_LIST } from "@/APIList"
import { newApiService } from "@/api"
import { PreviewItem, PreviewItemInfo, PreviewItemInfoLabel, RemoveButton } from "./styles"
import { fileIcons, defaultIcon } from "./constants"
import { reloadIcon } from "./Icons/reloadIcon"

const ReloadIcon = Icon(reloadIcon)

const downloadFile = (VALUE, KEY) => async () => {
  if (VALUE && KEY) {
    const data = await newApiService.get(`${URL_FILE_LIST}${KEY}`, { responseType: "arraybuffer" })
    const url = window.URL.createObjectURL(new Blob([data]))
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", VALUE)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const UploadFilePreview = ({ value, limit, renderLabel, disabled, onRemoveItem, onReload }) => {
  const [open, setOpenStatus] = useState(false)
  const togglePreview = useCallback(() => setOpenStatus(!open), [open])
  const emitRemoveItem = useCallback((index, itemId) => () => onRemoveItem(index, itemId), [onRemoveItem])
  const emitReloadItem = useCallback((itemId) => () => onReload(itemId), [onReload])

  const isValueOverlappingLimit = value.length > limit
  const slicedArray = useMemo(() => {
    const newArray = []
    const l = isValueOverlappingLimit ? limit : value.length
    for (let i = 0; i < l; i++) {
      newArray.push(value[i])
    }
    return newArray
  }, [isValueOverlappingLimit, limit, value])
  const renderedArray = isValueOverlappingLimit || open || !disabled
    ? value
    : slicedArray
  const { lastIndex, firstIndex } = useMemo(() => value.reduce(
    (acc, { progress }, i) => {
      if (progress !== undefined && !isNaN(progress)) {
        if (!acc.firstIndex) acc.firstIndex = i
        acc.lastIndex = i
      }
      return acc
    },
    { firstIndex: undefined, lastIndex: undefined }
  ), [value])
  return renderedArray.length > 0 && (
  <div>
    {renderLabel && (<div className="m-b-10">Attached files</div>)}
    {renderedArray.map(({ KEY, VALUE, progress, fail, id }, i) => {
      const fileVal = VALUE || KEY
      const Icon = fileIcons[fileVal.match(/\.([^.]+)$/)[1]] || defaultIcon
      const onDownLoadHandler = downloadFile(VALUE, KEY)
      return (
        <PreviewItem
          key={KEY}
          last={i === lastIndex}
          first={firstIndex === i}
          uploading={progress >= 0}
        >
          <Icon
            size="30"
            onClick={onDownLoadHandler}
          />
          <div className="display-flex j-c-space-between w-100 overflow-hidden">
            <PreviewItemInfo
              type="button"
              onClick={onDownLoadHandler}
            >
              <PreviewItemInfoLabel
                uploadFailes={fail}
                title={fileVal}
              >
                {fileVal}
              </PreviewItemInfoLabel>
              {fail && (<div className="fs-12 color-pink m-t-5">Download canceled, try again</div>)}
              {progress >= 0 && (
              <div className="display-flex a-i-center m-t-5">
                <span className="w-50">{ progress }%</span>
                <BsProgressbar
                  className="m-l-10"
                  percentage={progress}
                />
              </div>
              )}
            </PreviewItemInfo>
            <div className="display-flex a-i-center">
              {fail && (
              <ReloadIcon
                className="m-r-10 color-pink"
                size="14"
                onClick={emitReloadItem(id)}
              />
              )}
              {!disabled && (
              <RemoveButton
                size="12"
                onClick={emitRemoveItem(i, id)}
              />
              )}
            </div>
          </div>
        </PreviewItem>
      )
    })}
    {isValueOverlappingLimit && disabled && (
    <button
      type="button"
      onClick={togglePreview}
    >
      { open ? "Collapse" : "View more" }
    </button>
    )}
  </div>
  )
}

UploadFilePreview.propTypes = {
  renderLabel: PropTypes.bool,
  value: PropTypes.array,
  disabled: PropTypes.bool,
  limit: PropTypes.number,
  onRemoveItem: PropTypes.func,
  onReload: PropTypes.func,
}

UploadFilePreview.defaultProps = {
  value: [],
  limit: 3
}

export default React.memo(UploadFilePreview)
