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
      className={`${className} flex items-center select-none`}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
  returnObjects: PropTypes.bool,
  meaning: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  valueKey: PropTypes.string,
}

RadioButton.defaultProps = {
  onBlur: () => null,
  onFocus: () => null,
  className: "",
  style: {},
  returnObjects: true
}

export default RadioButton;
