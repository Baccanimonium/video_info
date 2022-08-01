import React from 'react';
import {GoldButton, LightGrayButton} from "@/Components/Buttons";

const ButtonsForDelete = ({onClose, title, onSubmit}) => {
  return (
    <div className="flex items-center flex-col p-4">
      <div>{title}</div>
      <div className="flex items-center mt-5 justify-between w-full">
        <GoldButton onClick={onSubmit}>Да</GoldButton>
        <LightGrayButton  onClick={onClose}>Нет</LightGrayButton>
      </div>
    </div>
  );
};

export default ButtonsForDelete;
