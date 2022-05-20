import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  AdvertisersList,
  AdvertisingItemsLevel1,
  AdvertisingItemsLevel2,
  AdvertisingItemsLevel3,
  AdvertisingItemsLevel4,
  GroupDictionary, GroupDictionaryParams,
  marking,
  Models,
  nationalTV,
  SubbrandsList,
  treeData,
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
  const [dictionaryGroup, setDictionaryGroup] = useState("")
  const [checkedObject, setCheckedObject] = useState([])
  const [pageData, setPageData] = useState(treeData)
  const [selectedKey, setSelectedKey] = useState([])
  const [checked, setCheckedKey] = useState("")

  const onSelect = useCallback((name) => {
    let dictionaryGroup
    switch (name) {
      case "Нац.телекомпании":
        setSelectedList(nationalTV);
        dictionaryGroup = GroupDictionary[nationalTV]
        setTitle("Нац.телекомпании");
        break;
      case "Телекомпании":
        setSelectedList(TVcompanies);
        dictionaryGroup = GroupDictionary[TVcompanies]
        setTitle("Телекомпании");
        break;
      case "Тип рекламы":
        setSelectedList(TypeOfAdvertisement);
        dictionaryGroup = GroupDictionary[TypeOfAdvertisement]
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
    // почему то Телекомпании dictionaryGroup ADVERSMENT_GROUP, а не TV_GROUP
    setDictionaryGroup(dictionaryGroup)
    console.log(dictionaryGroup)
    setCheckedObject(pageData[0].children[0].children.get(dictionaryGroup).children)
  }, []);

  useEffect(() => {
    setCheckedObject([])
  }, [selectedList])

  const checkObject = (value) => {
    if (checkedObject.some(a => !value.some(i => i.id === a.id))) {
      setCheckedObject(value)
    } else
      setCheckedObject(Array.from(new Set(checkedObject.concat(value))))
  }

  const setNewTree = useCallback(() => {
    setPageData(([{ children: [{children, ...secondLvlChildrenData}, ...restChildren], ...pageData }]) => {
      const newChildren = new Map(children)
      if (!newChildren.has(dictionaryGroup)) {
        newChildren.set(dictionaryGroup, {
          ...GroupDictionaryParams[dictionaryGroup],
          children: checkedObject
        })
      } else {
        newChildren.set(dictionaryGroup, { ...newChildren.get(dictionaryGroup), children: checkedObject })
      }
      return [{
      ...pageData,
      children: [{...secondLvlChildrenData, children: newChildren }, ...restChildren]
    }]})
  }, [dictionaryGroup, checkedObject, pageData])
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

  const treeUnwrappedData = useMemo(() => {
    return pageData.map(({ children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({ children: secondLvlChildren, ...secondLvlData }) => ({
        ...secondLvlData,
        children: Array.from(secondLvlChildren, (({ 1: v}) => v))
      }))
    }))

  }, [pageData])

  return (
    <>
      <div className="display-flex m-t-10 flex-wrap">
        {listDirectory.map(({id, name, active, nameGroup}) => (
            <CardForDirectory
              key={id}
              active={active}
              onClick={() => onSelect(name, nameGroup)}
            >
              {name}
            </CardForDirectory>
          )
        )}
      </div>
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
      <div className="separator-left p-l-15 m-b-15 overflow-hidden">
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
            options={treeUnwrappedData}
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
