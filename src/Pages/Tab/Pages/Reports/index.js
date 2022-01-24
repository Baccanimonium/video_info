import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {DataSetContainer} from "@/Pages/Tab/Pages/DataSet/styles";
import {LeftContainer, ReportContainer, ReportsGrid, WrapperInput} from "./styles"
import Tree from '@/Components/Tree';
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";
import {ButtonsContainer, Button} from "../../../../Components/ButtonsTabBar/style";
import BsCheckBox from "../../../../Components/Fields/BsCheckBox";
import RadioButton from "../../../../Components/Fields/RadioButton";
import BsInput from "../../../../Components/Fields/BsInput";
import DatePicker from "../../../../Components/Fields/DatePicker";
import {ContainerDatePicker} from "../../../../Components/TabHeader/style";
import ScrollBar from "react-perfect-scrollbar";

import DemographicRow from "./Components/DemographicRow";

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
  const [selectedKey, setSelectedKey] = useState("")
  const [checked, setCheckedKey] = useState("")
  const [freeState, setFreeState] = useState([])
  const [freeStateTwo, setFreeStateTwo] = useState([])
  const [demographicState, setDemographicState] = useState([])

  const [activeButton, setActiveButton] = useState("Статистика")
  const [activeOption, setActiveOption] = useState("Опции расчета")

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


  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden">
      <div className="flex-container p-l-15 p-r-15">
        <ReportContainer className="overflow-hidden h-100">
          <LeftContainer className="overflow-hidden pos-relative flex-container">
            <ScrollBar>
              <h3>
                Доступные отчеты
              </h3>
              <div className="m-b-20">
                <BsCheckBox
                  id="videoProtocol"
                  label='Отчет "Протокол роликов"'
                  value={videoProtocol}
                  onInput={setVideoProtocol}
                  className="m-b-15"
                />
                <BsCheckBox
                  id="blockProtocol"
                  label='Отчет "Протокол блоков"'
                  value={blockProtocol}
                  onInput={setBlockProtocol}
                  className="m-b-15"
                />
                <BsCheckBox
                  id="programProtocol"
                  label='Отчет "Протокол программ"'
                  value={programProtocol}
                  onInput={setProgramProtocol}
                  className="m-b-15"
                />
                <BsCheckBox
                  id="timeBand"
                  label='Отчет "Time Band"'
                  value={timeBand}
                  onInput={setTimeBand}
                  className="m-b-15"
                />
              </div>
              <div className="flex-container p-r-15 overflow-hidden">
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
                <div className="m-t-15 flex-container overflow-hidden">
                    {activeOption === "Опции расчета" && (
                      <div className="flex-container">
                        <div className="display-flex p-b-15 separator-bot-greyLight">
                          <RadioButton
                            id="byAmount"
                            label="по сумме"
                            value={byAmount}
                            onInput={setByAmount}
                            className="m-r-30"
                          />
                          <RadioButton
                            id="average"
                            label="по среднему"
                            value={average}
                            onInput={setAverage}
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
                        </div>
                        <div className="p-t-15 separator-bot-greyLight">
                          <WrapperInput>
                            <div className="p-r-15">Первый день недели:</div>
                            <div>
                              <BsInput
                                id="week"
                                value={week}
                                onInput={setWeek}
                              />
                            </div>
                          </WrapperInput>
                          <WrapperInput>
                            <div className="p-r-15">Время выхода событий:</div>
                            <div className="display-flex a-i-center">
                              <BsInput
                                id="time"
                                value={time}
                                onInput={setTime}
                              />
                              <div className="p-l-5">мин</div>
                            </div>
                          </WrapperInput>
                          <WrapperInput>
                            <div className="p-r-15">Базовая длительность:</div>
                            <div className="display-flex a-i-center">
                              <BsInput
                                id="duration"
                                value={duration}
                                onInput={setDuration}
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
                          className="m-b-15 p-t-15"
                        />
                      </div>
                    )}
                    {activeOption === "Опции охвата" && (
                      <>
                        <WrapperInput className="display-flex a-i-center separator-bot-greyLight p-b-15">
                          <div className="p-r-15">NBD канал:</div>
                          <BsInput
                            id="NBD"
                            value={NBD}
                            placeholder="Впишите NBD канал"
                            onInput={setNBD}
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
                            id="automaticDetection"
                            label="Автоматическое определение"
                            value={automaticDetection}
                            onInput={setAutomaticDetection}
                            className="m-b-15"
                          />
                          <RadioButton
                            id="userDetection"
                            label="Определение пользователем"
                            value={userDetection}
                            onInput={setUserDetection}
                            className="p-b-15"
                          />
                          <ContainerDatePicker className="ml-auto mr-auto">
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
                      <div>
                        <WrapperInput className="display-flex a-i-center">
                          <div className="p-r-15">Текущий список <br/> предметов рекламы:</div>
                          <BsInput
                            id="listAdvertising"
                            value={listAdvertising}
                            onInput={setListAdvertising}
                          />
                        </WrapperInput>
                        <BsCheckBox
                          id="originalOutputs"
                          label="Количество оригинальных выходов"
                          value={originalOutputs}
                          onInput={setOriginalOutputs}
                          className="m-b-15"
                        />
                      </div>
                    )}
                </div>
              </div>
            </ScrollBar>
          </LeftContainer>
          <div className="display-flex flex-column a-i-center">
            <h3>
              Выбранные атрибуты
            </h3>
            <Tree
              showLine
              defaultExpandAll
              onExpand={onExpand}
              defaultSelectedKeys={selectedKey}
              defaultCheckedKeys={checked}
              onSelect={onSelect}
              draggable
              options={TreeData}
            />
          </div>
          <div>
            <ButtonsContainer>
              {attributesButtons.map(({id, label}) => (
                <Button
                  className={`${label === activeButton ? 'current' : ''}`}
                  onClick={openAttributes}
                  key={id}
                >
                  {label}
                </Button>
              ))}
            </ButtonsContainer>
            {activeButton === "Статистика" && (
              <CheckboxGroup
                value={freeState}
                blockTitle="Статистика"
                labelKey="title"
                valueKey="key"
                options={statistics}
                onInput={setFreeState}
                returnObjects
              />
            )}
            {activeButton === "Атрибуты" && (
              <CheckboxGroup
                value={freeStateTwo}
                blockTitle="Атрибуты"
                labelKey="title"
                valueKey="key"
                options={attributes}
                onInput={setFreeStateTwo}
                returnObjects
              />
            )}
            {activeButton === "Демография" && (
              <div>
                <DemographicRow node={{
                  folder: "Папка",
                  type: "Тип",
                  owner:  "Владелец",
                  lastUpdateDate: "Обновленна",
                  lastUpdater: "Изменивший",
                }}

                  className="separator-bot p-b-5"
                >
                  <span>Name</span>
                </DemographicRow>
                <Tree
                  defaultExpandAll
                  options={demographic}
                  rowComponent={DemographicRow}
                  checkAble
                  onInput={setDemographicState}
                  value={demographicState}
                />
              </div>
            )}
          </div>
        </ReportContainer>
      </div>
    </DataSetContainer>
  );
};

Reports.propTypes = {

};

export default Reports;
