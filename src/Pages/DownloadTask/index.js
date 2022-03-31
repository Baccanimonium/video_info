import React from 'react';
import BsButton from "../../Components/BsButton";
import {IconClose} from "./style"
import PracticesBar from "../../Components/PracticesBar";

const DownloadTask = () => {
  const download = () => {

  }
  return (
    <div className="flex-container pos-relative overflow-hidden">
      <div className="l-p-layout r-p-layout">
        <BsButton
          type="button"
          className="border-gold btn width-medium color-greyDarken w-18 m-t-20"
          onClick={download}
        >
          Загрузить задачу
        </BsButton>
      </div>

        <div className="flex-container pos-relative">
          <div className="display-flex l-p-layout r-p-layout j-c-space-between p-t-10 p-b-10 a-i-center">
            <div>
              <span className="color-grey">Источник данных: </span>
              <span className="fw700">Россия Ноль +</span>
            </div>
            <div>
              <span className="color-grey">Непрерывный диапазон дат: </span>
              31.03.2022
            </div>
            <BsButton
              type="button"
              className="border-black btn width-max color-greyDarken w-18"
              onClick={download}
            >
              Интервальный диапазон дат
            </BsButton>
            <BsButton
              type="button"
              className="border-black btn width-midi color-greyDarken w-18"
              onClick={download}
            >
              Временные интервалы
            </BsButton>
            {/*<IconClose>*/}
            {/*  х*/}
            {/*</IconClose>*/}
          </div>

          <PracticesBar/>

          <div className="flex-container l-p-layout r-p-layout">
            <div className="flex-container">
              content
            </div>
            <div className="display-flex j-c-flex-end m-b-20">
              <BsButton
                type="button"
                className="border-gold btn width-medium color-greyDarken w-18 m-r-10"
                onClick={download}
              >
                Сохранить
              </BsButton>
              <BsButton
                type="button"
                className="border-gold btn width-medium color-greyDarken w-18"
                onClick={download}
              >
                Продолжить
              </BsButton>
            </div>
          </div>
        </div>
    </div>
  );
};

export default DownloadTask;
