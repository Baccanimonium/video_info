import React from 'react';
import {LightGrayButton, GoldButton} from "@/Components/Buttons";

const ButtonsForDelete = ({onClose, title, onSubmit}) => {
  return (
    <div className="flex items-center flex-col p-4">
      <div>{title}</div>
      <div className="flex items-center mt-5 justify-between w-full">
        <LightGrayButton onClick={onSubmit}>Да</LightGrayButton>
        <GoldButton  onClick={onClose}>Нет</GoldButton>
      </div>
    </div>
  );
};

export default ButtonsForDelete;
