import React, { useRef } from "react"
import PropTypes from "prop-types"
import {GoldButton, LightGrayButton} from "@/Components/Buttons";

const WithSubmitContainerHoc = (Component) => {
  const SubmitContainer = props => {
    const { value } = props
    const initialValue = useRef(value)
    const valueChanged = initialValue.current !== value
    const ButtonComp = valueChanged ? GoldButton : LightGrayButton
    return (
      <div className="flex flex-col w-full">
        <Component {...props}  />
        <ButtonComp
          type="submit"
          className="ml-auto w-32 mt-2.5"
          disabled={!valueChanged}
        >
          Применить
        </ButtonComp>
      </div>
    )
  }

  SubmitContainer.propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  return SubmitContainer
}

export default WithSubmitContainerHoc
