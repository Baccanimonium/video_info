import React, { useRef } from "react"
import PropTypes from "prop-types"

const WithSubmitContainerHoc = (Component) => {
  const SubmitContainer = props => {
    const { value } = props
    const initialValue = useRef(value)
    const valueChanged = initialValue.current !== value
    return (
      <div className="display-flex fd-column w-100">
        <Component {...props} showToggleButton={false} />
        <button
          type="submit"
          className={`btn m-l-a width-min m-t-10 btn-apply ${valueChanged ? "golden" : "light-grey"}`}
          disabled={!valueChanged}
        >
          apply
        </button>
      </div>
    )
  }

  SubmitContainer.propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  return SubmitContainer
}

export default WithSubmitContainerHoc
