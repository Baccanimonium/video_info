import React from 'react';
import {LightGrayButton, GoldButton} from "@/Components/Buttons";

const ButtonsForDelete = ({onClose, title, onSubmit}) => {
  return (
    <div className="flex items-center flex-col py-2">
      <div>{title}</div>
      <div className="flex items-center mt-5 justify-between w-full">
        <LightGrayButton className="w-24" onClick={onSubmit}>Да</LightGrayButton>
        <GoldButton className="w-24" onClick={onClose}>Нет</GoldButton>
      </div>
    </div>
  );
};

export default ButtonsForDelete;