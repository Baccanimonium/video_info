import React, {useCallback, useState} from 'react';
import Tree from '@/Components/Tree';
import ScrollBar from "react-perfect-scrollbar";
import PropTypes from 'prop-types';
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import {treeData} from "./mok";

const DataSourceModal = ({setSelectedSource, selectSource}) => {
    const selectRule = ({type}) => type !== "head"
    const onSelect = ({node}) => setSelectedSource(node)
    const replaceTreeData = treeData.map((item) => ({...item, children: item.children.map(i => ({...i, title: i.title[0].toUpperCase() + i.title.slice(1).toLowerCase()}))}))
    return (
        <div
            className="p-r-15 p-l-15 pos-relative overflow-hidden h-100"
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

DataSourceModal.propTypes = {
    
};

export default DataSourceModal;