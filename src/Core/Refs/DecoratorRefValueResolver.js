import React, { useEffect, useState } from "react"
import { loadRefList } from "@/Core/Refs/service"
import { selectProps } from "@/Core/Refs/RefControllerProps"

function getOptions(options, valueKey) {
  return (v) => options.find(({ [valueKey]: ID }) => (typeof v === "object" ? v[valueKey] : v) === ID)
}

function matchOptions(options, value, valueKey) {
  const resolver = getOptions(options, valueKey)
  return Array.isArray(value)
    ? value.map((v) => resolver(v))
    : resolver(value)
}

async function getRefList(valueKey, value, reference, refParams, options, multiple, setResolvedValue) {
  setResolvedValue(options
    ? matchOptions(options, value, valueKey)
    : await (async () => {
      const data = await loadRefList({ v_find: value, reference, refParams, valueKey })
      return data ? multiple ? data : data[0] : value
    })())
}

const DecoratorRefValueResolver = (Component) => {
  const ValueResolver = props => {
    const { value, multiple, reference, refParams, options, valueKey } = props
    const [resolvedValue, setResolvedValue] = useState(multiple ? [] : null)
    useEffect(
      () => {
        if (Array.isArray(value) ? value.length > 0 : (value !== undefined && value !== null)) {
          getRefList(valueKey, value, reference, refParams, options, multiple, setResolvedValue)
        } else {
          setResolvedValue(multiple ? [] : null)
        }
      },
      [value, reference, refParams, options, setResolvedValue, valueKey, multiple]
    )
    return (
      <Component {...props} value={resolvedValue} />
    )
  }
  ValueResolver.propTypes = selectProps.propTypes
  ValueResolver.defaultProps = selectProps.defaultProps

  return ValueResolver
}

export default DecoratorRefValueResolver
