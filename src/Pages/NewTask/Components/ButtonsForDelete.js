import React from 'react';
import BsButton from "@/Components/BsButton";

const ButtonsForDelete = ({onClose, title, onSubmit}) => {
  return (
    <div className="display-flex a-i-center flex-column p-15">
      <div>{title}</div>
      <div className="display-flex a-i-center m-t-20 j-c-space-between w-100">
        <BsButton className="btn grey-bg" onClick={onSubmit}>Да</BsButton>
        <BsButton className="btn golden" onClick={onClose}>Нет</BsButton>
      </div>
    </div>
  );
};

export default ButtonsForDelete;
