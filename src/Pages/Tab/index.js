import React, {useCallback, useState} from 'react'
import {Route, Routes} from "react-router-dom";
import NavigationDrawer from "@/Components/NavigationDrawer"
import TabBar from "@/Components/TabBar"
import {tabNavigationMenu, FooterTabs} from "./constants"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"
import Icon from "@/Components/Icon"
import {plusIcon} from "./icons/plusIcon"
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu"
import Home from "./Pages/Home";
import TabFooter from "@/Pages/Tab/TabFooter";
import DataSet from "@/Pages/Tab/Pages/DataSet";
import Reports from "@/Pages/Tab/Pages/Reports";
import Criteria from "@/Pages/Tab/Pages/Criteria";
import Result from "@/Pages/Tab/Pages/Result";
import SelectionCriteria from "@/Pages/Tab/Pages/SelectionCriteria"
import TabHeader from "../../Components/TabHeader";

const PlusIcon = Icon(plusIcon)

const Tab = () => {
  const [tabs, editTabs] = useState([{tabName: "Закладка 1", id: 0}])
  const [currentTabIndex, setTabIndex] = useState(0)

  const closeTab = useCallback((index) => {
    editTabs((tabs) => PureDeleteItems(tabs, index))
  }, [])

  const onOpenNewTab = useCallback(() => {
    editTabs((tabs) => {
      setTabIndex(tabs.length)
      return [...tabs, {tabName: `Закладка ${tabs.length + 1}`, id: tabs.length}]
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
    <div className="display-flex h-100">
      <NavigationDrawer routes={tabNavigationMenu}/>
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
        <TabHeader/>

        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/selection_criteria"
            element={<SelectionCriteria/>}
          />
          <Route
            path="/selection criteria"
            element={<Home/>}
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
            element={<Criteria/>}
          />
          <Route
            path="/result"
            element={<Result/>}
          />
        </Routes>
        <TabFooter buttons={FooterTabs} parentUrl="/tab"/>
      </div>
    </div>
  )
}

Tab.propTypes = {}

export default Tab
