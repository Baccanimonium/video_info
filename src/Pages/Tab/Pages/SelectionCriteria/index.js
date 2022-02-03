import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Tree from '@/Components/Tree';
import {GridContainer} from "./styles"
import BsButton from "@/Components/BsButton";
import {
  treeData,
  channelsList,
  citiesList,
  nationalTV,
  TVcompanies,
  TypeOfAdvertisement,
  AdvertisersList,
  marking,
  SubbrandsList,
  Models,
  AdvertisingItemsLevel1,
  AdvertisingItemsLevel2,
  AdvertisingItemsLevel3,
  AdvertisingItemsLevel4
} from "./mok";
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";
import RowComponent from "./Components/RowComponent";
import ScrollBar from "react-perfect-scrollbar";

const StyleTree = {width: "600px"}
const DataSet = props => {
  const [selectedKey, setSelectedKey] = useState([])
  const [checked, setCheckedKey] = useState("")
  const [selectedList, setSelectedList] = useState(citiesList)
  const [checkedObject, setCheckedObject] = useState([])
  const [newParentName, setNewParentName] = useState("")
  const [pageData, setPageData] = useState(treeData)
  const onSelect = useCallback(({node: {title, children}, sequence}) => {
    switch (title) {
      case "ТВ + Интернет (Ноль плюс) с 1-авг-2019":
        setSelectedList(channelsList);
        break;
      case "Нац.телекомпании":
        setSelectedList(nationalTV);
        break;
      case "Города":
        setSelectedList(citiesList);
        break;
      case "Телекомпании":
        setSelectedList(TVcompanies);
        break;
      case "Тип рекламы":
        setSelectedList(TypeOfAdvertisement);
        break;
      case "Рекламодатели":
        setSelectedList(AdvertisersList);
        break;
      case "Марки":
        setSelectedList(marking);
        break;
      case "Суббренды":
        setSelectedList(SubbrandsList);
        break;
      case "Модели":
        setSelectedList(Models);
        break;
      case "Предметы рекламы уровень 1":
        setSelectedList(AdvertisingItemsLevel1);
        break;
      case "Предметы рекламы уровень 2":
        setSelectedList(AdvertisingItemsLevel2);
        break;
      case "Предметы рекламы уровень 3":
        setSelectedList(AdvertisingItemsLevel3);
        break;
      case "Предметы рекламы уровень 4":
        setSelectedList(AdvertisingItemsLevel4);
        break;
      default:
        setSelectedList(citiesList)
        break
    }
    setSelectedKey(sequence)
    setCheckedObject(children)
  }, []);
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
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

  const onUpdateOptions = (nextOptions) => {
    setPageData(nextOptions)
  }
  const selectRule = ({type}) => type === "condition"

  return (
    <GridContainer className="p-r-15 p-l-15 pos-relative overflow-hidden h-100">
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
      <div className="scrollbar-container ps separator-left p-l-15 m-b-15">
        <CheckboxGroup
          options={selectedList}
          valueKey="id"
          labelKey="title"
          value={checkedObject}
          returnObjects
          onInput={(value) => checkObject(value)}
        />
        {selectedList.length > 0 &&
          <BsButton
            type="button"
            className="golden btn width-midi color-greyDarken w-18"
            onClick={setNewTree}
          >
            применить
          </BsButton>
        }

      </div>
    </GridContainer>
  );
};

DataSet.propTypes = {};

export default DataSet;
