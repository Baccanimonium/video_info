import React, {useCallback, useState} from 'react';
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
import {calendar} from "./icons/calendar"
import Icon from "@/Components/Icon"
import {PracticeButton, PracticesButtonsContainer, WrapperButton} from "../../Components/PracticesBar/styles";
import {InformationCard} from "./styles"

const Calendar = Icon(calendar)

const NewTask = ({openModalWindow}) => {
  const download = () => {

  }
  const [selectedSource, setSelectedSource] = useState({})
  const [dataSource, setDataSource] = useState({})
  const [openSourceMenu, setOpenSourceMenu] = useState(false)
  const [continuousDateRange, setContinuousDateRange] = useState([])
  const [activeOption, setActiveOption] = useState("Критерии отбора")

  const selectSource = useCallback(() => {
    setOpenSourceMenu(false)
    setSelectedSource((currentVal) => {
      setDataSource(currentVal)
      return {}
    })
  }, [selectedSource, dataSource])
  const closeMenu = useCallback(() => { setOpenSourceMenu(false) }, [])
  const openMenu = useCallback(() => { setOpenSourceMenu(true) }, [])
  const saveTask = () => {
    if (dataSource || continuousDateRange.length) {
      openModalWindow({
        message: "Задача сохранена"
      })
    }
  }
  const formPayload = { dateRange: []}
  const openOptions = useCallback((e) => {
    setActiveOption(e.target.innerText)
  },[setActiveOption])
  return (
    <div className="flex-container pos-relative overflow-hidden">
      <div className="flex-container pos-relative">
        <WrapperButtons className="l-p-layout r-p-layout p-t-10 p-b-10 a-i-flex-start">
          <div>
            <div className="color-grey p-b-5">Источник данных:</div>
            <div className="text-align-left p-b-5">
              {dataSource.title}
            </div>
            <RenderOverlayMenu
              onOpenOverlayMenu={openMenu}
              renderOverlayMenu={openSourceMenu}
              menuComponent={OverlayMenu}
            >
              {(overlayBoundRef, onOpenOverlayMenu, OverlayMenu) => (
                <WithCloseWindow
                  closeWindow={closeMenu}
                  byKey={openSourceMenu}
                >
                  {(onMouseDown) => (
                    <button
                      ref={overlayBoundRef}
                      type="button"
                      onMouseDown={onMouseDown}
                    >
                      <div
                        className="cursor color-lightGold link"
                        onClick={onOpenOverlayMenu}
                      >
                        Добавить источник данных
                      </div>
                      {openSourceMenu && (
                        <OverlayMenu
                          className="display-flex flex-column j-c-center p-10 h-100"
                        >
                          <DataSourceModal
                            setSelectedSource={setSelectedSource}
                          />
                          <button
                            className="border-gold btn min text-uppercase"
                            type="button"
                            onClick={selectSource}
                          >
                            ok
                          </button>
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
            <InformationCard
            >
              04.04.2022 - 05.04.2022
            </InformationCard>
            <InformationCard
            >
              !
            </InformationCard>
            <InformationCard
            >
              !
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
                <div className="p-r-10">
                  <div className="color-grey p-b-5">Непрерывный диапазон дат:</div>
                  <DatePicker
                    id="continuousDateRange"
                    range
                    formPayload={formPayload}
                    value={continuousDateRange}
                    onInput={setContinuousDateRange}
                    placeholder="Непрерывный диапазон дат"
                  />
                </div>
                <div className="display-flex p-t-19">
                  <BsButton
                    type="button"
                    className="border-black btn width-max color-greyDarken w-18 m-r-5"
                    onClick={download}
                  >
                    Интервальный диапазон дат
                  </BsButton>
                  <BsButton
                    type="button"
                    className="border-black btn width-midi color-greyDarken w-18"
                    onClick={download}
                  >
                    Временные интервалы
                  </BsButton>
                </div>
                <InformationCard><Calendar/></InformationCard>
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
