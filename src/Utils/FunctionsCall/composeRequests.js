export default (fn, time, valueKey) => {
  let timeout
  let args = []
  let callStack = []
  return function (a) {
    const functionCall = async () => {
      const data = await fn.apply(this, args)
      callStack.forEach(({ r, key }) => {
        if (data instanceof Map) {
          r(data.get(key))
        } else {
          r(data[key])
        }
      })
      args = []
      callStack = []
    }
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
    return new Promise(resolve => {
      args.push(a)
      callStack.push({
        r: resolve,
        key: typeof a === "object" ? a[valueKey] : a
      })
    })
  }
}

export const throttleRequest = (fn, time) => {
  let timeout
  let args = []
  let r
  let p
  return function (a) {
    const functionCall = async () => {
      const data = await fn.apply(this, args)
      r(data)
      args = []
      r = undefined
      p = undefined
    }
    clearTimeout(timeout)
    timeout = setTimeout(functionCall, time)
    if (!p) {
      p = new Promise(resolve => {
        r = resolve
      })
    }
    args.push(a)

    return p
  }
}
