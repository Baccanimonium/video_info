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
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"

const Tab = ({openModalWindow}) => {
  const path = "/tab"
  const n = useNavigate()
  const [tabs, editTabs] = useState([])
  const [currentTabIndex, setTabIndex] = useState(0)

  const closeTab = useCallback((index) => {
    const [ {saveData, editData, id} ] = tabs
    if (saveData || !editData) {
      editTabs((tabs) => PureDeleteItems(tabs, index))
    } else {
      openModalWindow({
        dialogueParams: {
          title: "Изменения не сохранены!",
          cancelLabel: "Не сохранять",
          submitLabel: "Сохранить"
        },
        message: "Вы хотите сохранить изменения в задаче?",
        onSubmit: async () => {
          editTabs((tabs) => {
            return tabs.reduce((acc, item) => {
              if (item.id === id) {
                acc.push({...item, saveData: true})
              }
              return acc
            }, [])
          })
        },
        onCancel: () => {
          console.log("cancel")
        }
      })
    }
  }, [tabs])

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
    console.log(tabIndex, state)
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
                   element={<NewTask state={tabs[currentTabIndex]} updateState={updateState(currentTabIndex)}/>}
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

export default WithOpenModalWindow(Tab)
