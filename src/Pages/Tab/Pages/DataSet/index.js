import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Tree, { TreeNode } from 'rc-tree';
import { DataSetContainer, DataListContainer, SelectTools } from "@/Pages/Tab/Pages/DataSet/styles";
import BsButton from "@/Components/BsButton";
import { treeData, channelsList, citiesList } from "./mok";
import CheckboxGroup from "../../../../Components/Fields/CheckboxGroup";
import PureDeleteItems from "../../../../Utils/Arrays/PureDeleteItems";


const DataSet = props => {
  const [selectedKey, setSelectedKey] = useState("")
  const [checked, setCheckedKey] = useState("")
  const [selectedList, setSelectedList] = useState([])
  const [checkedObject, setCheckedObject] = useState([])
  const [pageData, setPageData] = useState(treeData)
  const onSelect =  useCallback((selectedKeys, info) => {
      setSelectedKey(info)
    const { node: { title } } = info
        switch (title) {
            case "ТВ + Интернет (Ноль плюс) с 1-авг-2019":
                setSelectedList(channelsList);
                break;
                case "Города":
                setSelectedList(citiesList);
                break;

            default: setSelectedList([])
    }
    setCheckedObject([])
    // setSelectedList(node)
    this.selKey = info.node.props.eventKey;
  }, []);
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);

  const checkObject = (value) => {
      if (checkedObject.some(a => a === value[0])){
          const newData = PureDeleteItems(checkedObject, checkedObject.indexOf(value[0]), 1)
          setCheckedObject(newData)
      } else
      setCheckedObject(Array.from(new Set(checkedObject.concat(value))))
      console.log()
  }

  const setNewTree = () => {
      const { node, node: { key } } = selectedKey
      const newChildren = pageData[key].children.concat(checkedObject)
      const newTreeData = { ...pageData[key], children: { ...pageData[key].children, checkedObject }}
      console.log(newTreeData, newChildren, node)
  }

  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden j-c-space-between">
        <div className="display-flex h-100">
            <DataListContainer
                className="display-flex j-c-center"
            >
                <div
                    className="w-100"
                >
                    <SelectTools>
                        <BsButton
                            type="button"
                            className="golden btn width-midi color-greyDarken"
                            onClick={() => setNewTree()}
                        >
                            +ADD
                        </BsButton>
                    </SelectTools>
                    <div
                        className="p-10"
                    >
                        <CheckboxGroup
                            options={selectedList}
                            valueKey="id"
                            labelKey="title"
                            // value={checkedObject}
                            returnObjects
                            onInput={(value) => checkObject(value)}
                        />
                    </div>
                </div>
            </DataListContainer>
            <div className="flex-container l-p-layout r-p-layout">
              <h2 className=" min-width-100">
                Дата сет от 27.11.2021
              </h2>
              <Tree
                showLine
                // selectable={false}
                draggable
                defaultExpandAll
                onExpand={onExpand}
                defaultSelectedKeys={selectedKey}
                defaultCheckedKeys={checked}
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={pageData}
              />
            </div>
        </div>
        <div className="display-flex jc-fe l-p-layout r-p-layout p-t-5 p-b-5 separator-top h-40">
          <BsButton
            type="button"
            className="golden btn width-max color-greyDarken"
          >
            Далее
          </BsButton>
        </div>
    </DataSetContainer>
  );
};

DataSet.propTypes = {

};

export default DataSet;