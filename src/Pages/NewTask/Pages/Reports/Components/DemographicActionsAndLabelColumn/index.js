import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {demographicChildrenKey} from "../constants";
import {basketTrash} from "../../../../icons/basketTrash";
import {editIcon} from "@/Icons/editIcon";
import {StyleIcon} from "@/Components/styleIcon";
import {BtnPlus} from "@/Pages/NewTask/Pages/Reports/Components/styles";
import AddData from "@/Pages/NewTask/Pages/Reports/Components/ModalWindows/AddData";
import {treeData} from "@/Pages/NewTask/Pages/Reports/Components/ModalWindows/mok";
import ModalWindow from "@/component_ocean/Components/ModalWindow";
import RecordCorrectionForm from "@/Pages/NewTask/Pages/Reports/Components/ModalWindows/RecordCorrectionForm";

const DemographicActionsAndLabelColumn = ({value, ParentValue, onInput}) => {
  const [addModal, setAddModalState] = useState(false)
  const [editModal, setEditModalState] = useState(false)
  const [deleteModal, setDeleteModalState] = useState(false)

  const toggleAddModal = useCallback(() => setAddModalState(s => !s), [])
  const toggleEditModal = useCallback(() => setEditModalState(s => !s), [])
  const toggleDeleteModal = useCallback(() => setDeleteModalState(s => !s), [])

  return (
    <div className="flex items-center">
      <span className="mr-2">{value}</span>

      <div className="flex items-center">
        {ParentValue[demographicChildrenKey] !== undefined ? <><div>
          <BtnPlus className="mr-1" onClick={toggleAddModal}/>
          <ModalWindow onClose={toggleAddModal} open={addModal}>
            <AddData value={{
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
            }}
          />
          </ModalWindow>
        </div>
        <div>
          <StyleIcon className="mr-1" icon={editIcon} onClick={toggleEditModal}/>
          <ModalWindow onClose={toggleEditModal} open={editModal}>
            <RecordCorrectionForm value={{
              title: value,
              type: ParentValue.type
            }}
            />
          </ModalWindow>
        </div>

        </>
        : <div>
            <StyleIcon className="mr-1" icon={editIcon} onClick={toggleEditModal}/>
            <ModalWindow onClose={toggleEditModal} open={editModal}>
              <AddData value={{TREE_DATA: treeData, NAME: "auditorium 2"}}
              />
            </ModalWindow>
          </div>}
        <StyleIcon icon={basketTrash}/>
      </div>
    </div>
  );
};

DemographicActionsAndLabelColumn.propTypes = {};

export default DemographicActionsAndLabelColumn;
