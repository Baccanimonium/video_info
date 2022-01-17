import React, { useRef } from "react"
import { useWatch } from "@/Utils/hooks/useWatch"
import replaceParamsInPathName from "@/Utils/replaceParmasInPathName"

const routeUpdater = ({ routeParamKey, dataKey }) => ({ data = {}, match: { path, params }, location: { pathname }, history }, refPage) => {
  useWatch(data[dataKey], (newValue = "") => {
    if (newValue && String(newValue) !== params[routeParamKey]) {
      const changedState = refPage.current?.state.isDataChanged
      changedState && refPage.current?.unBlockHistory()
      history.push(replaceParamsInPathName({
        pathname,
        path,
        params: { ...params, [routeParamKey]: String(newValue).replace(/\//gi, "∕") }
      }))
      changedState && refPage.current?.setDataChangedFlag()
    }
  })
}

const DataToRouteParamsBounder = (routeConfig) => {
  const { component: Comp, meta: { routeKey, tabName } = {} } = routeConfig
  if (!routeKey && !tabName) {
    return routeConfig
  }
  let updater
  if (routeKey && tabName) {
    const routeKeyUpdater = routeUpdater(routeKey)
    const routeTabNameUpdater = routeUpdater(tabName)
    updater = (props, refPage) => {
      routeKeyUpdater(props, refPage)
      routeTabNameUpdater(props, refPage)
    }
  } else {
    updater = routeUpdater(routeKey || tabName)
  }
  return {
    ...routeConfig,
    component: (props) => {
      const refPage = useRef()
      updater(props, refPage)
      return <Comp {...props} ref={refPage} />
    }
  }
}

export default DataToRouteParamsBounder
