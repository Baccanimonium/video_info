import React from 'react'
import {Route, Routes} from "react-router-dom";
import NavigationDrawer from "@/Components/NavigationDrawer"
import TabBar from "@/Components/TabBar"
import {tabNavigationMenu} from "./constants"
import Home from "../Pages/Home";
import NewTask from "../Pages/NewTask";
import DownloadTask from "../Pages/DownloadTask";
import TabController from '@/component_ocean/Logic/Tab'

const Tab = () => {

  return (
    <TabController userId={1}>
      {({ tabState: { tabs, currentTabIndex }, onOpenNewTab, onChangeActiveTab, onCloseTab }) => (
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
            onCloseTab={onCloseTab}
            onChangeActiveTab={onChangeActiveTab}
          >
          </TabBar>
          {tabs.length > 0
            ?
             <>
               <Routes>
                 <Route
                   path="/new_task/*"
                   element={<NewTask />}
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
      </div>)}
    </TabController>
  )
}

Tab.propTypes = {}

export default Tab
