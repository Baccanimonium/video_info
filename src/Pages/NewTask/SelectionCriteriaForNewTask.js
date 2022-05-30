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
  TypeOfAdvertisement, dictionary
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

/// чтобы айди в чекбоксах не совпадали нужно добавлять в айди название справочника
// id: "nationalTV/1"

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
        setSelectedList(dictionary[nationalTV]);
        dictionaryGroup = GroupDictionary[nationalTV]
        setTitle("Нац.телекомпании");
        break;
      case "Телекомпании":
        setSelectedList(dictionary[TVcompanies]);
        dictionaryGroup = GroupDictionary[TVcompanies]
        setTitle("Телекомпании");
        break;
      case "Тип рекламы":
        setSelectedList(dictionary[TypeOfAdvertisement]);
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
    setDictionaryGroup(dictionaryGroup)
    setCheckedObject(pageData[0].children[0].children.get(dictionaryGroup)?.children || [])
  }, [pageData]);

  // когда изменяется treeUnwrappedData, то и checkedObject должен измениться
  // чтобы были не активны удаленные критерии в чекбоксгрупп

  const setNewTree = useCallback(() => {
    setPageData(([{ children: [{children, ...secondLvlChildrenData}, ...restChildren], ...pageData }]) => {
      // создаем нового ребенка
      const newChildren = new Map(children)
      console.log(newChildren)
      // если в данных в группе нет
      if (!newChildren.has(dictionaryGroup)) {
        // то добавляем данные
        newChildren.set(dictionaryGroup, {
          ...GroupDictionaryParams[dictionaryGroup],
          children: checkedObject
        })
        // если данные в группе есть
      } else {
        // массив старых данных
        // children.get(dictionaryGroup).children - [{}]
        // checkedObject - [{}]
        // то кладем старые данные и новые
        newChildren.set(dictionaryGroup, {
          ...newChildren.get(dictionaryGroup),
          // тут перезаписывается критерий, если выбран критерий одной и той же группы
          children: checkedObject
        })
      }
      // secondLvlChildrenData данные второго уровня
      // restChildren остальные дети?
      return [{
        // записываем старые данные,
      ...pageData,
        // в children первого уровня записываем данные второго уровня и его children с данными группы
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

  const onUpdateOptions = useCallback((nextOptions) => {
    // почему здесь не видно dictionaryGroup
    // console.log(dictionaryGroup)
    nextOptions.map(({ children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({ children: secondLvlChildren, ...secondLvlData }) => {
        // secondLvlChildren.map((v, item) => console.log(item, v))
        // console.log(new Map(secondLvlChildren.map((v, i) => [i, v])))
      })
    }))
    // console.log(nextOptions.map(({ children, ...firstLvlData}) => ({
    //   ...firstLvlData,
    //   children: children.map(({ children: secondLvlChildren, ...secondLvlData }) => ({
    //     ...secondLvlData,
    //     children: new Map(secondLvlChildren.map((v, i) => [i, v]))
    //   }))
    // })))
    setPageData(nextOptions.map(({ children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({ children: secondLvlChildren, ...secondLvlData }) => ({
        ...secondLvlData,
        // тут должно передаваться dictionaryGroup вместо i
        children: new Map(secondLvlChildren.map((v, i) => [i, v]))
      }))
    })))
  }, [dictionaryGroup])
  const selectRule = ({type}) => type === "condition"

  // переписываем данные дерева с критериями-массивами, а не мапами
  const treeUnwrappedData = useMemo(() => {
    return pageData.map(({ children, ...firstLvlData}) => ({
      ...firstLvlData,
      children: children.map(({ children: secondLvlChildren, ...secondLvlData }) => ({
        ...secondLvlData,
        children: Array.isArray(secondLvlChildren) ? secondLvlChildren :  Array.from(secondLvlChildren, (({ 1: v}) => v))
      }))
    }))
  }, [pageData])

  // добавление к критерию название справочника
  const checkObject = (value) => {
    const newVal = value.reduce((acc, item) => {
      if (checkedObject.findIndex((i) => i.id === item.id) !== 0) {
        acc.push({...item, title: `${item.title} [${title}]`})
      } else {
        acc.push({...item})
      }
      return acc
    }, [])
    setCheckedObject(newVal)
  }

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
            onInput={setCheckedObject}
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
