import React, {useCallback, useState} from 'react';
import {
  AdvertisersList, AdvertisingItemsLevel1, AdvertisingItemsLevel2, AdvertisingItemsLevel3, AdvertisingItemsLevel4,
  marking, Models,
  nationalTV, SubbrandsList, treeData,
  TVcompanies,
  TypeOfAdvertisement
} from "../Tab/Pages/SelectionCriteria/mok";
import {CardForDirectory} from "./styles";
import DataSet from "../Tab/Pages/SelectionCriteria";
import {CheckboxGroupContainer, GridContainer} from "../Tab/Pages/SelectionCriteria/styles";
import CheckboxGroup from "../../Components/Fields/CheckboxGroup";
import BsButton from "@/Components/BsButton";
import RowComponent from "../Tab/Pages/SelectionCriteria/Components/RowComponent";
import ScrollBar from "react-perfect-scrollbar";

const listDirectory = [
  {
    id: 1,
    name: "Нац.телекомпании",
    active: true
  },
  {
    id: 2,
    name: "Телекомпании",
    active: true
  },
  {
    id: 3,
    name: "Тип рекламы",
    active: true
  },
  {
    id: 4,
    name: "Рекламодатели"
  },
  {
    id: 5,
    name: "Марки"
  },
  {
    id: 6,
    name: "Суббренды"
  },
  {
    id: 7,
    name: "Модели"
  },
  {
    id: 8,
    name: "Предметы рекламы"
  },
  {
    id: 9,
    name: "TV-списки ID, ListID"
  },
  {
    id: 10,
    name: "Р/блоки"
  },
  {
    id: 11,
    name: "Программы"
  },
  {
    id: 12,
    name: "Ролики"
  },
  {
    id: 13,
    name: "Признак рекл. кампании"
  },
  {
    id: 14,
    name: "TV-Виртуальный события"
  },
  {
    id: 15,
    name: "Дни недели, типы дней"
  },
  {
    id: 16,
    name: "Статус события"
  },
]

const SelectionCriteriaForNewTask = () => {
  const [selectedList, setSelectedList] = useState([])
  const [title, setTitle] = useState("")
  const [checkedObject, setCheckedObject] = useState([])
  const [pageData, setPageData] = useState(treeData)
  const [selectedKey, setSelectedKey] = useState([])

  const onSelect = useCallback((name) => {
    switch (name) {
      case "Нац.телекомпании":
        setSelectedList(nationalTV);
        setTitle("Нац.телекомпании");
        break;
      case "Телекомпании":
        setSelectedList(TVcompanies);
        setTitle("Телекомпании");
        break;
      case "Тип рекламы":
        setSelectedList(TypeOfAdvertisement);
        setTitle("Тип рекламы");
        break;
      case "Рекламодатели":
        setSelectedList(AdvertisersList);
        setTitle("Рекламодатели");
        break;
      case "Марки":
        setSelectedList(marking);
        setTitle("Марки");
        break;
      case "Суббренды":
        setSelectedList(SubbrandsList);
        setTitle("Суббренды");
        break;
      case "Модели":
        setSelectedList(Models);
        setTitle("Модели");
        break;
      case "Предметы рекламы уровень 1":
        setSelectedList(AdvertisingItemsLevel1);
        setTitle("Предметы рекламы уровень 1");
        break;
      case "Предметы рекламы уровень 2":
        setSelectedList(AdvertisingItemsLevel2);
        setTitle("Предметы рекламы уровень 2");
        break;
      case "Предметы рекламы уровень 3":
        setSelectedList(AdvertisingItemsLevel3);
        setTitle("Предметы рекламы уровень 3");
        break;
      case "Предметы рекламы уровень 4":
        setSelectedList(AdvertisingItemsLevel4);
        setTitle("Предметы рекламы уровень 4");
        break;
      default:
        setSelectedList([])
        break
    }
  }, []);

  const checkObject = (value) => {
    if (checkedObject.some(a => !value.some(i => i.id === a.id))) {
      setCheckedObject(value)
    } else
      setCheckedObject(Array.from(new Set(checkedObject.concat(value))))
  }

  const setNewTree = () => {
    setPageData((pageData) => {
      const sequence = [...selectedKey]
      const lastIndex = sequence.splice(sequence.length - 1, 1)
      let nextVal = [...pageData]
      let workVal = nextVal
      sequence.forEach((i) => {
        const {[i]: updatedVal} = workVal
        workVal[i] = {...updatedVal, children: [...updatedVal.children]}
        workVal = workVal[i].children
      })
      workVal[lastIndex].children = checkedObject
      return nextVal
    })
  }
  return (
    <>
      <div className="display-flex m-t-10 flex-wrap">
        {listDirectory.map(({id, name, active}) => (
            <CardForDirectory
              key={id}
              active={active}
              onClick={() => onSelect(name)}
            >
              {name}
            </CardForDirectory>
          )
        )}
      </div>
      <GridContainer className="pos-relative overflow-hidden h-100">
        <div className="separator-left p-l-15 m-b-15">
          <CheckboxGroupContainer>
            <CheckboxGroup
              options={selectedList}
              valueKey="id"
              blockTitle={title}
              labelKey="title"
              value={checkedObject}
              returnObjects
              onInput={(value) => checkObject(value)}
            />
            {selectedList.length > 0 &&
            <BsButton
              type="button"
              className="golden btn sign-up-btn color-greyDarken w-18"
              onClick={setNewTree}
            >
              применить
            </BsButton>
            }
          </CheckboxGroupContainer>
        </div>
        <ScrollBar>
          {/*<Tree*/}
          {/*  style={StyleTree}*/}
          {/*  onDragStart={onDragStart}*/}
          {/*  onDragEnter={onDragEnter}*/}
          {/*  onDrop={onDrop}*/}
          {/*  showLine*/}
          {/*  // selectable={false}*/}
          {/*  setRowCondition={setRowCondition}*/}
          {/*  draggable*/}
          {/*  defaultExpandAll*/}
          {/*  onExpand={onExpand}*/}
          {/*  defaultSelectedKeys={selectedKey}*/}
          {/*  defaultCheckedKeys={checked}*/}
          {/*  onSelect={onSelect}*/}
          {/*  onCheck={onCheck}*/}
          {/*  options={pageData}*/}
          {/*  selectRule={selectRule}*/}
          {/*  onUpdateOptions={onUpdateOptions}*/}
          {/*  rowComponent={RowComponent}*/}
          {/*/>*/}
        </ScrollBar>

        <DataSet></DataSet>
      </GridContainer>
    </>
  );
};

export default SelectionCriteriaForNewTask;
