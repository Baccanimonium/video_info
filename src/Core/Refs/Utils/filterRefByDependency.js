const resolveValFunction = (dependencyNewVal, columnVal, dependencyKey) => Array.isArray(dependencyNewVal)
  ? dependencyNewVal.some(({ ID }) => Array.isArray(columnVal[dependencyKey])
    ? columnVal[dependencyKey].some(item => Number(ID) === Number(item))
    : Number(ID) === Number(columnVal[dependencyKey]))
  : Array.isArray(columnVal[dependencyKey])
    ? columnVal[dependencyKey].some(item => Number(dependencyNewVal[columnVal]) === Number(item))
    : Number(dependencyNewVal.ID) === Number(columnVal[dependencyKey])

export default (dependencyKey, multiple) => multiple
  ? (dependencyNewVal = [], columnVal) => columnVal
    ? columnVal.filter(currentValue => resolveValFunction(dependencyNewVal, currentValue, dependencyKey))
    : undefined
  : (dependencyNewVal = {}, columnVal) => columnVal
    ? resolveValFunction(dependencyNewVal, columnVal, dependencyKey) ? columnVal : undefined
    : undefined
