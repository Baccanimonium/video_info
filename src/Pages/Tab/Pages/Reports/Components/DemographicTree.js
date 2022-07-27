import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DemographicRow from "./DemographicRow";
import {demographic} from "../constants";
import Tree from '@/Components/Tree';
import ListTable from "../../../../../component_ocean/Components/Tables/ListTable";
import {NonParentsSelect} from "../../../../../component_ocean/Components/Tables/Plugins/selectable";
import DemographicActionsAndLabelColumn from "./DemographicActionsAndLabelColumn";
import {demographicChildrenKey} from "./constants";
import Leaf from '@/component_ocean/Components/Tables/Plugins/TreePlugin/Components/Leaf'
import {file} from 'react-icons-kit/feather/file'
import {folderPlus} from 'react-icons-kit/feather/folderPlus'
import {folderMinus} from 'react-icons-kit/feather/folderMinus'
import { checkMarkIcon } from "../../../../../component_ocean/Icons/checkMarkIcon"

const CustomLeafComponent = (props) => <Leaf
  {...props}
  // OpenIcon={checkMarkIcon}
/>

const tableSettings = {
  plugins: {
    treePlugin: { valueKey: "id", nestedDataKey: demographicChildrenKey, component: CustomLeafComponent },
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

  return (
    <ListTable
      selectState={value}
      onSelect={onInput}
      onInput={setData}
      columns={tableSettings.columns}
      plugins={tableSettings.plugins}
      value={data}
    />
  );
};

DemographicTree.propTypes = {};

export default DemographicTree;
