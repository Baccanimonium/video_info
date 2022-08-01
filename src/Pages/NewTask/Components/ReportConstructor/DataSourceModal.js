import React, {useCallback, useMemo, useState} from 'react';
import Tree from '@/component_ocean/Components/Tree';
import ScrollBar from "react-perfect-scrollbar";
import {treeData} from "./mok";

const DataSourceModal = ({setSelectedSource, selectSource}) => {
  const selectRule = ({type}) => type !== "head"

  const onSelect = useCallback(({node}) => {
    setSelectedSource(node)
  }, [setSelectedSource]);


  const replaceTreeData = useMemo(() => treeData.map((item) => ({
    ...item,
    children: item.children.map(i => ({...i, title: i.title[0].toUpperCase() + i.title.slice(1).toLowerCase()}))
  })), []);

  return (
    <div
      className="relative overflow-hidden h-300"
      onDoubleClick={selectSource}
    >
      <ScrollBar>
        <Tree
          selectable={false}
          onSelect={onSelect}
          options={replaceTreeData}
          selectRule={selectRule}
        />
      </ScrollBar>
    </div>
  );
};

DataSourceModal.propTypes = {};

export default DataSourceModal;
