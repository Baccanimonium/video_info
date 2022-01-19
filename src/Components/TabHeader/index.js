import React, {useState} from 'react';
import {HeaderContainer, ContainerDatePicker} from "./style"
import DatePicker from "../Fields/DatePicker";
import {Route, Routes, Redirect, NavLink} from "react-router-dom";
import history from "@/history"
import {FooterTabs} from "../../Pages/Tab/constants"

const TabHeader = () => {
  const [valueDate, setValueDate] = useState([])
  const formPayload = { dateRange: [] }
  const editDate = (value) => {
    setValueDate(value)
  }
  return (
    <HeaderContainer
      className="p-l-15 p-r-15 p-b-10 p-t-10 display-flex j-c-space-between bg-color-greyLight-4 a-i-center"
    >
      <ContainerDatePicker>
        <div className="p-b-10">
          Выберите диапазон дат
        </div>
        <DatePicker
          id="dateRange"
          formPayload={formPayload}
          onInput={editDate}
          range
          placeholder="Непрерывный диапазон дат"
          value={valueDate}
        />
      </ContainerDatePicker>
      <div>
       <NavLink
         to="/tab/selection_criteria"
       >
         Далее
       </NavLink>
      </div>
    </HeaderContainer>
  );
};

export default TabHeader;
