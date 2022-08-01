import React, {useCallback, useEffect, useState, useRef, useMemo} from 'react';
import dayjs from "dayjs";

import {WrapperButtons} from "../DownloadTask/style";
import DataSourceModal from "./Components/ReportConstructor/DataSourceModal";
import {Navigate, Route, Routes, useMatch} from "react-router-dom";
import Result from "./Pages/Result";
import SelectionCriteria from "./Pages/SelectionCriteria";
import Reports from "./Pages/Reports"
import {Tabs} from "./constants"
import {
  ButtonsAndPracticesTabContainer,
  PracticesButtonsContainer,
  WrapperButton
} from "@/Components/PracticesBar/styles";
import {PageLink} from "./styles"
import TipsOverlayComponent from "../../Components/TipsHelp/TipsOverlayComponent";
import {PRESENT_DATE_FORMAT} from "@/constants"
import useTabItem from '@/component_ocean/Logic/Tab/TabItem'
import {ContextMenuStyle} from "@/Components/ContextMenu";
import {BorderButtonGold, GoldButton, LightGrayButton} from "@/Components/Buttons";
import BaseButton from "@/component_ocean/Components/Button";
import {AlertWindow} from "@/Components/ModalWindows";

const NewTask = ({updateState}) => {
  const [alert, setAlert] = useState("")
  const match = useMatch(`/tab/new_task/:idSource/:sourceTitle/*`)
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
  const [continuousDateRange, setContinuousDateRange] = useState([])
  const [event, setEvent] = useState()
  const [isDataChanged, setIsDataChanged] = useState(false)

  useEffect(() => {
    if (match && !dataSource) {
      const {params: {idSource, sourceTitle}} = match
      setTabState({dataSource: {id: idSource, title: sourceTitle}})
    }
  }, [])

  const updateTabState = useCallback((state) => {
    setTabState({...tabState, ...state})
  }, [tabState])

  const timerRef = useRef()

  const selectSource = useCallback(() => {
    if (Object.keys(selectedSource).length > 0) {
      setOpenSourceMenu(false)
      setSelectedSource((currentVal) => {
        setTabState({
          dataSource: currentVal
        })
        return {}
      })
      setIsDataChanged(true)
    }
  }, [selectedSource, dataSource])

  const openMenu = useCallback(() => {
    setOpenSourceMenu(true)
  }, [])
  const deleteDataSource = useCallback(() => {
    setIsDataChanged(false)
  }, [])
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

  // useEffect(() => {
  //   closeDataSourceMenu()
  //
  // }, [dataSource])

  const saveTask = () => {
    if (dataSource || continuousDateRange.length) {
      setTimeout(() => {
        setAlert("Задача сохранена")
        setIsDataChanged(false)
        updateState({
          saveData: true
        })
      }, 1000)
    }
  }

  const sourceBtnTitle = (sourceName) => sourceName.length > 15 ? `${sourceName.substring(0, 15)}...` : sourceName

  const showTips = useCallback((name) => (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setEvent(e)
    }, 500)
  }, [])

  const closeTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(undefined)
  }, [setEvent])

  const normalizedDate = useMemo(() => continuousDateRange.length > 0
    ? `${continuousDateRange[0]
      ? dayjs(continuousDateRange[0], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT)
      : ""} - ${continuousDateRange[1]
      ? dayjs(continuousDateRange[1], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT)
      : ""}`
    : "", [continuousDateRange])

  return (
    <div className="flex-container relative overflow-hidden">
      <div className="flex-container relative">
        <WrapperButtons className="pl-5 pr-5 pt-5 pb-5 items-start">
          <div className="flex items-center">
            <div className="color-grey">Источник данных:</div>
            <button
              type="button"
              onMouseDown={openMenu}
            >
              {
                dataSource && (
                  <TipsOverlayComponent
                    key="source"
                    tipsText={dataSource.title}
                    event={event}
                  />
                )
              }
              {dataSource ? <LightGrayButton
                  className="items-center flex ml-3.5 relative"
                  onMouseEnter={showTips(dataSource.title)}
                  onMouseLeave={closeTips}
                >
                  {sourceBtnTitle(dataSource.title)}
                </LightGrayButton>
                :
                <LightGrayButton
                  className="items-center flex ml-3.5"
                >
                  <span className="fs-14">
                    + 
                  </span>
                  Добавить
                </LightGrayButton>
              }
            </button>
            {openSourceMenu && <ContextMenuStyle
              onClose={closeSourceMenu}
              className="flex flex-col justify-center p-2.5"
              width={350}
            >
              {
                dataSource && !changeSourceMenu
                  ? (
                    <div className="flex flex-col p-2">
                        <span
                          onClick={changeDataSource}
                          className="pb-2.5"
                        >
                          Заменить источник
                        </span>
                      <span onClick={deleteDataSource}>
                          Удалить источник
                        </span>
                    </div>
                  )
                  :
                  (
                    <DataSourceModal
                      selectSource={selectSource}
                      setSelectedSource={setSelectedSource}
                    />
                  )
              }
            </ContextMenuStyle>
            }
          </div>
          {
            normalizedDate &&
            <div className="flex">
              {normalizedDate.length > 3 && (
                <LightGrayButton className="m-r-5 w-52">
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
              <ButtonsAndPracticesTabContainer className="flex items-center">
                <PracticesButtonsContainer>
                  <WrapperButton className="flex bg-color-greyLight-4">
                    {Tabs.map(({path, text}) => (
                      <PageLink
                        to={path}
                        key={text}
                        type="button"
                      >
                        {text}
                      </PageLink>
                    ))}
                  </WrapperButton>
                </PracticesButtonsContainer>
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
              </ButtonsAndPracticesTabContainer>
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
                    disabled={isDataChanged}
                    className="btn sign-up-btn color-greyDarken w-18"
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
