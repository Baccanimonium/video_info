import React, {useCallback, useState} from 'react';
import Tree from '@/Components/Tree';
import ScrollBar from "react-perfect-scrollbar";
import PropTypes from 'prop-types';
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import {treeData} from "./mok";

const DataSourceModal = ({setSelectedSource}) => {
    const selectRule = ({type}) => type !== "head"
    const onSelect = ({node}) => setSelectedSource(node)
    return (
        <div className="p-r-15 p-l-15 pos-relative overflow-hidden h-100">
            <ScrollBar>
                <Tree
                    selectable={false}
                    onSelect={onSelect}
                    options={treeData}
                    selectRule={selectRule}
                />
            </ScrollBar>
        </div>
    );
};

DataSourceModal.propTypes = {
    
};

export default DataSourceModal;