import React, {useCallback, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import Tree from '@/component_ocean/Components/Tree';
import {demographic, StatisticLabel, AttributeLabel, DemographicLabel} from "../constants"
import SelectedParamsRow from "./SelectedParamsRow";
import ScrollBar from "react-perfect-scrollbar";

const SelectedParams = ({reportState, setReportsState}) => {

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
    setReportsState({
      ...reportState,
      [StatisticLabel]: statisticState,
      [AttributeLabel]: attributeState,
      [DemographicLabel]: demographicState,
    })
  }, [reportState, setReportsState])

  return (
    <div className="flex flex-col overflow-hidden relative">
      <ScrollBar>
        <h3>
          Выбранные параметры отчета
        </h3>
        <Tree
          defaultExpandAll
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
