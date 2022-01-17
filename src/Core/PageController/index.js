import React, { useMemo } from "react"
import memoizeOne from "memoize-one"
import { Redirect, Route, Switch } from "react-router-dom"
import withFilters from "@/Core/PageController/Plugins/withFilters"
import withPagination from "@/Core/PageController/Plugins/withPagination"
import withLocalStorageCache from "@/Core/PageController/Plugins/withLocalStorageCache"
import withCreateSnapshotAfterLoadNewData from "@/Core/PageController/Plugins/withCreateSnapshotAfterLoadNewData"
import debounce from "@/Utils/debounce"
import history from "@/history"
import Page404 from "@/Pages/404"
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import { PermissionsContext } from "@/constants"
import { OverrideSaveData } from "@/Core/PageController/constants"
import BoundPagePermissionsToApiService from "./BoundPagePermissionsToApiService"

export { withFilters, withPagination, withLocalStorageCache, withCreateSnapshotAfterLoadNewData }

export const ResolveChildrenComponents = (routes, parentPath) => routes
  .map(({ path, ...r }) => ({ path: `${parentPath}${path}`, ...r }))

function createBaseController(
  BaseClass,
  { childrenRoutes, service: { loadData, saveData, ...requests }, plugins, pluginsSettings }
) {
  class PageController extends BaseClass {
    constructor(props) {
      super(props)
      this.childrenRef = React.createRef()
      this.state = {
        ...this.state,
        isDataChanged: false,
        saveHandler: null
      }
      Object.entries(requests).forEach(([functionKey, functionBody]) => {
        this[functionKey] = async (payload) => {
          const { updateTabState } = this.props
          try {
            updateTabState({ loading: true })
            return await functionBody.call(this, payload)
          } catch (e) {
            console.log(e)
          } finally {
            updateTabState({ loading: false })
          }
        }
      })
      if (plugins) {
        plugins.forEach(p => { p(this, plugins, pluginsSettings) })
      }
      // TODO нужно отдебажить хуки которые вызывают этот метот, сейчас метод загрузки срабатывает больше 1 раза без дебаунса
      this.loadData = debounce(this.loadData, 50)
    }

    blockWindowReload = (e) => {
      e.preventDefault()
      e.returnValue = ""
      return ""
    }

    setOverRideSaveDataFunction = (saveHandler) => {
      this.setState({ saveHandler })
    }

    setDataChangedFlag = () => {
      const { openModalWindow } = this.props
      if (process.env.NODE_ENV === "production") {
        window.addEventListener("beforeunload", this.blockWindowReload)
      }
      this.ublock = history.block(({ pathname }) => {
        openModalWindow({
          dialogueParams: {
            title: "Changes not saved!",
            cancelLabel: "Leave tab",
            submitLabel: "Save"
          },
          message: "If you leave the tab, all changes\n will be deleted!",
          onSubmit: async () => {
            const response = await (this.state.saveHandler || this.saveData)()
            if (!(response instanceof Error)) {
              setTimeout(() => {
                history.push(pathname)
              }, 150)
            }
          },
          onCancel: () => {
            this.unBlockHistory()
            history.push(pathname)
          }
        })
        return false
      })
      this.setState({ isDataChanged: true })
    }

    unBlockHistory = () => {
      if (this.ublock) {
        this.ublock()
        delete this.ublock
        window.removeEventListener("beforeunload", this.blockWindowReload)
      }
    }

    unsetDataChangedFlag = () => {
      this.unBlockHistory()
      this.setState({ isDataChanged: false })
    }

    loadData = new Proxy(loadData, {
      apply: (target, thisArg, argArray) => this.requestWrapper(() => target.apply(thisArg, argArray)),
    })

    saveData = saveData
      ? new Proxy(saveData, {
        apply: async (target, thisArg, argArray) => {
          const data = this.requestWrapper(() => target.apply(this, argArray))
          this.unsetDataChangedFlag()
          return data
        }
      })
      : null

    async requestWrapper(req) {
      const { updateTabState } = this.props
      try {
        updateTabState({ loading: true })
        const r = await req()
        updateTabState({
          loading: false,
          fetched: true,
          error: false,
          data: r,
          uploadDataOnce: true,
        })
        return r
      } catch (e) {
        console.log(e)
        updateTabState({
          loading: false,
          error: true,
          fetched: false,
        })
        return new Error("failed request")
      }
    }

    isDataNeedToUpload = () => {
      const { fetched, loading, error } = this.props
      if (!fetched && !loading && !error) {
        this.loadData()
      }
    }

    componentDidUpdate(...args) {
      if (BaseClass.prototype.componentDidUpdate) {
        super.componentDidUpdate.apply(this, args)
      }
      this.isDataNeedToUpload()
    }

    componentDidMount() {
      if (BaseClass.prototype.componentDidMount) {
        super.componentDidMount()
      }
      this.isDataNeedToUpload()
    }

    storeData = (data) => { this.props.updateTabState({ data }) }

    saveEntireDocument = async () => {
      if (childrenRoutes) {
        const { childrenRef: { current }, state: { isDataChanged: parentDataChanged } } = this
        if (current) {
          const { state: { isDataChanged }, saveData } = current
          if (isDataChanged) {
            await saveData()
          }
        }
        if (parentDataChanged) {
          await this.saveData()
        }
      }
    }

    updateChildrenState = (name) => (state) => {
      const { updateTabState } = this.props
      updateTabState(state, name)
    }

    memoizedPath = memoizeOne((path) => `${path}/404`)

    resolveChildrenRoutes = memoizeOne(ResolveChildrenComponents)

    filteredByRightsChildrenRoutes = memoizeOne((routes, userRights) => routes.filter(({ name }) => userRights[name]))

    renderChildrenRoutes = (props, slot) => {
      const { match: { path }, tabState, userPermissions } = this.props
      const path404 = this.memoizedPath(path)
      const pageRoutes = this.resolveChildrenRoutes(this.filteredByRightsChildrenRoutes(childrenRoutes, userPermissions), path)
      return (
        <Switch>
          {pageRoutes.map(({ path, name, component: Child }) => (
            <Route
              key={name}
              path={path}
              render={(routeProps) => (
                <PermissionsContext.Provider value={userPermissions[name]}>
                  <Child
                    ref={this.childrenRef}
                    {...props}
                    {...routeProps}
                    {...tabState[name]}
                    tabState={tabState[name]}
                    pageRights={userPermissions[name]}
                    pageName={name}
                    updateTabState={this.updateChildrenState(name)}
                  >
                    {slot}
                  </Child>
                </PermissionsContext.Provider>
              )}
            />
          ))}
          <Route
            path={path404}
            render={(...routeProps) => <Page404 {...routeProps} redirectPath={pageRoutes[0].path} />}
          />
          <Redirect from={path} to={pageRoutes[0].path} />
          <Redirect to={path404} />
        </Switch>
      )
    }

    render = () => (
      <OverrideSaveData.Provider value={this.setOverRideSaveDataFunction}>
        {super.render()}
      </OverrideSaveData.Provider>
    )
  }

  PageController.displayName = BaseClass.name

  return WithOpenModalWindow(PageController)
}

