/* eslint-disable */
import React, { useMemo, useState, useRef, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import Select from "@/Components/Fields/Select/index"
import BsButton from "@/Components/BsButton"
import WithRefLoaderHoc from "@/Core/Refs/WithRefLoaderHOC"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import { ConditionItemWrapper, OverflowItemToggle, ValueItem, BtnOpenSelect } from "./styles"
// TODO classNameBtn > заменить на CSS переменные
export const ConditionInput = ({
  value, formPayload, id, placeholder, appendPlus, label, groupValue, multiple, reference, loading,
  className, valueKey, labelKey,
  unwrapValue, alwaysRenderOverflow, onInput, disabled, options, classNameBtn, ...props
}) => {
  const [applyAbleValue, updateApplyAbleValue] = useState([])
  const [tipsEvent, updateTipsEvent] = useState({})
  const [overlowItems, updateOverlowItems] = useState(false)
  const [open, updateOpen] = useState(false)

  const valContainer = useRef(null)
  const items = useRef(null)

  const [renderOverflow, setRenderOverflow] = useState(alwaysRenderOverflow)

  useEffect(() => {
    updateApplyAbleValue(value)
  }, [value, open])

  const toggleRenderOffset = () => {
    setRenderOverflow(!renderOverflow)
  }

  function toggleTip(e) {
    updateTipsEvent(e)
    updateOpen(!open)
    if (open) {
      updateApplyAbleValue(unwrapValue(value))
    }
  }

  const closeTip = () => {
    updateOpen(false)
  }

  const applyChanges = () => {
    onInput(applyAbleValue, id)
    toggleTip()
  }

  const newOptions = useMemo(() => {
    const flatArray = Object.values(groupValue).flat()
    return options.filter(opt => flatArray.every(({ [valueKey]: ID }) => ID !== opt[valueKey]))
  }, [options, groupValue, valueKey])

  const addLabel = useMemo(() => `правило ${(() => {
    switch (id) {
      case "NOT":
      case "EXCLUSION":
        return "NOT"
      case "OPTIONAL":
        return id.toLowerCase()
      default:
        return id
    }
  })()}`, [value, id, label])

  useEffect(() => {
    const valContainerRef = valContainer.current
    if (valContainerRef) {
      updateOverlowItems((() => {
        let i = 0
        const valLength = value.length
        let res = 5
        for (i; i < valLength; i++) {
          res += items.current.children[i].offsetWidth
          if (res > valContainerRef.clientWidth) {
            break
          }
        }
        return valLength - i
      })())
    } else {
      updateOverlowItems(0)
    }
  }, [value])

  const onOpenSelect = useCallback((id, ref) => { ref && ref.focus() }, [])

  return (
    <RenderOverlayMenu
      onOpenOverlayMenu={toggleTip}
      renderOverlayMenu={open}
    >
      {(overlayBoundRef, onOpenOverlayMenu, OverlayMenu) => (
        <WithCloseWindow closeWindow={closeTip} byKey={open}>
          {(onMouseDown) => (
            <ConditionItemWrapper className={className}>
              {!alwaysRenderOverflow && overlowItems > 0 && (
              <OverflowItemToggle
                className="color-lightGold"
                type="button"
                onClick={toggleRenderOffset}
              >
                { renderOverflow ? "скрыть" : `+${overlowItems}` }
              </OverflowItemToggle>
              )}
              <div className="p-t-5" onMouseDown={onMouseDown}>
                {value?.length > 0 && (
                <div
                  className="w-100 overflow-hidden m-b-5"
                  style={{ height: renderOverflow ? "auto" : "1em" }}
                  ref={valContainer}
                >
                  <div
                    className="display-flex flex-wrap word-wrap-break"
                    ref={items}
                  >
                    {value.map((val, i) => (
                      <ValueItem
                        key={val[valueKey]}
                        className={`${(renderOverflow ? i === value.length - 1 : i === value.length - overlowItems - 1) ? "last" : ""}`}
                      >
                        { val[labelKey] }
                      </ValueItem>
                    ))}
                  </div>
                </div>
            )}
                <BtnOpenSelect
                  ref={overlayBoundRef}
                  className={`${classNameBtn} color-lightGold`}
                  type="button"
                  onClick={onOpenOverlayMenu}
                >
                  {addLabel}
                </BtnOpenSelect>
                <OverlayMenu
                  event={tipsEvent}
                  axis="y"
                  maxSize="400"
                  minSize="350"
                  className="p-t-12 p-b-12 p-r-14 p-l-14 display-flex fd-column a-i-flex-start w-100 overflow-hidden"
                >
                  {addLabel}
                  <Select
                    {...props}
                    valueKey={valueKey}
                    labelKey={labelKey}
                    id="clients"
                    allWaysOpen
                    value={applyAbleValue}
                    multiple={multiple}
                    returnOption
                    loading={loading}
                    options={newOptions}
                    placeholder={placeholder}
                    onInput={updateApplyAbleValue}
                    inputRef={onOpenSelect}
                    showToggleButton={false}
                  />
                  <BsButton
                    type="button"
                    className={`${applyAbleValue !== value ? "golden" : "light-grey"} btn width-medium m-t-15 btn-apply`}
                    disabled={applyAbleValue === value}
                    onClick={applyChanges}
                  >
                    apply
                  </BsButton>
                </OverlayMenu>
              </div>
            </ConditionItemWrapper>
          )}
        </WithCloseWindow>
      )}
    </RenderOverlayMenu>
  )
}

ConditionInput.propTypes = {
  value: PropTypes.array,
  formPayload: PropTypes.object,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  appendPlus: PropTypes.bool,
  label: PropTypes.string,
  groupValue: PropTypes.object,
  multiple: PropTypes.bool,
  reference: PropTypes.string,
  unwrapValue: PropTypes.func,
  alwaysRenderOverflow: PropTypes.bool,
  input: PropTypes.func,
  allWaysOpen: PropTypes.bool,
  loading: PropTypes.bool,
  onInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  className: PropTypes.string,
  labelKey: PropTypes.string,
  valueKey: PropTypes.string,
}

ConditionInput.defaultProps = {
  value: [],
  formPayload: {},
  id: "",
  placeholder: "",
  appendPlus: true,
  label: "",
  groupValue: {},
  multiple: true,
  reference: "",
  unwrapValue: (value) => Array.from(value),
  className: "",
  labelKey: "SYS_NAME",
  valueKey: "ID",
}

const formPayloadUnWrapper = (Component) => (props) => <Component
  {...props}
  getValue={useCallback((valKey, formPayload) => {
    const { [valKey]: { [props.id]: val} = {} } = formPayload
    return val
  } ,[props.id])}
/>

export default formPayloadUnWrapper(WithRefLoaderHoc(ConditionInput))
