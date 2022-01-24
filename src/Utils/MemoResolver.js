
export default () => {
  const cache = new WeakMap()
  let emptyObj = {}
  return (...args) => {
    return args.reduce((acc, item = emptyObj) => {
      let hash
      if (cache.has(item)) {
        hash = cache.get(item)
      } else {
        hash = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        cache.set(item, hash)
      }
      return acc + hash
    }, "")

  }
}