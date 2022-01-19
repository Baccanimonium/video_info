import React, {useCallback} from 'react';
import PropTypes from "prop-types"
import {Button, BoxContainer} from "./style"

// todo компонент не умеет менять value

function emitCheckboxValue(id, onBlur, onFocus, onInput, value) {
  onFocus()
  onInput(!value, id)
  onBlur()
}

const RadioButton = ({label, className, id, onBlur, onFocus, onInput, value}) => {
 const updateValue = useCallback(() => {
   emitCheckboxValue(
     id, onBlur, onFocus, onInput, value
   )
 }, [])

  return (
    <div
      onMouseDown={updateValue}
      className={`${className} display-flex a-i-center`}
      type="button"
    >
      <BoxContainer>
        <Button checked={value}/>
      </BoxContainer>
      <div className="p-l-15">
        {label}
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onInput: PropTypes.func,
}

RadioButton.defaultProps = {
  onBlur: () => null,
  onFocus: () => null,
  className: "",
  style: {}
}

export default RadioButton;
