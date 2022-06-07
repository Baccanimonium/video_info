import React, {useEffect, useMemo, useRef} from "react"
import PropTypes from "prop-types"
import BsInput from "@/Components/Fields/BsInput"
import compose from "lodash/fp/compose"
import {IncrementButton, IncrementsContainer} from "./styles";

import { IconToggleIndicator } from "@/Components/Icon/CommonIcons"
const NumericInput = ({ onlyInt, value, onInput, onBlur, id, ...props }) => {
  const pattern = useMemo(() => onlyInt ? /^([0-9]\d*|)/ : /^([0-9]\d*|)(\.(\d+|))?$/, [onlyInt])

  const inputMiddleware = (nextValue, id) => {
    compose(
      (v) => onInput(v, id),
      (v) => String(v).endsWith(".") ? v : Number(!String(v).startsWith(".") ? v : `0${v}`),
      (v) => v ? pattern.test(v) ? v.match(pattern)[0] : value : "",
      (v) => v.replace(",", ".")
    )(nextValue)
  }

  const blurMiddleware = () => {
    if (!pattern.test(value)) {
      onInput(undefined, id)
    }
    onBlur()
  }

  return (
    <BsInput
      {...props}
      value={value}
      id={id}
      onInput={inputMiddleware}
      onBlur={blurMiddleware}
    />
  )
}

NumericInput.propTypes = {
  onInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.any,
  onlyInt: PropTypes.bool,
}

NumericInput.defaultProps = {
  onBlur: () => null
}
export default NumericInput

let interval

const releaseInterval = () => {
  clearInterval(interval)
  window.removeEventListener("mouseup", releaseInterval)
}

export const NumericInputWithControls = (props) => {
  const { id, value = 0, onInput } = props
  const refValue = useRef(value)
  refValue.current = value
  const onIncrement = () => {
    window.addEventListener("mouseup", releaseInterval)
    interval = setInterval(()=> onInput(Number(refValue.current) + 1, id), 55)
  }
  const onDecrement = () => {
    window.addEventListener("mouseup", releaseInterval)
    interval = setInterval(()=> onInput(Number(refValue.current) - 1, id), 55)
  }

  useEffect(() => releaseInterval, [])

  return <NumericInput
    {...props}
    children={<IncrementsContainer>
      <IncrementButton
        className="rotate-180"
        size={8}
        onMouseDown={onIncrement}
      />
      <IncrementButton
        className="last"
        size={8}
        onMouseDown={onDecrement}
      />
    </IncrementsContainer>}
  />
}
