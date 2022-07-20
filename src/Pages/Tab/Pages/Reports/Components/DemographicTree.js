import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DemographicRow from "./DemographicRow";
import {demographic} from "../constants";
import Tree from '@/Components/Tree';
import ListTable from "../../../../../component_ocean/Components/Tables/ListTable";
import {NonParentsSelect} from "../../../../../component_ocean/Components/Tables/Plugins/selectable";
import DemographicActionsAndLabelColumn from "./DemographicActionsAndLabelColumn";
import {demographicChildrenKey} from "./constants";


const tableSettings = {
  plugins: {
    treePlugin: { valueKey: "id", nestedDataKey: demographicChildrenKey },
    selectPlugin: { driver: NonParentsSelect, valueKey: "id", returnObjects: true }
  },
  columns: [
    {
      id: "title",
      label: "Название",
      component: DemographicActionsAndLabelColumn,
      sizes: 220,
    },
    {
      id: "type",
      label: "Тип",
    },
    {
      id: "owner",
      label: "Владелец",
    },
    {
      id: "lastUpdateDate",
      label: "Обновленна",
    },
    {
      id: "lastUpdater",
      label: "Изменивший",
    },
  ]
}

const DemographicTree = ({value, onInput}) => {
  const [data, setData] = useState(demographic)
  useEffect(() => {
    if (value && value.length > 0) {
      setData(value)
    }
  }, [value])
  return (
    <ListTable
      selectState={value}
      onSelect={onInput}
      onInput={onInput}
      columns={tableSettings.columns}
      plugins={tableSettings.plugins}
      value={data}
    />
  );
};

DemographicTree.propTypes = {};

export default DemographicTree;
