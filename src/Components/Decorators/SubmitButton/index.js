import React, { useRef } from "react"
import { ApplyIcon } from "@/Components/CommonIcons"
import PropTypes from "prop-types"
import {GoldButton, LightGrayButton} from "@/Components/Buttons";

const WithSubmitButtonHoc = (Component) => {
  const SubmitButton = ({ ButtonLabel, ...props }) => {
    const { value } = props
    const refInitialValue = useRef(value)
    const isValueNotChanged = value === refInitialValue.current
    const ButtonComp = isValueNotChanged ? GoldButton : LightGrayButton
    return (
      <Component {...props}>
        <ButtonComp
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
