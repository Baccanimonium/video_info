import React from 'react';
import PropTypes from 'prop-types';
import {demographicChildrenKey} from "../constants";
import {basketTrash} from "../../../SelectionCriteria/Icons/basketTrash";
import {editIcon} from "../../../../../../Icons/editIcon";
import Icon from '../../../../../../component_ocean/Components/Icon'

const DemographicActionsAndLabelColumn = ({ value, ParentValue }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2">{value}</span>
      {ParentValue[demographicChildrenKey] !== undefined
        ? <div className="flex items-center">
            <span className="mr-1">+</span>
            <Icon className="mr-1" icon={editIcon}/>
            <Icon icon={basketTrash}/>
          </div>
        : <div className="flex items-center">
            <Icon className="mr-1" icon={editIcon}/>
            <Icon icon={basketTrash}/>
        </div>
      }
    </div>
  );
};

DemographicActionsAndLabelColumn.propTypes = {

};

export default DemographicActionsAndLabelColumn;