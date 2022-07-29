import React, {useCallback, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import Tree from '@/component_ocean/Components/Tree';
import {demographic, StatisticLabel, AttributeLabel, DemographicLabel} from "../constants"
import SelectedParamsRow from "./SelectedParamsRow";
import ScrollBar from "react-perfect-scrollbar";

const SelectedParams = ({reportState, setReportsState}) => {
  const onExpand = useCallback(expandedKeys => {
    console.log('onExpand', expandedKeys);
  }, []);

  const onSelect = useCallback((selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }, []);

  const TreeData = useMemo(() => {
    const {
      [StatisticLabel]: statisticState = [],
      [AttributeLabel]: attributeState = [],
      [DemographicLabel]: demographicState = []
    } = reportState
    return [
      {
        id: '0',
        title: StatisticLabel,
        root: true,
        children: statisticState,
      },
      {
        id: '1',
        title: AttributeLabel,
        root: true,
        children: attributeState.map(v => ({...v, type: AttributeLabel})),
      },
      {
        id: '2',
        title: DemographicLabel,
        root: true,
        children: demographicState,
      },

    ]
  }, [reportState])

  const onTreeDataUpdate = useCallback(([
      {children: statisticState},
      {children: attributeState},
      {children: demographicState},
    ]) => {

    setReportsState(prevReportState => ({
      ...prevReportState,
      [StatisticLabel]: statisticState,
      [AttributeLabel]: attributeState,
      [DemographicLabel]: demographicState,
    }))
  }, [setReportsState])

  return (
    <div className="display-flex flex-column overflow-hidden pos-relative">
      <ScrollBar>
        <h3>
          Выбранные параметры отчета
        </h3>
        <Tree
          showLine
          defaultExpandAll
          onExpand={onExpand}
          onSelect={onSelect}
          draggable
          options={TreeData}
          rowComponent={SelectedParamsRow}
          onUpdateOptions={onTreeDataUpdate}
        />
      </ScrollBar>
    </div>
  );
};

SelectedParams.propTypes = {};

export default SelectedParams;
