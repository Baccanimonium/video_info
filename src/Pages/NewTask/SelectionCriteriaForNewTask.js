import React, {useCallback, useEffect, useState} from 'react';
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
import Tree from '@/Components/Tree';
import {listDirectory} from "./config"

const StyleTree = {width: "600px"}

const SelectionCriteriaForNewTask = () => {
  const [selectedList, setSelectedList] = useState([])
  const [title, setTitle] = useState("")
  const [checkedObject, setCheckedObject] = useState([])
  const [pageData, setPageData] = useState(treeData)
  const [selectedKey, setSelectedKey] = useState([])
  const [checked, setCheckedKey] = useState("")

  useEffect(() => {
    setCheckedObject([])
  }, [selectedList])

  const onSelect = useCallback((name, sequence) => {
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
    setSelectedKey(sequence)
  }, []);

  const checkObject = (value) => {
    if (checkedObject.some(a => !value.some(i => i.id === a.id))) {
      setCheckedObject(value)
    } else
      setCheckedObject(Array.from(new Set(checkedObject.concat(value))))
  }

  const setNewTree = () => {
    let tv =  {
      id: '15251',
      title: 'Нац.телекомпании и Телекомпании',
      type: "condition",
      condition: "AND",
      children: []
    }
    let advertising = {
      id: '666',
      title: 'Тип рекламы',
      condition: "AND",
      type: "condition",
      children: []
    }
    setPageData((pageData) => {
      // получаем координаты
      const sequence = [...selectedKey]
      // получаем номер группы
      const lastIndex = sequence.splice(sequence.length - 1, 1)
      let nextVal = [...pageData]
      let workVal = nextVal
      // sequence.forEach((i) => {
      //   // const {[i]: updatedVal} = workVal
      //   // workVal[i] = {...updatedVal, children: [...updatedVal.children]}
      //   workVal = workVal[i]
      // })
      const child = lastIndex[0] === 1
        ? advertising.children = checkedObject
        : tv.children = checkedObject
      // if (lastIndex[0] === 1) {
      //   advertising.children = checkedObject
      // } else {
      //   tv.children = checkedObject
      // }
      console.log(checkedObject)
      workVal[0].children[0].children = [
        ...workVal[0].children[0].children,
        lastIndex[0] === 1
          ? {
            id: '15251',
            title: 'Нац.телекомпании и Телекомпании',
            type: "condition",
            condition: "AND",
            children: checkedObject
          }
          :
          {
            id: '666',
            title: 'Тип рекламы',
            condition: "AND",
            type: "condition",
            children: checkedObject
          }
      ]
      // workVal[lastIndex].children = checkedObject
      return nextVal
    })
  }
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
  const onUpdateOptions = (nextOptions) => {
    setPageData(nextOptions)
  }
  const selectRule = ({type}) => type === "condition"
  return (
    <>
      <div className="display-flex m-t-10 flex-wrap">
        {listDirectory.map(({id, name, active, sequence}) => (
            <CardForDirectory
              key={id}
              active={active}
              onClick={() => onSelect(name, sequence)}
            >
              {name}
            </CardForDirectory>
          )
        )}
      </div>
      {/*<DataSet></DataSet>*/}
      <GridContainer className="pos-relative overflow-hidden h-100">
        <CheckboxGroupContainer>
          <CheckboxGroup
            options={selectedList}
            valueKey="id"
            blockTitle={title}
            labelKey="title"
            value={checkedObject}
            returnObjects
            onInput={checkObject}
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
      <div className="separator-left p-l-15 m-b-15">
        <ScrollBar>
          <Tree
            style={StyleTree}
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            showLine
            // selectable={false}
            setRowCondition={setRowCondition}
            draggable
            defaultExpandAll
            onExpand={onExpand}
            defaultSelectedKeys={selectedKey}
            defaultCheckedKeys={checked}
            onSelect={onSelect}
            onCheck={onCheck}
            options={pageData}
            selectRule={selectRule}
            onUpdateOptions={onUpdateOptions}
            rowComponent={RowComponent}
          />
        </ScrollBar>
      </div>
      </GridContainer>
    </>
  );
};

export default SelectionCriteriaForNewTask;
