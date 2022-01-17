// нужна чтобы сгенерировать путь по ссылке на значение => [4, "CHILDREN", 0, "CHILDREN", 7]
import PureUpdateArrayItems from "@/Utils/Arrays/PureUpdateArrayItems"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"

export default function findPathRecursive(value, data, childrenKey, sequence = []) {
  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const oldItem = data[i]
      const currItem = value[i]
      if (oldItem !== currItem) {
        if (!currItem) {
          return [...sequence, i]
        } if (!oldItem[childrenKey] && currItem[childrenKey]) {
          return [...sequence, i, childrenKey]
        } if (oldItem[childrenKey] !== currItem[childrenKey]) {
          const result = findPathRecursive(currItem[childrenKey], oldItem[childrenKey], childrenKey, [...sequence, i, childrenKey])
          if (result !== sequence) {
            return result
          }
        } else {
          for (const k in currItem) {
            if (oldItem[k] !== currItem[k]) {
              return [...sequence, i, k]
            }
          }
        }
      }
    }
  } else {
    return [...sequence, 0]
  }
  return sequence
}

// нужна чтобы сгенерировать путь из точного порядка в путь по значениям
// [4, "CHILDREN", 0, "CHILDREN", 7] => ["DEALS", "CHILDREN", "REGISTRY", "CHILDREN", "SAVE"]
export function generateDataPath(path, data, valueKey, childrenKey) {
  return path.reduce((acc, key) => {
    acc.data = acc.data[key]
    if (key === childrenKey) {
      acc.path.push({ key })
    } else {
      acc.path.push({ value: acc.data[valueKey] })
    }
    return acc
  }, { path: [], data }).path
}

// нужна чтобы сгенерировать текущий путь по значениям для вычисляемых ключей
// ["DEALS", "CHILDREN", "REGISTRY", "CHILDREN", "SAVE"] => [4, "CHILDREN", 0, "CHILDREN", 7]
export function regenerateActualPath(path, data, valueKey, childrenKey) {
  const acc = { path: [], data, parent: undefined }
  for (const { key, value } of path) {
    acc.parent = data
    if (key === childrenKey) {
      acc.data = acc.data[key]
      acc.path.push(key)
    } else {
      const indexOfValue = value.findIndex(({ [valueKey]: val }) => val === value)
      if (indexOfValue >= 0) {
        acc.path.push(indexOfValue)
        acc.data = acc.data[indexOfValue]
      } else {
        break
      }
    }
  }
  return { path: [], data, parent: undefined }
}

function recursiveRecreateOrDelete(path, data, i) {
  if (path[i + 1] !== undefined) {
    const result = recursiveRecreateOrDelete(path, data[path[i]], i + 1)
    if (Array.isArray(data)) {
      return PureUpdateArrayItems(data, path[i], result)
    }
    return { ...data, [path[i]]: result }
  }
  return PureDeleteItems(data, path[i])
}

export function recursiveRecreatePathAndDeleteTarget(path, data) {
  return recursiveRecreateOrDelete(path, data, 0)
}
// ["DEALS", "CHILDREN", "REGISTRY", "CHILDREN", "SAVE"] => { DEALS: { CHILDREN: { REGISTRY: CHILDREN: ["SAVE" ] } } } } }

export function generateTreeFromArray(container = {}, path, value, i = 0) {
  if (!container[path[i]]) {
    container[path[i]] = path.length - 1 === i ? [value] : {}
  } else if (path.length - 1 === i) {
    container[path[i]].push(value)
  } else {
    generateTreeFromArray(container, path, value, i + 1)
  }
  return container
}

const copy = (obj) => Array.isArray(obj) ? Array.from(obj) : { ...obj }

export function setDataByPath(data, value, path, saveFunction = (value) => value) {
  const temData = copy(data)
  let letTempValue = temData
  let i = 0
  for (i; i < path.length - 1; i++) {
    const key = path[i]
    letTempValue[key] = copy(letTempValue[key])
    letTempValue = letTempValue[key]
  }
  letTempValue[path[i]] = saveFunction(value, letTempValue[path[i]], path[i])
  return temData
}