const memoizedRoute = memoizeOne(ResolveChildrenComponents)

function createStateLessController(ChildrenComponent, { childrenRoutes = [] }) {
  return (props) => {
    const { match: { path }, tabState, updateTabState, userPermissions } = props
    const updateChildrenState = (name) => (state) => { updateTabState(state, name) }
    const path404 = useMemo(() => `${path}/404`, [path])

    return (
      <ChildrenComponent
        {...props}
        renderChildrenRoutes={(props, slot, customRoutes = childrenRoutes) => {
          const pageRoutes = memoizedRoute(customRoutes, path)

          return (
            <Switch>
              {pageRoutes.map(({ path, name, component: Child }) => (
                <Route
                  key={name}
                  path={path}
                  render={(routeProps) => (
                    <Child
                      {...props}
                      {...routeProps}
                      {...tabState[name]}
                      tabState={tabState[name]}
                      pageRights={userPermissions[name]}
                      pageName={name}
                      updateTabState={updateChildrenState(name)}
                    >
                      {slot}
                    </Child>
                  )}
                />
              ))}
              <Route
                path={path404}
                render={(...routeProps) => <Page404 {...routeProps} redirectPath={pageRoutes[0].path} />}
              />
              <Redirect from={path} to={pageRoutes[0].path} />
              <Redirect to={path404} />
            </Switch>
          )
        }}
      />
    )
  }
}

export default (ClassComponent, settings = {}) => BoundPagePermissionsToApiService(settings.service
  ? createBaseController(ClassComponent, settings)
  : createStateLessController(ClassComponent, settings))
