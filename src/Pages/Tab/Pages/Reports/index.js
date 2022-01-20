import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {DataSetContainer} from "@/Pages/Tab/Pages/DataSet/styles";
import {ReportContainer, ReportsGrid} from "./styles"
import Tree from "rc-tree";
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";
import {ButtonsContainer, Button} from "../../../../Components/ButtonsTabBar/style";
import BsCheckBox from "../../../../Components/Fields/BsCheckBox";
import RadioButton from "../../../../Components/Fields/RadioButton";

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

const Reports = () => {
  const [selectedKey, setSelectedKey] = useState("")
  const [checked, setCheckedKey] = useState("")
  const [freeState, setFreeState] = useState([])
  const [freeStateTwo, setFreeStateTwo] = useState([])

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

  const TreeData = useMemo(() => [
    {
      key: '0',
      title: 'Статистика',
      children: freeState.map((item, i)=> ({
        ...item, key: `0-${i}`
      }) ),
    },
    {
      key: '1',
      title: 'Атрибуты',
      children: freeStateTwo.map((item, i)=> ({
        ...item, key: `1-${i}`
      }) ),
    },
  ], [freeStateTwo, freeState])

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
      <div className="flex-container p-l-20 p-r-20">
        <ReportContainer>
          <div>
            <h3>
              Доступные отчеты
            </h3>
            <ReportsGrid>
              <div className="m-b-25">
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
              <div>
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
                <div className="m-t-15">
                  {activeOption === "Опции расчета" && (
                    <div>
                      <div className="display-flex p-b-20 j-c-space-around">
                        <RadioButton
                          id="byAmount"
                          label="по сумме"
                          value={byAmount}
                          onInput={setByAmount}
                        />
                        <RadioButton
                          id="average"
                          label="по среднему"
                          value={average}
                          onInput={setAverage}
                          className=""
                        />
                      </div>
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
                  )}
                  {activeOption === "Опции охвата" && (
                    <div>
                      Опции охвата
                    </div>
                  )}
                  {activeOption === "Доп опции" && (
                    <div>
                      Доп опции
                    </div>
                  )}
                </div>
              </div>
            </ReportsGrid>
          </div>
          <div>
            <h3>
              Выбранные атрибуты
            </h3>
            <Tree
              showLine
              selectable={false}
              defaultExpandAll
              onExpand={onExpand}
              defaultSelectedKeys={selectedKey}
              defaultCheckedKeys={checked}
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={TreeData}
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
          </div>
        </ReportContainer>
      </div>
    </DataSetContainer>
  );
};

Reports.propTypes = {

};

export default Reports;
