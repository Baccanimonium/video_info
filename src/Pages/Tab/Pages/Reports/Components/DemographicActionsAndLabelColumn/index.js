import React from 'react';
import PropTypes from 'prop-types';
import {demographicChildrenKey} from "../constants";
import {basketTrash} from "../../../SelectionCriteria/Icons/basketTrash";
import {editIcon} from "../../../../../../Icons/editIcon";
import {StyleIcon} from "@/Components/styleIcon";
import {BtnPlus} from "@/Pages/Tab/Pages/Reports/Components/styles";
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import BsInput from "@/Components/Fields/BsInput"
import AddData from "@/Pages/Tab/Pages/Reports/Components/ModalWindows/addData";

const  DemographicActionsAndLabelColumn = ({ value, ParentValue, openModalWindow }) => {
  const editData = () => {
    openModalWindow({
      component: AddData,
      message: "Коррекция аудитории",
      width: "1000px",
      dialogueParams: {
        cancelLabel: "Отмена",
        submitLabel: "Сохранить",
      },
      onCancel: () => {
        console.log("cancel")
      },
      onSubmit: () => {
        console.log("submit")
      },
      componentProps: {
        fields: [
          {
            id: "NAME",
            label: "Наименование аудитории",
            component: BsInput
          },
        ]
      }
    })
  }
  return (
    <div className="flex items-center">
      <span className="mr-2">{value}</span>
      {ParentValue[demographicChildrenKey] !== undefined
        ? <div className="flex items-center">
            <BtnPlus className="mr-1" onClick={editData}/>
            <StyleIcon className="mr-1" icon={editIcon}/>
            <StyleIcon icon={basketTrash}/>
          </div>
        : <div className="flex items-center">
            <StyleIcon className="mr-1" icon={editIcon}/>
            <StyleIcon icon={basketTrash}/>
        </div>
      }
    </div>
  );
};

DemographicActionsAndLabelColumn.propTypes = {

};

export default WithOpenModalWindow(DemographicActionsAndLabelColumn);
