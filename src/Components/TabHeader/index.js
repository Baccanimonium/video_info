import React, {useState} from 'react';
import {HeaderContainer, ContainerDatePicker} from "./style"
import DatePicker from "../Fields/DatePicker";
import {NavLink} from "react-router-dom";

const TabHeader = ({path}) => {
  const [valueDate, setValueDate] = useState([])
  const formPayload = { dateRange: [] }

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
          onInput={setValueDate}
          range
          placeholder="Непрерывный диапазон дат"
          value={valueDate}
        />
      </ContainerDatePicker>
      <NavLink
        name="NavLink"
        to={path}
        className="btn golden width-max"
      >
        Далее
      </NavLink>
    </HeaderContainer>
  );
};

export default TabHeader;
