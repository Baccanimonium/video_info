export const calcPaginationState = (limit, currentPage) => ({ v_limit: limit, v_offset: (currentPage - 1) * limit })

export default (controller, plugins, { defaultPage = 1, defaultLimit = 100 } = {}) => {
  controller.loadData = new Proxy(controller.loadData, {
    apply: async (target, thisArg, argArray) => {
      const { paginationState: { currentPage = defaultPage, limit = defaultLimit } = {} } = thisArg.props
      const [params = {}] = argArray
      argArray.splice(0, 1, { ...params, ...calcPaginationState(limit, currentPage) })
      const data = await target.apply(thisArg, argArray)
      if (data) {
        thisArg.updatePaginationState(data.COUNT ? { totalPages: Math.ceil(data.COUNT / limit) } : { cupReached: data.length !== limit })
      }
      return data
    }
  })
  controller.updatePaginationState = function updatePaginationState(state) {
    this.props.updateTabState({
      paginationState: {
        currentPage: this.props.paginationState?.currentPage || defaultPage,
        ...this.props.paginationState,
        ...state
      }
    })
  }.bind(controller)
  controller.handlePagination = function handlePagination(currentPage) {
    this.updatePaginationState({ currentPage })
  }.bind(controller)

  controller.componentDidUpdate = new Proxy(controller.componentDidUpdate, {
    apply: (target, thisArg, argArray) => {
      const prevProps = argArray[0]
      target.apply(thisArg, argArray)
      if (thisArg.props.paginationState?.currentPage !== prevProps?.paginationState?.currentPage) {
        thisArg.loadData()
      }
    }
  })
}
