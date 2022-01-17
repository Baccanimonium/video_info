import React from "react"
import PropTypes from "prop-types"
import { EditIcon } from "@/Components/Icon/CommonIcons"

const PencilEditor = ({ disabled, value, label, onEditValue, hasError, isRequired, className }) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onEditValue}
    className={`${hasError ? "color-pink" : ""} color-lightGold text-align-left`}
  >
    {value
      ? <EditIcon size="12" className="m-l-10" />
      : <div className={`${className} m-l-10`}>+ Add {label} {isRequired && <span>*</span>}</div>}
  </button>
)

PencilEditor.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array, PropTypes.object]),
  label: PropTypes.string,
  onEditValue: PropTypes.func,
  hasError: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  isRequired: PropTypes.bool,
  className: PropTypes.string,
}

PencilEditor.defaultProps = {
  value: "",
  className: ""
}

export default PencilEditor
