import React from "react"
import PropTypes from "prop-types"
import { TextButton } from "./styles"

const TextEditor = ({ disabled, value, label, onEditValue, textForBtn }) => (
  <TextButton
    type="button"
    disabled={disabled}
    onClick={onEditValue}
  >
    {value && value.length > 0 ? textForBtn[0] : textForBtn[1]} {label}
  </TextButton>
)

TextEditor.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  onEditValue: PropTypes.func,
  textForBtn: PropTypes.array,
}

TextEditor.defaultProps = {
  textForBtn: ["Edit", "+ Add"]
}

export default TextEditor
