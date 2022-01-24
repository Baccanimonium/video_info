import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Tree from '@/Components/Tree';
import {DataSetContainer, DataListContainer, SelectTools} from "@/Pages/Tab/Pages/DataSet/styles";
import BsButton from "@/Components/BsButton";
import {treeData, channelsList, citiesList} from "./mok";
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";
import RowComponent from "./Components/RowComponent";
import ScrollBar from "react-perfect-scrollbar";

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
      case "Города":
        setSelectedList(citiesList);
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

  const onUpdateOptions = (nextOptions) => {
    setPageData(nextOptions)
  }
  const selectRule = ({type}) => type === "condition"

  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden j-c-space-between">
      <div className="display-flex h-100">
        <div className="flex-container l-p-layout r-p-layout">
          <h2 className=" min-width-100">
            Дата сет от 27.11.2021
          </h2>
          <ScrollBar>
          <Tree
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            onDrop={onDrop}
            showLine
            // selectable={false}
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
        <DataListContainer
          className="display-flex j-c-center"
        >
          <div
            className="w-100"
          >
            <div
              className="p-10"
            >
              <CheckboxGroup
                options={selectedList}
                valueKey="id"
                labelKey="title"
                // value={checkedObject}
                value={checkedObject}
                returnObjects
                onInput={(value) => checkObject(value)}
              />
              {selectedList.length > 0 && <SelectTools>
                <BsButton
                  type="button"
                  className="golden btn width-midi color-greyDarken w-18"
                  onClick={setNewTree}
                >
                  применить
                </BsButton>
              </SelectTools>}
            </div>
          </div>
        </DataListContainer>
      </div>
    </DataSetContainer>
  );
};

DataSet.propTypes = {};

export default DataSet;
