import React, {useCallback, useEffect, useState, useMemo} from 'react';
import dayjs from "dayjs";

import {WrapperButtons} from "../DownloadTask/style";
import DataSourceModal from "./Components/ReportConstructor";
import {Navigate, Route, Routes, useMatch} from "react-router-dom";
import Result from "./Pages/Result";
import SelectionCriteria from "./Pages/SelectionCriteria";
import Reports from "./Pages/Reports"
import {Tabs} from "./constants"
import {
  PageLink, HeaderContainer,
  PagesLinkContainer,
} from "./styles"
import TipsOverlayComponent from "../../Components/TipsHelp";
import {PRESENT_DATE_FORMAT} from "@/constants"
import useTabItem from '@/component_ocean/Logic/Tab/TabItem'
import {ThemedContextMenu} from "@/Components/ContextMenus";
import {BorderButtonGold, GoldButton, LightGrayButton} from "@/Components/Buttons";
import BaseButton from "@/component_ocean/Components/Button";
import {AlertWindow} from "@/Components/ModalWindows";
import ContextMenu from "@/component_ocean/Components/ContextMenu";

const NewTask = () => {
  const [alert, setAlert] = useState("")
  const match = useMatch(`/tab/new_task/:idSource/:sourceTitle/*`)
  const matchWithTab = useMatch(`/tab/new_task/:idSource/:sourceTitle/:idTab/*`)
  const {
    tabState,
    setTabState,
    tabState: {dataSource}
  } = useTabItem({
    setTabName: useCallback(() => "new task", []),
    stateId: "task",
  })
  const [selectedSource, setSelectedSource] = useState({})
  const [openSourceMenu, setOpenSourceMenu] = useState(false)
  const [changeSourceMenu, setChangeSourceMenu] = useState(false)

  useEffect(() => {
    if (match && !dataSource) {
      const {params: {idSource, sourceTitle}} = match
      setTabState({dataSource: {id: idSource, title: sourceTitle}})
    }
  }, [])

  const updateTabState = useCallback((state) => {
    setTabState({...tabState, isDataChanged: true, ...state})
  }, [tabState])

  const selectSource = useCallback(() => {
    if (Object.keys(selectedSource).length > 0) {
      setOpenSourceMenu(false)
      setSelectedSource((currentVal) => {
        updateTabState({
          dataSource: currentVal
        })
        return {}
      })
    }
  }, [updateTabState, selectedSource, dataSource])

  const openMenu = useCallback(() => {
    setOpenSourceMenu(true)
  }, [])
  const deleteDataSource = useCallback(() => {
    setTabState({dataSource: undefined, isDataChanged: false})
  }, [setTabState])
  const changeDataSource = useCallback(() => {
    setChangeSourceMenu(true)
  }, [])
  const closeDataSourceMenu = useCallback(() => {
    setChangeSourceMenu(false)
  }, [])

  const closeSourceMenu = useCallback(() => {
    setOpenSourceMenu(false)
    closeDataSourceMenu()
  }, [])

  const saveTask = () => {
    if (tabState.continuousDateRange.length) {
      setTimeout(() => {
        setAlert("Задача сохранена")
        updateTabState({
          saveData: true,
          isDataChanged: false,
        })
      }, 1000)
    }
  }

  const sourceBtnTitle = (sourceName) => sourceName.length > 15 ? `${sourceName.substring(0, 15)}...` : sourceName

  const normalizedDate = useMemo(() => tabState.continuousDateRange?.length > 0
    ? `${tabState.continuousDateRange[0]
      ? dayjs(tabState.continuousDateRange[0], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT)
      : ""} - ${tabState.continuousDateRange[1]
      ? dayjs(tabState.continuousDateRange[1], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT)
      : ""}`
    : "", [tabState.continuousDateRange])

  return (
    <div className="flex-container relative overflow-hidden">
      <div className="flex-container relative">
        <WrapperButtons className="pl-5 pr-5 pt-5 pb-5 items-start">
          <div className="flex items-center">
            <div className="color-grey">Источник данных:</div>
            <TipsOverlayComponent>
              {({renderTips, destroyTips}) => (dataSource
                ? <LightGrayButton
                  type="button"
                  onMouseDown={openMenu}
                  className="items-center flex ml-3.5 relative"
                  onMouseEnter={renderTips({text: dataSource.title})}
                  onMouseLeave={destroyTips}
                >
                  {sourceBtnTitle(dataSource.title)}
                </LightGrayButton>
                :
                <LightGrayButton
                  className="items-center flex ml-3.5"
                  type="button"
                  onMouseDown={openMenu}
                >
                    <span className="fs-14">
                      + 
                    </span>
                  Добавить
                </LightGrayButton>
              )}
            </TipsOverlayComponent>
            {openSourceMenu &&
              <ContextMenu
                onClose={closeSourceMenu}
                className="flex flex-col justify-center p-2.5"
                width={350}
              >
                {
                  dataSource && !changeSourceMenu
                    ? (
                      <ThemedContextMenu>
                        <div className="flex flex-col p-2">
                          <button
                            type="button"
                            onClick={changeDataSource}
                            className="pb-2.5 text-start"
                          >
                            Заменить источник
                          </button>
                          <button
                            type="button"
                            className="text-start"
                            onClick={deleteDataSource}
                          >
                            Удалить источник
                          </button>
                        </div>
                      </ThemedContextMenu>
                    )
                    :
                    (
                      <ThemedContextMenu>
                        <DataSourceModal
                          selectSource={selectSource}
                          setSelectedSource={setSelectedSource}
                        />
                      </ThemedContextMenu>
                    )
                }
              </ContextMenu>

            }
          </div>
          {
            normalizedDate &&
            <div className="flex">
              {normalizedDate.length > 3 && (
                <LightGrayButton className="mr-1.5 w-52">
                  {normalizedDate}
                </LightGrayButton>
              )}
              <LightGrayButton>!</LightGrayButton>
            </div>
          }
        </WrapperButtons>
        <Routes>
          <Route
            path="/:idSource/:sourceTitle/*"
            element={<div className="flex-container overflow-hidden">
              <HeaderContainer className="flex items-center">
                <PagesLinkContainer>
                  <div className="flex bg-color-greyLight-4 p-1 rounded-md mb-2.5">
                    {Tabs.map(({path, text}) => (
                      <PageLink
                        to={path}
                        key={text}
                        type="button"
                        className={matchWithTab && matchWithTab.params.idTab === path ? "active" : ""}
                      >
                        {text}
                      </PageLink>
                    ))}
                  </div>
                </PagesLinkContainer>
                <div className="flex items-center ml-auto">
                  <BorderButtonGold
                    type="button"
                    className="w-36 mr-2"
                  >
                    Загрузить
                  </BorderButtonGold>
                  <BorderButtonGold
                    type="button"
                    className="w-36"
                  >
                    Остановить
                  </BorderButtonGold>
                </div>
              </HeaderContainer>
              <div className="p-2.5 flex-container overflow-hidden">
                <Routes>
                  <Route
                    path="/selection_criteria/*"
                    element={<SelectionCriteria tabState={tabState} updateTabState={updateTabState}/>}
                  />
                  <Route
                    path="/reports/*"
                    element={<Reports tabState={tabState} updateTabState={updateTabState}/>}
                  />
                  <Route
                    path="/result/*"
                    element={<Result tabState={tabState} updateTabState={updateTabState}/>}
                  />
                  <Route
                    path="*"
                    element={<Navigate to="selection_criteria"/>}
                  />
                </Routes>
              </div>
              <div className="pl-5 pr-5 justify-end">
                <div className="flex justify-end mb-5">
                  <GoldButton
                    type="button"
                    disabled={!tabState.isDataChanged}
                    className="w-36 color-greyDarken"
                    onClick={saveTask}
                  >
                    Сохранить
                  </GoldButton>
                </div>
              </div>
            </div>}
          />
          {dataSource && <Route
            path="*"
            element={<Navigate to={`${dataSource.id}/${dataSource.title}`}/>}
          />}
        </Routes>
      </div>
      <AlertWindow
        className="flex flex-col items-center mt-90"
        open={alert}
        onClose={() => setAlert("")}
      >
        <text className="text-center break-words my-auto mx-12">
          {alert}
        </text>
        <BaseButton className="bg-color-lightGold color-white w-48 mt-auto mb-8">
          Ок
        </BaseButton>
      </AlertWindow>
    </div>
  )
};

export default NewTask;
