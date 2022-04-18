import React, {useCallback, useEffect, useState} from 'react';
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
  const [eventIntervalRange, setEventIntervalRange] = useState()
  const [eventTimeRange, setEventTimeRange] = useState()
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
      openModalWindow({
        message: "Задача сохранена"
      })
    }
  }
  const sourceBtnTitle = (sourceName) => sourceName.length > 15 ? `${sourceName.substring(0, 15)}...` : sourceName
  const formPayload = { dateRange: []}
  const openOptions = useCallback((e) => {
    setActiveOption(e.target.innerText)
  },[setActiveOption])

  const showTips = useCallback((e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { setEvent(e) }, 500)
  }, [])

  const closeTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(undefined)
  }, [setEvent])


  const showTipsIntervalRange = useCallback((e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { setEventIntervalRange(e) }, 500)
  }, [])

  const closeTipsIntervalRange = useCallback(() => {
    clearTimeout(timerRef.current)
    setEventIntervalRange(undefined)
  }, [setEventIntervalRange])


  const showTipsTimeRange = useCallback((e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { setEventTimeRange(e) }, 500)
  }, [])

  const closeTipsTimeRange = useCallback(() => {
    clearTimeout(timerRef.current)
    setEventTimeRange(undefined)
  }, [setEventTimeRange])

  // Приводим любые даты к числам
  const getInputValue = memoizeOne((value) => Array.isArray(value)
    // eslint-disable-next-line max-len
    ? `${value[0] ? dayjs(value[0], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT) : ""} - ${value[1] ? dayjs(value[1], PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT) : ""}`
    : value ? dayjs(value, PRESENT_DATE_FORMAT).format(PRESENT_DATE_FORMAT) : "")

  const normalizedDate = getInputValue(continuousDateRange)

  return (
    <div className="flex-container pos-relative overflow-hidden">
      <div className="flex-container pos-relative">
        <WrapperButtons className="l-p-layout r-p-layout p-t-10 p-b-10 a-i-flex-start">
          <div
              className="display-flex a-i-center p-t-10 p-b-10"
          >
            <div className="color-grey">Источник данных: </div>
            <div className="text-align-left p-b-5">
              {/*{dataSource.title}*/}
            </div>
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
                      <div
                        className="cursor btn light-grey width-hover-grey-darken-0 m-l-14 link"
                        style={{"color": "black"}}
                        onClick={onOpenOverlayMenu}
                      >{
                        Object.keys(dataSource).length > 0 ? sourceBtnTitle(dataSource.title) :
                            <span>
                              <span
                                  className="fs-14"
                              >
                                + 
                              </span>
                              Добавить
                            </span>
                      }</div>
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
                                  >Заменить источник
                                  </span>
                                  <span
                                      onClick={deleteDataSource}
                                  >
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
          <div className="display-flex">
            <InformationCard
            >
              Отчет "Протокол роликов"
            </InformationCard>
            {normalizedDate.length > 3 && (
              <InformationCard
                style={{width: "200px"}}
              >
                {normalizedDate}
              </InformationCard>
            )}
            <InformationCard
            >
              !
            </InformationCard>
            <InformationCard
            >
              <VscChecklist/>
            </InformationCard>
          </div>
        </WrapperButtons>
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
                <TipsOverlayComponent
                  tipsText="Выбор даты или периода"
                  event={event}
                />
                <TipsOverlayComponent
                  tipsText="Выбор интервального диапазона"
                  event={eventIntervalRange}
                />
                <TipsOverlayComponent
                  tipsText="Выбор временных интервалов"
                  event={eventTimeRange}
                />
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
                      onMouseEnter={showTips}
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
                      onMouseEnter={showTipsIntervalRange}
                      onMouseLeave={closeTipsIntervalRange}
                      onClick={onEditValue}
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
                      onMouseEnter={showTipsTimeRange}
                      onMouseLeave={closeTipsTimeRange}
                      onClick={onEditValue}
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
              className="border-gold btn width-medium color-greyDarken w-18 m-r-10"
              onClick={saveTask}
            >
              Сохранить
            </BsButton>
            <BsButton
              type="button"
              className="border-gold btn width-medium color-greyDarken w-18"
              onClick={download}
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
