import React, { useState } from "react"
import PropTypes from "prop-types"
import withValidation from "@/Core/Decorators/withValidation"

const WithStateFullForm = (component) => {
  const WithValidationComponent = withValidation(component)
  const StateFullForm = ({ initPayload, ...props }) => {
    const [state, updateState] = useState(initPayload)
    return (
      <WithValidationComponent
        {...props}
        value={state}
        onInput={updateState}
      />
    )
  }

  StateFullForm.propTypes = {
    initPayload: PropTypes.object
  }
  StateFullForm.defaultProps = {
    initPayload: {}
  }
  return StateFullForm
}

export default WithStateFullForm

export const RenderPropStateFullForm = WithStateFullForm(({ children, ...props }) => children(props))
