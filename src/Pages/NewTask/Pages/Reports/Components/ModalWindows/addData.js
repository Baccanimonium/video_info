import React, {useCallback, useMemo, useState} from 'react';
import Tree from '@/component_ocean/Components/Tree';
import PerfectScrollbar from "react-perfect-scrollbar"
import RowComponent from "../../../../Components/RowComponent";
import {
  treeData, DemographicLabel, WeightVariables, SecondWeightVariables, SecondDemographicLabel, demographic,
  typeOptions, accessOptions, folderOptions
} from "./mok";
import {Button, ButtonsContainer} from "@/Components/ButtonsTabBar/style";
import CheckBox from "@/component_ocean/Components/Inputs/CheckBox";
import Select from "@/component_ocean/Components/Inputs/Select";
import {ContainerForForm} from "./styles"
import ScrollBar from "react-perfect-scrollbar";
import BsInput from "@/component_ocean/Components/Inputs/Input";

const StyleTree = {width: "700px", height: "170px"}

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
    <div className="overflow-hidden">
      <ScrollBar>
        <Tree
          {...props}
          style={StyleTree}
          showLine
          draggable
          defaultExpandAll
          rowComponent={RowComponent}
        />
      </ScrollBar>
    </div>,
  [WeightVariables]: (props) =>
    <div>Весовые переменные</div>
}

const SecondDictionaryComponents = {
  [SecondDemographicLabel]: (props) =>
    <div className="overflow-hidden">
      <ScrollBar>
        <Tree
          {...props}
          style={{height: "150px"}}
          returnObjects
          labelKey="title"
          valueKey="id"
          options={demographic}
          checkAble
        />
      </ScrollBar>
    </div>,
  [SecondWeightVariables]: (props) =>
    <div>Весовые переменные</div>
}

const AddData = (props) => {
  const {value: {TREE_DATA, NAME}} = props

  const [pageData, setPageData] = useState(TREE_DATA)
  const [selectedKey, setSelectedKey] = useState([])
  const [checked, setCheckedKey] = useState("")
  const [activeButton, setActiveButton] = useState(DemographicLabel)
  const [secondActiveButton, setSecondActiveButton] = useState(SecondDemographicLabel)
  const [viewingBased, setViewingBased] = useState(false)
  const [sql, setSql] = useState(false)
  const [nameAudience, setNameAudience] = useState(NAME)

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

  const selectRule = ({type}) => type === "condition"
  return (
    <PerfectScrollbar className="p-r-15">
      <h3 className="ta-center">Коррекция аудитории</h3>
      <ContainerForForm >
        <div>
          <div>
            <div className="p-b-10">
              Наименование аудитории:
            </div>
            <BsInput
              id="NAME"
              placeholder="Наименование аудитории"
              label="Наименование аудитории"
              value={nameAudience}
              onInput={setNameAudience}
            />
          </div>
        </div>
        <div className="flex">
            <div className="m-r-10">
              <div className="p-b-10">
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
              <div className="p-b-10">
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
              <div className="p-b-10">
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
      </ContainerForForm>
      <div className="flex m-t-10">
        <CheckBox
          id="viewingBased"
          label="Viewing based"
          value={viewingBased}
          onInput={setViewingBased}
          className="m-r-15"
        />
        <CheckBox
          id="sql"
          label="SQL-определение пользователя"
          value={sql}
          onInput={setSql}
        />
      </div>
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
        defaultSelectedKeys={selectedKey}
        defaultCheckedKeys={checked}
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
