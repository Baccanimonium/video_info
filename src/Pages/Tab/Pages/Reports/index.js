import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {DataSetContainer} from "@/Pages/Tab/Pages/DataSet/styles";
import {ReportContainer, WrapperInput} from "./styles"
import Tree from '@/Components/Tree';
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";
import {ButtonsContainer, Button} from "../../../../Components/ButtonsTabBar/style";
import BsCheckBox from "../../../../Components/Fields/BsCheckBox";
import RadioButton from "../../../../Components/Fields/RadioButton";
import BsInput from "../../../../Components/Fields/BsInput";
import Select from "../../../../Components/Fields/Select";
import DatePicker from "../../../../Components/Fields/DatePicker";
import {ContainerDatePicker} from "../../../../Components/TabHeader/style";
import ScrollBar from "react-perfect-scrollbar";
import Icon from '@/Components/Icon'
import {copy } from "../../../../Icons/copy";
import {file } from "../../../../Icons/file";
import {basketTrash } from "../../../../Icons/basketTrash";


import DemographicRow from "./Components/DemographicRow";
import {NumericInputWithControls} from "../../../../Components/Fields/NumericInput";
const FileIcon = Icon(file)
const CopyIcon = Icon(copy)
const BasketIcon = Icon(basketTrash)

const ReportOptions = [
  {
    id: 1,
    label: 'Отчет "Протокол роликов"'
  },
  // {
  //   id: 2,
  //   label: 'Отчет "Протокол блоков"'
  // },
  // {
  //   id: 3,
  //   label: 'Отчет "Протокол программ"'
  // },
  // {
  //   id: 4,
  //   label: 'Отчет "Time Band"'
  // },
]

const CalculationOptions = [
  "по сумме", "по среднему"
]

const dayOptions = [{ label: "Пн"}, { label: "Вт"}, { label: "Ср"}, { label: "Чт"}, { label: "Пт"}, { label: "Сб"}, { label: "Вс"}]

const GenderOptions = [
  {
    id: 1,
    title: "Базовая Аудитория"
  },
  {
    id: 2,
    title: "Affinity аудитория"
  },
  {
    id: 3,
    title: "Co-viewing аудитория"
  },
]

const GeoOptions = [
  {
    id: 1,
    label: "Определено ЦА"
  },
  {
    id: 2,
    label: "Россия Ноль Плюс"
  },
  {
    id: 3,
    label: "Россия Сто пПлюс"
  },
]

const LocationOptions = [
  {
    id: '0',
    title: 'Locations',
    children: [
      {
        id: '0-0',
        title: 'Total Location',
      },
    ]
  }
]

const NdbCorrectionList = [
  {
    id: 0,
    label: "None"
  },
  {
    id: 1,
    label: "Standard"
  },
  {
    id: 2,
    label: "Extended"
  },
]

const CurrentAdsList = [
  {
    id: 0,
    label: "Russia"
  }
]

const BaseDayOptions = ["Автоматическое определение","Определение пользователем"]

const statistics = [
  { key: 2274, title: "GRP" },
  { key: 2272, title: "WRP" },
  { key: 2270, title: "Mins" },
  { key: 2268, title: "Share" },
]

const attributes = [
  { key: 2274, title: "Year" },
  { key: 2272, title: "Month" },
  { key: 2270, title: "Month excl year" },
  { key: 2268, title: "Month digt" },
  { key: 2271, title: "TvCompany" },
  { key: 2265, title: "TvNet" },
]

const attributesButtons = [
  {
    id: 1,
    label: "Статистика",

  },
  {
    id: 2,
    label: "Атрибуты"
  },
  {
    id: 3,
    label: "Демография"
  }
]

const optionsButtons = [
  {
    id: 1,
    label: "Опции расчета",
  },
  {
    id: 2,
    label: "Опции охвата"
  },
  {
    id: 3,
    label: "Доп опции"
  }
]


const bottomOptionsButtons = [
  {
    id: 1,
    label: "Geo",
  },
  {
    id: 2,
    label: "Location"
  },
]

