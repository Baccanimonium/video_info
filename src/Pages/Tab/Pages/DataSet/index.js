import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Tree, { TreeNode } from 'rc-tree';
import {DataSetContainer} from "@/Pages/Tab/Pages/DataSet/styles";
import BsButton from "@/Components/BsButton";

const treeData = [
  {
    key: '0-0',
    title: 'ТВ + Интернет (Ноль плюс) с 1-авг-2019',
    children: [
      {
        key: '0-0-0',
        title: 'Национальное ТВ + Интернет (Ноль Плюс)',
      },
      {
        key: '0-0-1',
        title: 'Национальное ТВ + Неэфирное ТВ + Интернет (Ноль Плюс)',
      },
      {
        key: '0-0-2',
        title: 'Национальное ТВ + BigTVRating + Интернет (Ноль Плюс)',
      },
    ],
  },
  {
    key: '0-1',
    title: 'Города',
    children: [
      {
        key: '0-1-0',
        title: 'Города 2015',
      },
      {
        key: '0-1-1',
        title: 'Города 2016',
      },
      {
        key: '0-1-2',
        title: 'Города 2017',
      },
      {
        key: '0-1-3',
        title: 'Города 2018',
      },
    ],
  },
];

const DataSet = props => {
  const [selectedKey, setSelectedKey] = useState("")
  const [checked, setCheckedKey] = useState("")
  const onSelect =  useCallback((selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.selKey = info.node.props.eventKey;
  }, []);
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);

  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden">
      <div className="flex-container l-p-layout r-p-layout">
        <h2 className=" min-width-100">
          Дата сет от 27.11.2021
        </h2>
        <Tree
          showLine
          selectable={false}
          defaultExpandAll
          onExpand={onExpand}
          defaultSelectedKeys={selectedKey}
          defaultCheckedKeys={checked}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
        />
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
