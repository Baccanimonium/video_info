import React, { useRef } from "react"
import { ApplyIcon } from "@/Components/Icon/CommonIcons"
import PropTypes from "prop-types"

const WithSubmitButtonHoc = (Component, ButtonComp = "button") => {
  const SubmitButton = ({ ButtonLabel, ...props }) => {
    const { value } = props
    const refInitialValue = useRef(value)
    const isValueNotChanged = value === refInitialValue.current
    return (
      <Component {...props}>
        <ButtonComp
          className={`btn btn-input ${!isValueNotChanged ? "golden" : ""}`}
          disabled={isValueNotChanged}
          type="submit"
        >
          <ButtonLabel />
        </ButtonComp>
      </Component>
    )
  }

  SubmitButton.propTypes = {
    ButtonLabel: PropTypes.func,
    value: PropTypes.any,
  }

  SubmitButton.defaultProps = {
    ButtonLabel: ApplyIcon
  }
  return SubmitButton
}

export default WithSubmitButtonHoc
