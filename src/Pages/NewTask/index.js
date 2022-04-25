import React, {useCallback, useEffect, useState, useRef} from 'react';
import BsButton from "../../Components/BsButton";
import PracticesBar from "../../Components/PracticesBar";
import {WrapperButtons} from "../DownloadTask/style";
import DataSourceModal from "../Tab/Pages/ReportConstructor/DataSourceModal";
import DatePicker from "../../Components/Fields/DatePicker";
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import OverlayMenu from "@/Components/OverlayMenu"
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import {Route, Routes} from "react-router-dom";
import Result from "./Content/result";
import SelectionCriteria from "./Content/selectionCriteria";
import Reports from "./Content/reports";
import {Tabs} from "./constants"
import {PracticeButton, PracticesButtonsContainer, WrapperButton} from "../../Components/PracticesBar/styles";
import {InformationCard, InformationCardMin} from "./styles"
import TipsOverlayComponent from "../../Components/TipsHelp/TipsOverlayComponent";
import DefaultPreview from "@/Components/Fields/InputContstuctor/PreviewFields/DefaultPreview"
import WithSubmitButtonHOC from "@/Core/Decorators/WithSubmitButtonHOC"
import ContextMenuValueEditor from "@/Components/Fields/InputContstuctor/InputControllers/ContextMenuValueEditor"
import memoizeOne from "memoize-one";
import dayjs from "dayjs";
import { PRESENT_DATE_FORMAT } from "@/constants"
import { BsCalendar, BsCalendar3, BsCalendar4, BsCalendar3Range } from 'react-icons/bs';
import {VscChecklist} from 'react-icons/vsc';

const configForBtnCalendar = [
  {
    id: "ContinuousDateRange",
    label: "Выбор даты или периода",
  },
  {
    id: "IntervalRange",
    label: "Выбор интервального диапазона",
  },
  {
    id: "ContinuousDateRange",
    label: "Выбор временных интервалов",
  }
]

const editConfig = {
  component: WithSubmitButtonHOC(DatePicker),
  label: "Выбор даты или периода",
  placeholder: "Выбор даты или периода",
  allWaysOpen: true,
  preview: DefaultPreview.constructor,
  range: true
}

const editConfigIntervalRange = {
  component: WithSubmitButtonHOC(DatePicker),
  label: "Выбор интервального диапазона",
  placeholder: "Выбор интервального диапазона",
  allWaysOpen: true,
  preview: DefaultPreview.constructor,
  range: true
}

const editConfigTimeRange = {
  component: WithSubmitButtonHOC(DatePicker),
  label: "Выбор временных интервалов",
  placeholder: "Выбор временных интервалов",
  allWaysOpen: true,
  preview: DefaultPreview.constructor,
  range: true
}