const demographic = [
  {
    id: "fdgdsf0gdfg",
    title: "11-34",
    folder: "",
    type: "Public",
    owner:  "Taschfd",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Ycvb",
    children: [
      {
        id: "fdgdsf0gdfg1",
        title: "11-34",
      },
      {
        id: "fdgdsf0gdfg2",
        title: "11-33",
      },
      {
        id: "fdgdsf0gdfg3",
        title: "11-32",
      },
      {
        id: "fdgdsf0gdfg4",
        title: "11-31",
      },
      {
        id: "fdgdsf0gdfg5",
        title: "11-30",
      },
    ]
  },
  {
    id: "fdgdsf0gdfg1",
    title: "15-20",
    folder: "",
    type: "Public",
    owner:  "Oklfd",
    lastUpdateDate: "17.12.2018",
    lastUpdater: "Krocv",
    children: [
      {
        id: "fdgdsf0gdfg01",
        title: "11-34",
      },
      {
        id: "fdgdsf0gdfg02",
        title: "11-33",
      },
      {
        id: "fdgdsf0gdfg03",
        title: "11-32",
      },
      {
        id: "fdgdsf0gdfg04",
        title: "11-31",
      },
      {
        id: "fdgdsf0gdfg05",
        title: "11-30",
      },
    ]
  },
  {
    id: "fdgdsf0gdfg2",
    title: "15-24",
    folder: "",
    type: "Private",
    owner:  "Tmndfui",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Lkjdfh",
    children: [
      {
        id: "fdgdsf0gdfg012",
        title: "11-34",
      },
      {
        id: "fdgdsf0gdfg022",
        title: "11-33",
      },
      {
        id: "fdgdsf0gdfg032",
        title: "11-32",
      },
      {
        id: "fdgdsf0gdfg042",
        title: "11-31",
      },
      {
        id: "fdgdsf0gdfg052",
        title: "11-30",
      },
    ]
  },
]

