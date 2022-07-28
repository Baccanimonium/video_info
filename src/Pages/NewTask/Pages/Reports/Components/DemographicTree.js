import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {demographic} from "../constants";
import ListTable from "../../../../../component_ocean/Components/Tables/ListTable";
import {NonParentsSelect} from "../../../../../component_ocean/Components/Tables/Plugins/selectable";
import DemographicActionsAndLabelColumn from "./DemographicActionsAndLabelColumn";
import {demographicChildrenKey} from "./constants";
import Leaf from '@/component_ocean/Components/Tables/Plugins/TreePlugin/Components/Leaf'
import file from '../Icons/FolderIcon'
import folderPlusIcon from '../Icons/FolderPlusIcon'
import folderMinus from '../Icons/FolderMinusIcon'
import Icon from "@/component_ocean/Components/Icon";

const OpenIcon = (props) => (
  <Icon
    {...props}
    icon={folderPlusIcon}
    size={16}
    className="mr-1"
  />
)

const CloseIcon = (props) => (
  <Icon
    {...props}
    icon={folderMinus}
    size={16}
    className="mr-1"
  />
)
const ChildrenLessIcon = () => (
  <Icon
    icon={file}
    size={14}
    className="mr-1"
  />
)

const CustomLeafComponent = (props) => <Leaf
  {...props}
  OpenIcon={OpenIcon}
  CloseIcon={CloseIcon}
  ChildrenLessIcon={ChildrenLessIcon}
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
