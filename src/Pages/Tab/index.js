import React, {useCallback, useState, useMemo} from 'react'
import {Route, Routes, useNavigate} from "react-router-dom";
import NavigationDrawer from "@/Components/NavigationDrawer"
import TabBar from "@/Components/TabBar"
import {tabNavigationMenu} from "./constants"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"
import Home from "./Pages/Home";
import NewTask from "../NewTask";
import DownloadTask from "../DownloadTask";
import {RouteContext} from "../../constants"
import PureUpdateArrayItems from "../../Utils/Arrays/PureUpdateArrayItems";

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

  const updateState = useCallback((tabIndex) => (state) => {
    editTabs(p => PureUpdateArrayItems(p, tabIndex, ({...p[tabIndex], ...state })))
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
          </TabBar>
          {tabs.length > 0
            ?
             <>
               <Routes>
                 <Route
                   path="/new_task"
                   element={<NewTask state={tabs[currentTabIndex]} updateState={updateState}/>}
                 />
                 <Route
                   path="/download_task"
                   element={<DownloadTask/>}
                 />
             </Routes>
               {/*<TabFooter buttons={FooterTabs} parentUrl="/tab"/>*/}
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
