import React, { Component } from "react"
import PropTypes from "prop-types"
import Validator from "@/Core/Validator"
import { OverrideSaveData } from "@/Core/PageController/constants"

const withValidationHoc = (OriginalComponent) => {
  class WithValidation extends Component {
    // eslint-disable-next-line react/static-property-placement
    static contextType = OverrideSaveData

    constructor(props) {
      super(props)
      this.state = {
        validator: new Validator(),
        prevValue: undefined,
        validationErrors: {},
        validationAlerts: {},
        touched: {},
        changed: {},
        formValid: undefined,
        submitFailed: false,
        formHasSubmitted: false
      }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { value, rules, alerts, validators } = nextProps
      if (value !== prevState.prevValue) {
        const errors = prevState.validator.validate(value, rules, validators)
        const alertsErrors = prevState.validator.validate(value, alerts, validators)
        return {
          formValid: Object.keys(errors).length === 0,
          validationErrors: errors || {},
          validationAlerts: alertsErrors,
          prevValue: value
        }
      }
      return null
    }

    componentDidMount() {
      const { value } = this.props
      this.validate(value)
      this.context(this.handleSubmit)
    }

    componentWillUnmount() {
      this.context()
    }

    validate = (values) => {
      const { props: { rules, alerts, validators }, state: { validator } } = this
      const errors = validator.validate(values, rules, validators)
      const alertsErrors = validator.validate(values, alerts, validators)
      if (Object.keys(errors).length > 0) {
        this.setState({
          formValid: false,
          validationErrors: errors,
          validationAlerts: alertsErrors
        })
        return new Error("error was happened during validation evaluation")
      }
      this.setState({
        formValid: true,
        validationErrors: {},
        validationAlerts: alertsErrors
      })
      return values
    }

    handleSubmit = async () => {
      try {
        const { props: { value, onSubmit } } = this
        const result = this.validate(value)
        if (result instanceof Error) {
          const { failFormSubmitStatus = 416 } = this
          throw { response: { status: failFormSubmitStatus } }
        }
        // ???????????? ???????? ????????????????
        const data = await onSubmit(result)
        this.resetForm()
        this.setState({ formHasSubmitted: true })
        return data
      } catch (e) {
        console.log("err", e)
        const { response: { status, data = {} } = {} } = e
        this.setFormSubmitFlag()
        // TODO ?????????????? ?????????? ??????????????????, ???? ???????????? ?????????????????? ???????? ?????? ???? ???????????????????????? ?? ??????????????
        // this.validationErrors = parseValidationErros(data);
        return e
      }
    }

    handleBlur = (id) => () => {
      this.setState((state) => ({ changed: { ...state.changed, [id]: true } }))
    }

    handleFocus = (id) => () => {
      this.setState((state) => ({ touched: { ...state.touched, [id]: true } }))
    }

    setFormSubmitFlag = () => {
      this.setState({
        submitFailed: true,
        formHasSubmitted: true,
      })
    }

    handleInput = (newFormValue) => {
      this.state.prevValue = newFormValue
      this.validate(newFormValue)
      this.props.onInput(newFormValue)
    }

    resetForm = () => {
      this.setState({
        validationErrors: {},
        validationAlerts: {},
        submitFailed: false,
        formHasSubmitted: false,
        formPayload: {},
        touched: {},
        changed: {}
      })
    }

    render() {
      const { handleBlur, handleFocus, handleSubmit, handleInput, validate, props: { onSubmit } } = this
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSubmit={onSubmit ? handleSubmit : undefined}
          onInput={handleInput}
          validateForm={validate}
        />
      )
    }
  }

  WithValidation.propTypes = {
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    rules: PropTypes.object,
    alerts: PropTypes.object,
    validators: PropTypes.object,
  }

  WithValidation.defaultProps = {
    value: {},
    rules: {},
    alerts: {}
  }
  return WithValidation
}

export default withValidationHoc

export const WithValidationHocRenderPropAdapter = withValidationHoc(({ children, ...props }) => children(props))
