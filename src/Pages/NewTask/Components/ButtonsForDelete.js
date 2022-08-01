import React from 'react';
import {LightGrayButton, GoldButton} from "@/Components/Buttons"

const ButtonsForDelete = ({onClose, title, onSubmit}) => {
  return (
    <div className="flex items-center flex-column p-15">
      <div>{title}</div>
      <div className="flex items-center m-t-20 j-c-space-between w-100">
        <LightGrayButton onClick={onSubmit}>Да</LightGrayButton>
        <GoldButton onClick={onClose}>Нет</GoldButton>
      </div>
    </div>
  );
};

export default ButtonsForDelete;
