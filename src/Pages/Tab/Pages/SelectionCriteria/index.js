import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Tree from '@/Components/Tree';
import {CheckboxGroupContainer, GridContainer} from "./styles"
import BsButton from "@/Components/BsButton";
import {
  treeData,
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
  const [selectedList, setSelectedList] = useState([])
  const [checkedObject, setCheckedObject] = useState([])
  const [newParentName, setNewParentName] = useState("")
  const [pageData, setPageData] = useState(treeData)
  const [title, setTitle] = useState("")

  // создать useState чтобы при onSelect складывать туда title
  const onSelect = useCallback(({node: {title, children}, sequence}) => {
    switch (title) {
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
    <GridContainer className="pos-relative overflow-hidden h-100">
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
    </GridContainer>
  );
};

DataSet.propTypes = {};

export default DataSet;
