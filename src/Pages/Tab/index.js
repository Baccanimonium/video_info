import React, {useCallback, useState, useMemo} from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import NavigationDrawer from "@/Components/NavigationDrawer"
import TabBar from "@/Components/TabBar"
import {tabNavigationMenu} from "./constants"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"
import Icon from "@/Components/Icon"
import {plusIcon} from "./icons/plusIcon"
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu"
import Home from "./Pages/Home";
import NewTask from "../NewTask";
import DownloadTask from "../DownloadTask";
import {RouteContext} from "../../constants"
import DataSet from "@/Pages/Tab/Pages/DataSet";
import Reports from "@/Pages/Tab/Pages/Reports";
import Result from "@/Pages/Tab/Pages/Result";
import SelectionCriteria from "@/Pages/Tab/Pages/SelectionCriteria"
const PlusIcon = Icon(plusIcon)

const Tab = (a) => {
  const path = "/tab"
  const n = useNavigate()
  const [tabs, editTabs] = useState([])
  const [currentTabIndex, setTabIndex] = useState(0)

  const closeTab = useCallback((index) => {
    editTabs((tabs) => PureDeleteItems(tabs, index))
  }, [])

  const onOpenNewTab = useCallback((pathname) => {
    editTabs((tabs) => {
      n(`${path}${pathname}`)
      setTabIndex(tabs.length)
      return [...tabs, {tabName: `Задача ${tabs.length + 1}`, id: tabs.length}]
    })
  }, [tabs])

  const onChangeActiveTab = useCallback((newIndex) => {
    setTabIndex(newIndex)
  }, [])

  const OpenEditForm = useCallback(async ({applyContextMenu}) => {
    await applyContextMenu([
      {
        componentProps: {
          title: "Наборы данных",
        },
        onSubmit: onOpenNewTab,
      },
      {
        componentProps: {
          title: "Новый набор",
        },
        onSubmit: onOpenNewTab,
      },
      {
        componentProps: {
          title: "Открыть папку",
        },
        onSubmit: onOpenNewTab
      },
    ])
  }, [])

  return (
    <RouteContext.Provider value={useMemo(() => ({ path, onOpenNewTab }), [onOpenNewTab, path])}>
      <div className="display-flex h-100">
        <NavigationDrawer
          onOpenNewTab={onOpenNewTab}
          routes={tabNavigationMenu}
        />
        <div className="flex-container pos-relative w-100 overflow-hidden">
          <TabBar
            tabs={tabs}
            currentTabIndex={currentTabIndex}
            onOpenNewTab={onOpenNewTab}
            onCloseTab={closeTab}
            onChangeActiveTab={onChangeActiveTab}
          >
            <WithOpenContextMenu
              settings={{maxSize: "200", minSize: "200"}}
              onOpenContextMenu={OpenEditForm}
            >
            {(onOpenContextMenu) => (
              <button
                type="button"
                className="min-gold-button btn bg-color-lightGold"
                onClick={onOpenContextMenu}
              >
                <PlusIcon
                  className="color-white"
                  size="22"
                />
              </button>
            )}
          </WithOpenContextMenu>

        </TabBar>
        {tabs.length > 0
          ?
           <>
             {/*<TabHeader*/}
             {/*  path={urls[location.pathname]}*/}
             {/*/>*/}
             <Routes>
               <Route
                 path="/new_task"
                 element={<NewTask/>}
               />
               <Route
                 path="/download_task"
                 element={<DownloadTask/>}
               />
               <Route
                 path="/data_set"
                 element={<DataSet/>}
               />
               <Route
                 path="/report"
                 element={<Reports/>}
               />
               <Route
                 path="/selection_criteria"
                 element={<SelectionCriteria/>}
               />
               <Route
                 path="/result"
                 element={<Result/>}
               />
             </Routes>
           </>
          :
          <Home/>
        }

      </div>
    </div>
    </RouteContext.Provider>
  )
}

Tab.propTypes = {}

export default Tab
