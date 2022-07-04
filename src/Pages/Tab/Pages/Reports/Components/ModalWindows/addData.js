import React, {useCallback, useMemo, useState} from 'react';
import Form from "@/Components/Forms";
import Tree from '@/Components/Tree';
import PerfectScrollbar from "react-perfect-scrollbar"
import RowComponent from "@/Pages/Tab/Pages/SelectionCriteria/Components/RowComponent";
import {
  treeData, DemographicLabel, WeightVariables, SecondWeightVariables, SecondDemographicLabel, demographic,
  typeOptions, accessOptions, folderOptions
} from "./mok";
import {Button, ButtonsContainer} from "@/Components/ButtonsTabBar/style";
import BsCheckBox from "@/Components/Fields/BsCheckBox";
import Select from "@/Components/Fields/Select";
import {ContainerForForm} from "./styles"

const StyleTree = {width: "600px"}

const attributesButtons = [
  {
    id: 1,
    label: DemographicLabel,

  },
  {
    id: 2,
    label: WeightVariables
  }
]

const secondAttributesButtons = [
  {
    id: 1,
    label: SecondDemographicLabel,

  },
  {
    id: 2,
    label: SecondWeightVariables
  }
]

const DictionaryComponents = {
  [DemographicLabel]: (props) =>
    <Tree
      {...props}
      style={StyleTree}
      showLine
      draggable
      defaultExpandAll
      rowComponent={RowComponent}
    />,
  [WeightVariables]: (props) =>
    <div>Весовые переменные</div>
}

const SecondDictionaryComponents = {
  [SecondDemographicLabel]: (props) =>
    <Tree
      {...props}
      returnObjects
      labelKey="title"
      valueKey="id"
      options={demographic}
      checkAble
    />,
  [SecondWeightVariables]: (props) =>
    <div>Весовые переменные</div>
}

const AddData = (props) => {
  const [pageData, setPageData] = useState(treeData)
  const [selectedKey, setSelectedKey] = useState([])
  const [checked, setCheckedKey] = useState("")
  const [activeButton, setActiveButton] = useState(DemographicLabel)
  const [secondActiveButton, setSecondActiveButton] = useState(SecondDemographicLabel)
  const [viewingBased, setViewingBased] = useState(false)
  const [sql, setSql] = useState(false)

  const [reportState, setReportsState] = useState({
    precision: 4,
    time: " ",
    duration: " ",
  })

  const onFormInput = useCallback((id) => (value) => {
    setReportsState((prevState) => ({...prevState, [id]: value}))
  }, [])

  const openAttributes = useCallback((label) => () => setActiveButton(label), [setActiveButton])
  const openSecondAttributes = useCallback((label) => () => setSecondActiveButton(label), [setSecondActiveButton])

  const DictionaryComponent = DictionaryComponents[activeButton]
  const SecondDictionaryComponent = SecondDictionaryComponents[secondActiveButton]

  // удаление данных из дерева
  const onUpdateOptions = useCallback((nextOptions) => {
    setPageData(nextOptions)
  }, [])

  const onDragStart = (info) => {
    console.log("onDragStart", info)
  }
  const onDragEnter = (arg) => {
    console.log("onDragEnter", arg)
  }
  const onDrop = (info) => {
    console.log("onDrop", info)
  }
  const setRowCondition = () => {
    console.log("setRowCondition")
  }
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);
  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);
  // срабатывает при клике на группу
  const onSelect = useCallback((value) => {
    console.log(value)
  }, [pageData])



  const selectRule = ({type}) => type === "condition"
  return (
    <PerfectScrollbar className="p-r-15">
      <h3>Коррекция аудитории</h3>
      <ContainerForForm>
        <Form
          className="m-t-10"
          {...props}
        />
        <div>
          <div className="flex">
            <div className="m-r-10">
              <div className="p-b-5">
                Тип:
              </div>
              <Select
                labelKey="label"
                valueKey="id"
                id="type"
                label="Тип"
                placeholder="Тип"
                value={reportState["type"]}
                options={typeOptions}
                onInput={onFormInput("type")}
              />
            </div>
            <div className="m-r-10">
              <div className="p-b-5">
                Доступ:
              </div>
              <Select
                labelKey="label"
                valueKey="id"
                id="access"
                label="Доступ"
                placeholder="Доступ"
                value={reportState["access"]}
                options={accessOptions}
                onInput={onFormInput("access")}
              />
            </div>
            <div>
              <div className="p-b-5">
                Папка:
              </div>
              <Select
                labelKey="label"
                valueKey="id"
                id="folder"
                label="Папка"
                placeholder="Папка"
                value={reportState["folder"]}
                options={folderOptions}
                onInput={onFormInput("folder")}
              />
            </div>
          </div>
          <div className="flex">
            <BsCheckBox
              id="viewingBased"
              label="Viewing based"
              value={viewingBased}
              onInput={setViewingBased}
              className="m-b-15"
            />
            <BsCheckBox
              id="sql"
              label="SQL-определение пользователя"
              value={sql}
              onInput={setSql}
              className="m-b-15"
            />
          </div>
        </div>

      </ContainerForForm>

      <ButtonsContainer className="m-t-10">
        {attributesButtons.map(({id, label}) => (
          <Button
            className={`${label === activeButton ? 'current' : ''}`}
            onClick={openAttributes(label)}
            key={id}
          >
            {label}
          </Button>
        ))}
      </ButtonsContainer>
      {<DictionaryComponent
        onDragStart={onDragStart}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        setRowCondition={setRowCondition}
        onExpand={onExpand}
        defaultSelectedKeys={selectedKey}
        defaultCheckedKeys={checked}
        onSelect={onSelect}
        onCheck={onCheck}
        options={pageData}
        selectRule={selectRule}
        onUpdateOptions={onUpdateOptions}
      />}

      <ButtonsContainer className="m-t-10">
        {secondAttributesButtons.map(({id, label}) => (
          <Button
            className={`${label === secondActiveButton ? 'current' : ''}`}
            onClick={openSecondAttributes(label)}
            key={id}
          >
            {label}
          </Button>
        ))}
      </ButtonsContainer>
      {<SecondDictionaryComponent
        value={reportState[secondActiveButton]}
        onInput={onFormInput(secondActiveButton)}
      />}
    </PerfectScrollbar>
  );
};

export default AddData;
