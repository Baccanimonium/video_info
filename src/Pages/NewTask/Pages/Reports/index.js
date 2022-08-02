import React, {useCallback, useMemo, useRef, useState} from 'react';
import {DataSetContainer} from "../../styles";
import {ReportContainer, WrapperInput} from "./styles"
import Tree from '@/component_ocean/Components/Tree';
import {ButtonsContainer, Button} from "@/Components/ButtonsTabBar";
import CheckBox from "@/component_ocean/Components/Inputs/CheckBox";
import RadioButton from "@/component_ocean/Components/Inputs/RadioButton";
import Select from "@/component_ocean/Components/Inputs/Select";
import DatePicker from "@/component_ocean/Components/Inputs/DatePicker";
import ScrollBar from "react-perfect-scrollbar";
import {copy} from "@/Icons/copy";
import {file} from "@/Icons/file";
import {basketTrash} from "@/Icons/basketTrash";
import {StyleIcon} from "@/Components/styleIcon";
import CalculationOptionsComponent from './Components/CalculationOptions'
import {ReportOptions, GenderOptions,
  GeoOptions, LocationOptions, NdbCorrectionList, CurrentAdsList, BaseDayOptions, optionsButtons, bottomOptionsButtons
} from "./constants"

import SelectedParams from "./Components/SelectedParams";
import Dictionaries from "./Components/Dictionaries";
import {Resizer, ContainerDatePicker} from "./styles";
import {useRecoilState} from "recoil";
import {cachedLocalStorageValue} from "@/component_ocean/Logic/Storages/localStorageCache";
import {AlwaysRenderDropDown} from "@/Components/AlwaysRenderDropDown";

const defaultReportState = {
  precision: 4,
  time: " ",
  duration: " ",
}