const NewTask = ({openModalWindow}) => {
  const download = () => {

  }
  const [selectedSource, setSelectedSource] = useState({})
  const [dataSource, setDataSource] = useState({})
  const [openSourceMenu, setOpenSourceMenu] = useState(false)
  const [changeSourceMenu, setChangeSourceMenu] = useState(false)
  const [continuousDateRange, setContinuousDateRange] = useState([])
  const [continuousIntervalRange, setContinuousIntervalRange] = useState([])
  const [activeOption, setActiveOption] = useState("Критерии отбора")
  const [event, setEvent] = useState()
  const [tipsName, setTipsName]= useState("")

  const timerRef = useRef()

  const selectSource = useCallback(() => {
    setOpenSourceMenu(false)
    setSelectedSource((currentVal) => {
      setDataSource(currentVal)
      return {}
    })
  }, [selectedSource, dataSource])
  const closeMenu = useCallback(() => { setOpenSourceMenu(false) }, [])
  const openMenu = useCallback(() => { setOpenSourceMenu(true) }, [])
  const openChangeSourceMenu = useCallback(() => { setChangeSourceMenu(true) }, [])
  const deleteDataSource = useCallback(() => { setDataSource({}) }, [])
  const changeDataSource = useCallback(() => { setChangeSourceMenu(true) }, [])
  const closeDataSourceMenu = useCallback(() => { setChangeSourceMenu(false) }, [])
  const closeSourceMenu = () => {
    closeMenu();
    closeDataSourceMenu()
  }

  useEffect(() => {
    closeDataSourceMenu()
  }, [dataSource])

  const saveTask = () => {
    if (dataSource || continuousDateRange.length) {
      setTimeout( () => {
        openModalWindow({
          message: "Задача сохранена"
        })
      }, 1000)
    }
  }

  const sourceBtnTitle = (sourceName) => sourceName.length > 15 ? `${sourceName.substring(0, 15)}...` : sourceName
  const formPayload = { dateRange: []}
  const openOptions = useCallback((e) => {
    setActiveOption(e.target.innerText)
  },[setActiveOption])

  const showTips = useCallback((name) => (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { setEvent(e) }, 500)
    setTipsName(name)
  }, [])

  const closeTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(undefined)
    setTipsName("")
  }, [setEvent])

  // Приводим любые даты к числам
  const getInputValue = memoizeOne((value) => Array.isArray(value)
    // eslint-disable-next-line max-len
    ? `${value[0] ? dayjs(value[0], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT) : ""} - ${value[1] ? dayjs(value[1], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT) : ""}`
    : value ? dayjs(value, PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT) : "")

  const normalizedDate = getInputValue(continuousDateRange)

  const showModalWindowForSave = useCallback(() => {
    openModalWindow({
      dialogueParams: {
        title: "Изменения не сохранены!",
        cancelLabel: "Не сохранять",
        submitLabel: "Сохранить"
      },
      message: "Вы хотите сохранить изменения в задаче?",
      onSubmit: async () => {
        saveTask()
      },
      onCancel: () => {
       console.log("cancel")
      }
    })
  }, [])

  return (
    <div className="flex-container pos-relative overflow-hidden">
      <div className="flex-container pos-relative">
        <WrapperButtons className="l-p-layout r-p-layout p-t-20 p-b-20 a-i-flex-start">
          <div className="display-flex a-i-center">
            <div className="color-grey">Источник данных: </div>
            <RenderOverlayMenu
              onOpenOverlayMenu={openMenu}
              renderOverlayMenu={openSourceMenu}
              menuComponent={OverlayMenu}
            >
              {(overlayBoundRef, onOpenOverlayMenu, OverlayMenu) => (
                <WithCloseWindow
                  closeWindow={closeSourceMenu}
                  byKey={openSourceMenu}
                >
                  {(onMouseDown) => (
                    <button
                      ref={overlayBoundRef}
                      type="button"
                      onMouseDown={onMouseDown}
                    >
                      <>
                        <TipsOverlayComponent
                          key="source"
                          tipsText={dataSource.title}
                          event={event}
                          />
                        <div
                          className="cursor a-i-center display-flex btn light-grey width-hover-grey-darken-0 m-l-14 pos-relative"
                          style={{color: "black", height: "34px"}}
                          onClick={onOpenOverlayMenu}
                          onMouseEnter={showTips("source")}
                          onMouseLeave={closeTips}
                        >
                          {
                          Object.keys(dataSource).length > 0 ? sourceBtnTitle(dataSource.title) :
                            <span>
                              <span
                                  className="fs-14"
                              >
                                + 
                              </span>
                              Добавить
                            </span>
                          }
                        </div>
                      </>
                      {openSourceMenu && (
                        <OverlayMenu
                          className="display-flex flex-column j-c-center p-10 h-100"
                        >
                          {
                            Object.keys(dataSource).length > 0 && !changeSourceMenu ? (
                                <div
                                    className="display-flex fd-column p-8"
                                >
                                  <span
                                      onClick={changeDataSource}
                                      className="p-b-10"
                                  >
                                    Заменить источник
                                  </span>
                                  <span onClick={deleteDataSource}>
                                    Удалить источник
                                  </span>
                                </div>
                            ) : (
                                <DataSourceModal
                                selectSource={selectSource}
                                setSelectedSource={setSelectedSource}
                                />
                            )
                          }
                        </OverlayMenu>
                      )}
                    </button>
                  )}
                </WithCloseWindow>
              )}
            </RenderOverlayMenu>
          </div>
          {
            Object.keys(dataSource).length > 0 &&
            <div className="display-flex">
              {/*<InformationCard>*/}
              {/*  Отчет "Протокол роликов"*/}
              {/*</InformationCard>*/}
              {normalizedDate.length > 3 && (
                  <InformationCard style={{width: "200px"}}>
                    {normalizedDate}
                  </InformationCard>
              )}
              <InformationCard>
                !
              </InformationCard>
              {/*<InformationCard>*/}
              {/*  <VscChecklist/>*/}
              {/*</InformationCard>*/}
            </div>
          }
        </WrapperButtons>
        {
          Object.keys(dataSource).length > 0 &&
          <>
            <PracticesButtonsContainer>
              <WrapperButton className="display-flex bg-color-greyLight-4">
                {Tabs.map(({ path, text }) => (
                    <PracticeButton
                        key={text}
                        className={`${text === activeOption ? 'current-practice' : ''}`}
                        type="button"
                        onClick={openOptions}
                    >
                      {text}
                    </PracticeButton>
                ))}
              </WrapperButton>
            </PracticesButtonsContainer>
            <div className="p-t-10 p-b-10 p-r-10 p-l-10">
              {
                activeOption === "Критерии отбора" && (
                    <div className="display-flex">
                      {configForBtnCalendar.map(({label, id}) => (
                          <>
                            {
                              tipsName === label && (
                                  <TipsOverlayComponent
                                      key={id}
                                      tipsText={label}
                                      event={event}
                                  />
                              )
                            }
                          </>
                      ))}
                      <ContextMenuValueEditor
                          id="ContinuousDateRange"
                          label="Выбор даты или периода"
                          fields={editConfig}
                          formPayload={formPayload}
                          value={continuousDateRange}
                          onInput={setContinuousDateRange}
                          minSize="320"
                      >
                        {(onEditValue) => (
                            <InformationCardMin
                                onMouseEnter={showTips("Выбор даты или периода")}
                                onMouseLeave={closeTips}
                                onClick={onEditValue}
                                className="mini"
                            >
                              <BsCalendar/>
                            </InformationCardMin>
                        )}
                      </ContextMenuValueEditor>

                      <ContextMenuValueEditor
                          id="IntervalRange"
                          label="Выбор интервального диапазона"
                          fields={editConfigIntervalRange}
                          formPayload={formPayload}
                          value={continuousIntervalRange}
                          onInput={setContinuousIntervalRange}
                          minSize="320"
                      >
                        {(onEditValue) => (
                            <InformationCardMin
                                onMouseEnter={showTips("Выбор интервального диапазона")}
                                onMouseLeave={closeTips}
                                onClick={!continuousDateRange.length && onEditValue}
                                className="mini"
                            >
                              <BsCalendar3/>
                            </InformationCardMin>
                        )}
                      </ContextMenuValueEditor>

                      <ContextMenuValueEditor
                          id="TimeRange"
                          label="Выбор временных интервалов"
                          fields={editConfigTimeRange}
                          formPayload={formPayload}
                          value={continuousIntervalRange}
                          onInput={setContinuousIntervalRange}
                          minSize="320"
                      >
                        {(onEditValue) => (
                            <InformationCardMin
                                onMouseEnter={showTips("Выбор временных интервалов")}
                                onMouseLeave={closeTips}
                                onClick={!continuousDateRange.length && onEditValue}
                                className="mini"
                            >
                              <BsCalendar3Range/>
                            </InformationCardMin>
                        )}
                      </ContextMenuValueEditor>
                    </div>
                )
              }
              {
                activeOption === "Отчеты" && (
                    <div>
                      Отчеты
                    </div>
                )
              }
              {
                activeOption === "Результат" && (
                    <div>
                      Результат
                    </div>
                )
              }
            </div>
          </>
        }
        {/*<PracticesBar buttons={Tabs} parentUrl="/tab/new_task"/>*/}
        {/*<Routes>*/}
        {/*  <Route*/}
        {/*    path="/result"*/}
        {/*    element={<Result/>}*/}
        {/*  />*/}
        {/*  <Route*/}
        {/*    path="/selection_criteria"*/}
        {/*    element={<SelectionCriteria/>}*/}
        {/*  />*/}
        {/*  <Route*/}
        {/*    path="/reports"*/}
        {/*    element={<Reports/>}*/}
        {/*  />*/}
        {/*</Routes>*/}

        <div className="flex-container l-p-layout r-p-layout">
          <div className="flex-container">

          </div>
          <div className="display-flex j-c-flex-end m-b-20">
            <BsButton
              type="button"
              className="border-gold btn sign-up-btn color-greyDarken w-18 m-r-10"
              onClick={saveTask}
            >
              Сохранить
            </BsButton>
            <BsButton
              type="button"
              className="border-gold btn sign-up-btn color-greyDarken w-18"
              onClick={showModalWindowForSave}
            >
              Продолжить
            </BsButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithOpenModalWindow(NewTask);