const Reports = () => {
  const [reportState, setReportsState] = useState({
    precision: 4,
    time: " ",
    duration: " ",
  })
  const [selectedKey, setSelectedKey] = useState("")
  const [checked, setCheckedKey] = useState("")
  const [freeState, setFreeState] = useState([])
  const [freeStateTwo, setFreeStateTwo] = useState([])
  const [demographicState, setDemographicState] = useState([])

  const [activeButton, setActiveButton] = useState("Статистика")
  const [activeOption, setActiveOption] = useState("Опции расчета")
  const [bottomTabsState, setBottomTabsState] = useState("Geo")

  const [videoProtocol, setVideoProtocol] = useState()
  const [programProtocol, setProgramProtocol] = useState()
  const [blockProtocol, setBlockProtocol] = useState()
  const [timeBand, setTimeBand] = useState()

  const [byAmount, setByAmount] = useState()
  const [average, setAverage] = useState()

  const [totalLine, setTotalLine] = useState()
  const [interval, setInterval] = useState()
  const [growing, setGrowing] = useState()

  const [week, setWeek] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  const [groupEvents , setGroupEvents] = useState()

  const [NBD , setNBD] = useState()
  const [valueDate, setValueDate] = useState([])
  const [monitoringDates, setMonitoringDates] = useState()
  const [automaticDetection , setAutomaticDetection] = useState()
  const [userDetection , setUserDetection] = useState()
  const [Qual, setQual] = useState("")
  const [aver, setAve] = useState("")

  const [listAdvertising , setListAdvertising] = useState("")
  const [originalOutputs , setOriginalOutputs] = useState("")

  const onFormInput = useCallback((id) => (value) => {
    setReportsState((prevState) => ({ ...prevState, [id]: value }))
  }, [])

  const formPayload = { dateRange: [] }
  const TreeData = useMemo(() => [
    {
      id: '0',
      title: 'Статистика',
      children: freeState.map((item, i)=> ({
        ...item, id: `0-${i}`
      }) ),
    },
    {
      id: '1',
      title: 'Атрибуты',
      children: freeStateTwo.map((item, i)=> ({
        ...item, id: `1-${i}`
      }) ),
    },
    {
      id: '2',
      title: 'Демография',
      children: Object.entries(demographicState).map(([index, children]) => {
        const originObj = demographic[index]
        return {
          title: originObj.title,
          id: originObj.id,
          children: Object.values(children).map((elemID) => originObj.children.find((originElem) => originElem.id === elemID))
        }
      }),
    },

  ], [freeStateTwo, freeState, demographicState])

  const onSelect =  useCallback((selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.selKey = info.node.props.eventKey;
  }, []);
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);

  const openAttributes = useCallback((e) => {
    setActiveButton(e.target.innerText)
  },[setActiveButton])

  const openOptions = useCallback((e) => {
    setActiveOption(e.target.innerText)
  },[setActiveOption])

  const openTab = useCallback((tabKey, setTabFunc) => () => {
    setTabFunc(tabKey)
  },[setActiveOption])


  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden">
      <ScrollBar>
        <div className="flex-container p-l-15 p-r-15">
          <ReportContainer className="h-100">
            <div className="p-r-15 separator-right m-b-15">
              <h3>
                Выбрать отчет
              </h3>
              <div className="m-b-20">
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
                <div className="m-t-15 display-flex fd-column overflow-hidden">
                  {activeOption === "Опции расчета" && (
                    <div className="flex-container">
                      <div className="display-flex p-b-15 separator-bot-greyLight">
                        <RadioButton
                          id="byAmount"
                          label="по сумме"
                          value={reportState["calculationOptions"]}
                          onInput={onFormInput("calculationOptions")}
                          meaning={CalculationOptions[0]}
                          className="m-r-30"
                        />
                        <RadioButton
                          id="average"
                          label="по среднему"
                          meaning={CalculationOptions[1]}
                          value={reportState["calculationOptions"]}
                          onInput={onFormInput("calculationOptions")}
                          className=""
                        />
                      </div>
                      <div className="p-t-15 separator-bot-greyLight">
                        <BsCheckBox
                          id="totalLine"
                          label="Итоговая строка"
                          value={totalLine}
                          onInput={setTotalLine}
                          className="m-b-15"
                        />
                        <BsCheckBox
                          id="interval"
                          label="Промежуточный итог"
                          value={interval}
                          onInput={setInterval}
                          className="m-b-15"
                        />
                        <BsCheckBox
                          id="growing"
                          label="Нарастающий итог"
                          value={growing}
                          onInput={setGrowing}
                          className="m-b-15"
                        />
                        <WrapperInput
                          value={reportState["precision"]}
                        >
                          <div className="p-r-15">Точность: </div>
                          <div>
                            <NumericInputWithControls
                              id={"precision"}
                              value={reportState["precision"]}
                              onInput={onFormInput("precision")}
                            />
                          </div>
                        </WrapperInput>
                      </div>
                      <div className="p-t-15 separator-bot-greyLight">
                        <WrapperInput
                          value="ПН     "
                        >
                          <div className="p-r-15">Первый день недели:</div>
                          <div>
                            <Select
                              valueKey="label"
                              labelKey="label"
                              options={dayOptions}
                              id={"week"}
                              value={reportState["week"]}
                              onInput={onFormInput("week")}
                            />
                          </div>
                        </WrapperInput>
                        <WrapperInput
                          value={reportState["time"]}
                        >
                          <div className="p-r-15">Время выхода событий:</div>
                          <div className="display-flex a-i-center">
                            <NumericInputWithControls
                              id={"time"}
                              value={reportState["time"]}
                              onInput={onFormInput("time")}
                            />
                            <div className="p-l-5">мин</div>
                          </div>
                        </WrapperInput>
                      </div>
                      <div className="p-t-15 separator-bot-greyLight">
                        <WrapperInput
                          value={reportState["duration"]}
                        >
                          <div className="p-r-15">Базовая длительность:</div>
                          <div className="display-flex a-i-center">
                            <NumericInputWithControls
                              id={"duration"}
                              value={reportState["duration"]}
                              onInput={onFormInput("duration")}
                            />
                            <div className="p-l-5">сек</div>
                          </div>
                        </WrapperInput>
                      </div>
                      <BsCheckBox
                        id="groupEvents"
                        label="Группировать события"
                        value={groupEvents}
                        onInput={setGroupEvents}
                        className="m-b-15 p-t-15 p-b-15 separator-bot-greyLight"
                      />
                    </div>
                  )}
                  {activeOption === "Опции охвата" && (
                    <>
                      <WrapperInput className="display-flex a-i-center separator-bot-greyLight p-b-15">
                        <div className="p-r-15">NBD коррекция:</div>
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
                      <div className=" p-b-15">
                        <div className="p-b-15">
                          Базовый день:
                        </div>
                        <BsCheckBox
                          id="monitoringDates"
                          label="По датам мониторинга компании"
                          value={monitoringDates}
                          onInput={setMonitoringDates}
                          className="m-b-15"
                        />
                        <RadioButton
                          id="baseDayOptions"
                          value={reportState["baseDayOptions"]}
                          onInput={onFormInput("baseDayOptions")}
                          meaning={BaseDayOptions[0]}
                          label="Автоматическое определение"
                          className="m-b-15"
                        />
                        <RadioButton
                          id="baseDayOptions"
                          value={reportState["baseDayOptions"]}
                          onInput={onFormInput("baseDayOptions")}
                          meaning={BaseDayOptions[1]}
                          label="Определение пользователем"
                          className="p-b-15"
                        />
                        <ContainerDatePicker>
                          <DatePicker
                            id="dateRange"
                            formPayload={formPayload}
                            onInput={setValueDate}
                            allWaysOpen
                            value={valueDate}
                            placeholder="Выберите дату"
                          />
                        </ContainerDatePicker>
                      </div>
                      <div className="separator-top-greyLight p-t-15">
                        <WrapperInput className="display-flex a-i-center j-c-space-between">
                          <div className="p-r-15">Qual.Reach viewer:</div>
                          <BsInput
                            styleInputBox={{maxWidth: "200px"}}
                            id="Qual"
                            value={Qual}
                            placeholder="Qual.Reach viewer"
                            onInput={setQual}
                          />
                        </WrapperInput>
                        <WrapperInput className="display-flex a-i-center j-c-space-between">
                          <div className="p-r-15">Average Weekly/<br/>Monthly Reach:</div>
                          <BsInput
                            styleInputBox={{maxWidth: "200px"}}
                            id="average"
                            value={aver}
                            placeholder="Средний день"
                            onInput={setAve}
                          />
                        </WrapperInput>
                      </div>
                    </>
                  )}
                  {activeOption === "Доп опции" && (
                    <div className="separator-bot-greyLight m-b-15">
                      <div className="m-b-10">Текущий список предметов рекламы:</div>
                      <Select
                        className="m-b-10"
                        options={CurrentAdsList}
                        id="listAdvertising"
                        value={reportState["listAdvertising"]}
                        onInput={onFormInput("listAdvertising")}
                        valueKey="id"
                        labelKey="label"
                      />
                      <BsCheckBox
                        id="originalOutputs"
                        label="Количество только оригинальных выходов"
                        value={originalOutputs}
                        onInput={setOriginalOutputs}
                        className="m-b-15"
                      />
                    </div>
                  )}
                </div>
                <Tree
                  className="p-b-15 separator-bot-greyLight"
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
                <div className="display-flex p-t-15 separator-bot-greyLight">
                  {bottomTabsState === "Geo" && (
                    <div className="w-100">
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
                    <div className="w-100">
                      <Tree
                        defaultExpandAll
                        options={LocationOptions}
                      />
                    </div>
                  )}
                  <div className="display-flex fd-column ml-auto p-l-10">
                    <FileIcon
                      className="m-b-10"
                      size={22}
                    />
                    <CopyIcon
                      className="m-b-10"
                      size={22}
                    />
                    <BasketIcon
                      className="m-b-10"
                      size={22}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="display-flex flex-column">*/}
            {/*  <h3>*/}
            {/*    Выбранные атрибуты*/}
            {/*  </h3>*/}
            {/*  <Tree*/}
            {/*    showLine*/}
            {/*    defaultExpandAll*/}
            {/*    onExpand={onExpand}*/}
            {/*    defaultSelectedKeys={selectedKey}*/}
            {/*    defaultCheckedKeys={checked}*/}
            {/*    onSelect={onSelect}*/}
            {/*    draggable*/}
            {/*    options={TreeData}*/}
            {/*  />*/}
            {/*</div>*/}
            {/*<div className="separator-left p-l-15 m-b-15">*/}
            {/*  <ButtonsContainer>*/}
            {/*    {attributesButtons.map(({id, label}) => (*/}
            {/*      <Button*/}
            {/*        className={`${label === activeButton ? 'current' : ''}`}*/}
            {/*        onClick={openAttributes}*/}
            {/*        key={id}*/}
            {/*      >*/}
            {/*        {label}*/}
            {/*      </Button>*/}
            {/*    ))}*/}
            {/*  </ButtonsContainer>*/}
            {/*  {activeButton === "Статистика" && (*/}
            {/*    <CheckboxGroup*/}
            {/*      value={freeState}*/}
            {/*      blockTitle="Статистика"*/}
            {/*      labelKey="title"*/}
            {/*      valueKey="key"*/}
            {/*      options={statistics}*/}
            {/*      onInput={setFreeState}*/}
            {/*      returnObjects*/}
            {/*    />*/}
            {/*  )}*/}
            {/*  {activeButton === "Атрибуты" && (*/}
            {/*    <CheckboxGroup*/}
            {/*      value={freeStateTwo}*/}
            {/*      blockTitle="Атрибуты"*/}
            {/*      labelKey="title"*/}
            {/*      valueKey="key"*/}
            {/*      options={attributes}*/}
            {/*      onInput={setFreeStateTwo}*/}
            {/*      returnObjects*/}
            {/*    />*/}
            {/*  )}*/}
            {/*  {activeButton === "Демография" && (*/}
            {/*    <div>*/}
            {/*      <DemographicRow node={{*/}
            {/*        folder: "Папка",*/}
            {/*        type: "Тип",*/}
            {/*        owner:  "Владелец",*/}
            {/*        lastUpdateDate: "Обновленна",*/}
            {/*        lastUpdater: "Изменивший",*/}
            {/*      }}*/}

            {/*        className="separator-bot p-b-5"*/}
            {/*      >*/}
            {/*        <span>Name</span>*/}
            {/*      </DemographicRow>*/}
            {/*      <Tree*/}
            {/*        defaultExpandAll*/}
            {/*        options={demographic}*/}
            {/*        rowComponent={DemographicRow}*/}
            {/*        checkAble*/}
            {/*        onInput={setDemographicState}*/}
            {/*        value={demographicState}*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*  )}*/}
            {/*</div>*/}
          </ReportContainer>
        </div>
      </ScrollBar>
    </DataSetContainer>
  );
};

Reports.propTypes = {

};

export default Reports;
