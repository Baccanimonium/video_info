import React from 'react';
import PropTypes from 'prop-types';
import {demographicChildrenKey} from "../constants";
import {basketTrash} from "../../../SelectionCriteria/Icons/basketTrash";
import {editIcon} from "../../../../../../Icons/editIcon";
import {StyleIcon} from "@/Components/styleIcon";
import {BtnPlus} from "@/Pages/Tab/Pages/Reports/Components/styles";
import WithOpenModalWindow from "@/Core/Decorators/WithOpenModalWindow"
import AddData from "@/Pages/Tab/Pages/Reports/Components/ModalWindows/addData";
import { treeData} from "@/Pages/Tab/Pages/Reports/Components/ModalWindows/mok";


const  DemographicActionsAndLabelColumn = ({ value, ParentValue, openModalWindow }) => {
  const editData = () => {
    openModalWindow({
      component: AddData,
      message: "Коррекция аудитории",
      width: "800px",
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
        initPayload: {TREE_DATA: treeData, NAME: "auditorium 2"}
      }
    })
  }
  const addData = () => {
    openModalWindow({
      component: AddData,
      message: "Коррекция аудитории",
      width: "800px",
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
        initPayload: {
          TREE_DATA: [
            {
              id: "fdgdsf0gdfg",
              title: "***",
              type: "head",
              condition: "AND",
              children: []
            }
          ],
          NAME: ""
        }
      }
    })
  }
  return (
    <div className="flex items-center">
      <span className="mr-2">{value}</span>
      {ParentValue[demographicChildrenKey] !== undefined
        ? <div className="flex items-center">
            <BtnPlus className="mr-1" onClick={addData}/>
            <StyleIcon className="mr-1" icon={editIcon} onClick={editData}/>
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
