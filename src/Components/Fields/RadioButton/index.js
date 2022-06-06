import React, {useCallback, useMemo} from 'react';
import PropTypes from "prop-types"
import {Button, BoxContainer} from "./style"

const RadioButton = ({label, className, id, onBlur, onFocus, onInput, value, returnObjects, meaning, valueKey}) => {
  const radioButtonMean = useMemo(
    () => returnObjects ? meaning : meaning[valueKey],
    [returnObjects, meaning, valueKey]
  )

  const selected = useMemo(() => typeof radioButtonMean === "object"
    ? radioButtonMean[valueKey] === value[valueKey]
    : radioButtonMean === value,
    [value, valueKey, radioButtonMean]
  )

  const updateValue = useCallback(() => {
    onFocus(id)
    onInput(radioButtonMean, id)
    onBlur(id)
  }, [radioButtonMean, id, onFocus, onBlur])

  return (
    <button
      onMouseDown={updateValue}
      className={`${className} display-flex a-i-center no-user-select`}
      type="button"
    >
      <BoxContainer>
        <Button checked={selected}/>
      </BoxContainer>
      <div className="p-l-15 ">
        {label}
      </div>
    </button>
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
  style: {},
  returnObjects: true
}

export default RadioButton;
