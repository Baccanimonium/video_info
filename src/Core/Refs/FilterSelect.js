import React, { useMemo } from "react"
import WithRefLoaderHoc from "@/Core/Refs/WithRefLoaderHOC"
import Select from "@/Components/Fields/Select"
import PropTypes from "prop-types"

// TODO возможно дубль функционала(paramsMap v selecte)

const addFormPayloadUnWrapper = (Component) => {
  const FilterSelect = (props) => {
    const { refParams, dependentParameters, formPayload } = props
    let newParams = refParams
    for (const item of dependentParameters) {
      if (formPayload[item]) {
        newParams = { ...newParams, [item]: formPayload[item] }
      }
    }
    return (
      <Component
        formPayload={formPayload}
        refParams={useMemo(() => dependentParameters.reduce((acc, key) => {
          acc[key] = formPayload[key]
          return acc
        }, { ...refParams }), [dependentParameters, formPayload, refParams])}
        {...props}
      />
    )
  }
  FilterSelect.propTypes = {
    dependentParameters: PropTypes.array,
    refParams: PropTypes.object,
    formPayload: PropTypes.object,
  }
  FilterSelect.defaultProps = {
    dependentParameters: []
  }
  return FilterSelect
}

export default addFormPayloadUnWrapper(WithRefLoaderHoc(Select))