const Reports = ({ tabState: { reportState= defaultReportState}, updateTabState }) => {
  const refColumnsContainer = useRef()
  const [resizeState, setResizeState] = useState({})
  const [columnState, setColumnState] = useRecoilState(cachedLocalStorageValue("task_reports"))
  const gridStyles = useMemo(() => {
    const [firstColumn = "1.4fr", secondColumn = "2fr"] = resizeState.columnState || columnState || []
    return { gridTemplateColumns: `${firstColumn} ${secondColumn} auto` };
  }, [columnState,resizeState])

  const setReportsState = useCallback((state) => {
    updateTabState({ reportState: { ...reportState, ...state } })
  }, [reportState])

  const [activeOption, setActiveOption] = useState("Опции расчета")
  const [bottomTabsState, setBottomTabsState] = useState("Geo")

  const onFormInput = useCallback((id) => (value) => {
    setReportsState(({ [id]: value }))
  }, [setReportsState])

  const openOptions = useCallback((e) => {
    setActiveOption(e.target.innerText)
  }, [setActiveOption])

  const openTab = useCallback((tabKey, setTabFunc) => () => {
    setTabFunc(tabKey)
  }, [setActiveOption])


  const onColumnResizing = useCallback(({clientX}) => {
    setResizeState((prevState) => {
      const {columnState, index, initialWidth, initPointerPosition} = prevState
      const nextColumnsState = [...columnState]
      nextColumnsState[index] = `${initialWidth - initPointerPosition + clientX}px`
      return ({
        ...prevState,
        columnState: nextColumnsState,
      })
    })
  }, []);

  const onColumnStopResize = useCallback(() => {
    document.body.style.cursor = ""
    document.body.style.userSelect = ""
    let state
    setResizeState(({ columnState }) => {
      state = columnState
      return {}
    })
    document.removeEventListener("mousemove", onColumnResizing)
    document.removeEventListener("mouseup", onColumnStopResize)
    setColumnState(state)
  }, [setColumnState, columnState]);

  const handleResize = useCallback((index) => (e) => {
    const { children: {0: firstChild, 1: secondChild } } = refColumnsContainer.current

    e.preventDefault()
    e.stopPropagation()
    document.addEventListener("mousemove", onColumnResizing)
    document.addEventListener("mouseup", onColumnStopResize)
    setResizeState({
      initPointerPosition: e.clientX,
      index,
      initialWidth: refColumnsContainer.current.children[index].clientWidth,
      columnState: [`${firstChild.clientWidth}px`, `${secondChild.clientWidth}px`]
    })
    document.body.style.cursor = "e-resize"
    document.body.style.userSelect = "none"
  }, [])

  return (
    <DataSetContainer className="flex-container ">
      <div className="flex-container">
        <ReportContainer className="h-full" style={gridStyles} ref={refColumnsContainer}>
          <ScrollBar>
            <div className="pr-4 separator-right mb-4 relative overflow-hidden">
              <h3>
                Выбрать отчет
              </h3>
              <div className="mb-5">
                <Select
                  labelKey="label"
                  valueKey="id"
                  id="report"
                  value={reportState["report"]}
                  options={ReportOptions}
                  onInput={onFormInput("report")}
                />
              </div>
              <div className="flex-container overflow-hidden">
                <ButtonsContainer>
                  {optionsButtons.map(({id, label}) => (
                    <Button
                      className={`${label === activeOption ? 'current' : ''}`}
                      onClick={openOptions}
                      key={id}
                    >
                      {label}
                    </Button>
                  ))}
                </ButtonsContainer>
                <div className="mt-4 flex flex-col overflow-hidden">
                  {activeOption === "Опции расчета" && (
                    <CalculationOptionsComponent reportState={reportState} onFormInput={onFormInput}/>
                  )}
                  {activeOption === "Опции охвата" && (
                    <>
                      <WrapperInput className="flex items-center separator-bot-greyLight pb-4">
                        <div className="pr-4">NBD коррекция:</div>
                        <Select
                          valueKey="label"
                          labelKey="label"
                          options={NdbCorrectionList}
                          id={"NBD"}
                          value={reportState["NBD"]}
                          onInput={onFormInput("NBD")}
                          placeholder="Впишите NBD канал"
                        />
                      </WrapperInput>
                      <div className=" pb-4">
                        <div className="pb-4">
                          Базовый день:
                        </div>
                        <RadioButton
                          id="baseDayOptions"
                          value={reportState["baseDayOptions"]}
                          onInput={onFormInput("baseDayOptions")}
                          meaning={BaseDayOptions[0]}
                          label="Автоматическое определение"
                          className="mb-4"
                        />
                        <RadioButton
                          id="baseDayOptions"
                          value={reportState["baseDayOptions"]}
                          onInput={onFormInput("baseDayOptions")}
                          meaning={BaseDayOptions[1]}
                          label="Определение пользователем"
                          className="pb-4"
                        />
                        <ContainerDatePicker className="flex flex-col w-full">
                          <div className="pr-4 mb-2">Выберите дату:</div>
                          <DatePicker
                            className="w-full"
                            id="dateRange"
                            formPayload={reportState}
                            value={reportState["dateRange"]}
                            onInput={onFormInput("dateRange")}
                            placeholder="Выберите дату"
                            DropDownComponent={AlwaysRenderDropDown}
                          />
                        </ContainerDatePicker>
                      </div>
                    </>
                  )}
                  {activeOption === "Доп опции" && (
                    <div className="separator-bot-greyLight mb-4">
                      <div className="mb-2.5">Текущий список предметов рекламы:</div>
                      <Select
                        className="mb-2.5"
                        options={CurrentAdsList}
                        id="listAdvertising"
                        value={reportState["listAdvertising"]}
                        onInput={onFormInput("listAdvertising")}
                        valueKey="id"
                        labelKey="label"
                      />
                      <CheckBox
                        id="originalOutputs"
                        label="Количество только оригинальных выходов"
                        value={reportState["originalOutputs"]}
                        onInput={onFormInput("originalOutputs")}
                        className="mb-4"
                      />
                      <Tree
                        className="pb-4"
                        options={GenderOptions}
                      />
                      <ButtonsContainer>
                        {bottomOptionsButtons.map(({id, label}) => (
                          <Button
                            className={`${label === bottomTabsState ? 'current' : ''}`}
                            onClick={openTab(label, setBottomTabsState)}
                            key={id}
                          >
                            {label}
                          </Button>
                        ))}
                      </ButtonsContainer>
                      <div className="flex pt-4">
                        {bottomTabsState === "Geo" && (
                          <div className="w-full">
                            <Select
                              valueKey="label"
                              labelKey="label"
                              options={GeoOptions}
                              id={"Geo"}
                              value={reportState["Geo"]}
                              onInput={onFormInput("Geo")}
                            />
                          </div>
                        )}
                        {bottomTabsState === "Location" && (
                          <div className="w-full">
                            <Tree
                              defaultExpandAll
                              options={LocationOptions}
                            />
                          </div>
                        )}
                        <div className="flex ml-auto pl-2.5 items-center">
                          <StyleIcon
                            icon={file}
                            className="mr-1.5"
                            size={21}
                          />
                          <StyleIcon
                            icon={copy}
                            className="mr-1.5"
                            size={22}
                          />
                          <StyleIcon
                            icon={basketTrash}
                            className=""
                            size={22}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Resizer onMouseDown={handleResize(0)} />
          </ScrollBar>
          <div className="flex-container overflow-hidden relative">
            <Dictionaries
              reportState={reportState}
              setReportsState={onFormInput}
            />
            <Resizer onMouseDown={handleResize(1)} />
          </div>
          <SelectedParams
            reportState={reportState}
            setReportsState={setReportsState}
          />
        </ReportContainer>
      </div>
    </DataSetContainer>
  );
};

Reports.propTypes = {};

export default Reports;
