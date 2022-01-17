import unwrapQueryObject from "@/Utils/unwrapQueryObject"
import throttleAccumulator from "@/Utils/FunctionsCall/throttleAccumulator"
import withPagination from "@/Core/PageController/Plugins/withPagination"
import isEqual from "lodash/isEqual"

const getFilterCount = ({ query_params, v_find, ...fQ } = {}) => Object.values(fQ).reduce((acc, value) => {
  acc += Array.isArray(value) ? value.length : 1
  return acc
}, 0)

// код приводит v_filter к формату который понимает апи варена,
export function unleashVarenTechnologyFilter(v_filter) {
  return v_filter
    ? {
      v_filter: Object
        .entries(v_filter)
        .map(([key, value]) => `${key}:(${typeof value[0] === "object"
          ? value.map(({ ID }) => ID).join(",")
          : value.join(",")})`).join(",")
    }
    : {}
}

export default (controller, plugins, { filterQuery } = {}) => {
  const updateHandler = plugins.includes(withPagination)
    ? (controller) => { controller.handlePagination(1); controller.loadData() }
    : (controller) => { controller.loadData() }

  controller.state.selectedFiltersCount = getFilterCount(controller.props.filterQuery)

  controller.loadData = new Proxy(controller.loadData, {
    apply: (target, thisArg, argArray) => {
      const { filterQuery = {}, sortQuery } = thisArg.props
      const [params = {}] = argArray
      argArray.splice(0, 1, {
        ...params,
        ...unwrapQueryObject(filterQuery),
        ...unleashVarenTechnologyFilter(filterQuery.v_filter),
        v_sort: sortQuery
      })
      return target.apply(thisArg, argArray)
    }
  })

  controller.handleFilterInput = throttleAccumulator(function (...args) {
    this.props.updateTabState({
      filterQuery: args.reduce(
        (acc, [value, id]) => {
          // для пустых строк удаляем ключ
          if (typeof value === "string" && value === "") {
            const { [id]: key, ...q } = acc
            return q
          }
          acc[id] = value
          return acc
        },
        { ...this.props.filterQuery }
      )
    })
  }, 10).bind(controller)
  controller.handleSortInput = function handleSortInput(sortQuery) {
    this.props.updateTabState({ sortQuery })
  }.bind(controller)

  controller.setFilters = function setFilters(filterQuery) {
    this.props.updateTabState({ filterQuery })
  }.bind(controller)

  controller.componentDidUpdate = new Proxy(controller.componentDidUpdate, {
    apply: (target, thisArg, argArray) => {
      target.apply(thisArg, argArray)
      const { sortQuery, filterQuery } = thisArg.props
      const prevProps = argArray[0]
      if (sortQuery !== prevProps.sortQuery) {
        updateHandler(thisArg)
      } else if (!isEqual(filterQuery, prevProps.filterQuery)) {
        updateHandler(thisArg)
        thisArg.setState({ selectedFiltersCount: getFilterCount(filterQuery) })
      }
    }
  })
  if (filterQuery) {
    controller.setFilters(filterQuery)
  }
}
