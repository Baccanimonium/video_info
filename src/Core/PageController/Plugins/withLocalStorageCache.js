import { CASHED_FILTERS } from "@/constants"

// TODO: вынести получение состояния кэша во вьюэкс и нацелить компоненты на вьюэкс
export default (controller) => {
  const { filterQuery = {}, pageName } = controller.props
  let storageTimer
  let cache = localStorage.getItem(CASHED_FILTERS)
  cache = cache ? JSON.parse(cache) : undefined

  if (cache) {
    const cachedData = cache[pageName]
    if (cachedData && Object.keys(filterQuery).length === 0) {
      controller.setFilters(cachedData)
    }
  } else {
    cache = {}
  }

  function storeCache(cacheObject = {}) {
    cache = { ...cache, [pageName]: cacheObject }
    localStorage.setItem(CASHED_FILTERS, JSON.stringify(cache))
  }

  function handleUnmount() {
    clearTimeout(storageTimer)
    storeCache(this.props.filterQuery)
  }

  controller.componentWillUnmount = controller.componentWillUnmount
    ? new Proxy(controller.componentWillUnmount, {
      apply(target, thisArg, argArray) {
        handleUnmount.call(thisArg)
        target.apply(thisArg, argArray)
      }
    })
    : handleUnmount.bind(controller)

  controller.componentDidUpdate = new Proxy(controller.componentDidUpdate, {
    apply: (target, thisArg, argArray) => {
      target.apply(thisArg, argArray)
      const { filterQuery } = thisArg.props
      const prevProps = argArray[0]
      if (filterQuery !== prevProps.filterQuery) {
        clearTimeout(storageTimer)
        storageTimer = setTimeout(() => {
          storeCache(filterQuery)
        }, 30000)
      }
    }
  })
}
