import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import Tree from '@/Components/Tree';
import {DataSetContainer} from "@/Pages/Tab/Pages/DataSet/styles";

const DataSet = props => {
  const [selectedKey, setSelectedKey] = useState("")
  const [treeData, setTreeData] = useState([
    {
      id: '0',
      title: 'ТВ + Интернет (Ноль плюс) с 1-авг-2019',
      children: [
        {
          id: '0-0',
          title: 'Россия (Ноль Плюс)',
        },
        {
          id: '0-1',
          title: 'Россия (Ноль Плюс) + Неэфирное ТВ (Ноль Плюс)',
        },
        {
          id: '0-2',
          title: 'Неэфирное ТВ (Ноль Плюс)',
        },
        {
          id: '0-2',
          title: 'Неэфирное ТВ + BigTVRating (Ноль Плюс)',
        },
        {
          id: '0-2',
          title: 'Национальное ТВ + Неэфирное ТВ + BigTVRating (Ноль плюс)',
        },
      ],
    },
    {
      id: '1',
      title: 'Города',
      children: [
        {
          id: '1-09',
          title: 'Города 2009',
        },
        {
          id: '1-10',
          title: 'Города 2010',
        },
        {
          id: '1-11',
          title: 'Города 2011',
        },
        {
          id: '1-12',
          title: 'Города 2012',
        },
        {
          id: '1-13',
          title: 'Города 2013',
        },
        {
          id: '1-14',
          title: 'Города 2014',
        },
        {
          id: '1-15',
          title: 'Города 2015',
        },
        {
          id: '1-16',
          title: 'Города 2016',
        },
        {
          id: '1-17',
          title: 'Города 2017',
        },
        {
          id: '1-18',
          title: 'Города 2018',
        },
        {
          id: '1-19',
          title: 'Города 2019',
        },
        {
          id: '1-20',
          title: 'Города 2020',
        },
        {
          id: '1-21',
          title: 'Города 2021',
        },
      ],
    },
  ]
)
  const [checked, setCheckedKey] = useState("")

  const [checkedKeys, setCheckedKeys] = useState({})

  const onSelect =  useCallback((selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    // this.selKey = info.node.props.eventKey;
  }, []);
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onCheck = useCallback((checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  }, []);

  const onDragStart = useCallback(info => {
    console.log('start', info);
  }, [])

  const onDragEnter = useCallback((...args) => {
    console.log('enter', args);
  }, []);

  return (
    <DataSetContainer className="flex-container pos-relative overflow-hidden">
      <div className="flex-container l-p-layout r-p-layout">
        <h2 className=" min-width-100">
          Дата сет от 27.11.2021
        </h2>
        <Tree
          checkAble
          defaultExpandAll
          onExpand={onExpand}
          draggable
          onDragStart={onDragStart}
          onDragEnter={onDragEnter}
          defaultSelectedKeys={selectedKey}
          defaultCheckedKeys={checked}
          onSelect={onSelect}
          onCheck={onCheck}
          options={treeData}
          value={checkedKeys}
          onInput={setCheckedKeys}
        />
      </div>
    </DataSetContainer>
  );
};

DataSet.propTypes = {

};

export default DataSet;