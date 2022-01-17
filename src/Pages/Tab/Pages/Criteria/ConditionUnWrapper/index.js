import React, { useCallback } from "react"
import PropTypes from "prop-types"
import ConditionInput from "../ConditionInput"
import { ConditionContainer } from "./styles"

const ConditionUnWrapper = ({
  value, inputComponent: InputComponent, columns, componentProps, formPayload, validationErrors, label, onInput, id, submitFailed
}) => {
  const handleInput = useCallback((fieldValue, fieldId) => {
    onInput({ ...value, [fieldId]: fieldValue }, id)
  }, [id, onInput, value])
  return (
    <ConditionContainer>
      {columns.map(column => (
        <InputComponent
          value={value[column]}
          key={column}
          id={column}
          groupValue={value}
          formPayload={formPayload}
          label={label}
          onInput={handleInput}
          classNameBtn={validationErrors[column] && submitFailed ? "color-pink" : ""}
          {...componentProps}
        />
      ))}
    </ConditionContainer>
  )
}

ConditionUnWrapper.propTypes = {
  value: PropTypes.object,
  inputComponent: PropTypes.func,
  columns: PropTypes.array,
  componentProps: PropTypes.object,
  formPayload: PropTypes.object,
  validationErrors: PropTypes.object,
  label: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  id: PropTypes.string,
  submitFailed: PropTypes.bool,
}

ConditionUnWrapper.defaultProps = {
  value: {},
  inputComponent: ConditionInput,
  columns: [],
  componentProps: {},
  formPayload: {},
  validationErrors: {},
  label: ""
}

export default ConditionUnWrapper
