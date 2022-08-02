import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from "@/component_ocean/Components/Inputs/RadioButton";
import CheckBox from "@/component_ocean/Components/Inputs/CheckBox";
import {WrapperInput} from "@/Pages/NewTask/Pages/Reports/styles";
import {NumericInputWithControls} from "@/component_ocean/Components/Inputs/NumericInput";
import Select from "@/component_ocean/Components/Inputs/Select";
import {dayOptions, durationOptions, exitTime} from "../constants";
import {CalculationOptions} from "../constants";

const CalculationOptionsComponent = ({ reportState, onFormInput}) => {
  return (
    <div className="flex-container">
      <div className="flex pb-4 separator-bot-greyLight">
        <RadioButton
          id="byAmount"
          label="по сумме"
          value={reportState["calculationOptions"]}
          onInput={onFormInput("calculationOptions")}
          meaning={CalculationOptions[0]}
          className="mr-8"
        />
        <RadioButton
          id="average"
          label="по среднему"
          meaning={CalculationOptions[1]}
          value={reportState["calculationOptions"]}
          onInput={onFormInput("calculationOptions")}
        />
      </div>
      <div className="pt-4 separator-bot-greyLight">
        <CheckBox
          id="totalLine"
          label="Итоговая строка"
          value={reportState["totalLine"]}
          onInput={onFormInput("totalLine")}
          className="mb-4"
        />
        <CheckBox
          id="interval"
          label="Промежуточный итог"
          value={reportState["interval"]}
          onInput={onFormInput("interval")}
          className="mb-4"
        />
        <CheckBox
          id="growing"
          label="Нарастающий итог"
          value={reportState["growing"]}
          onInput={onFormInput("growing")}
          className="mb-4"
        />
        <WrapperInput
          value={reportState["precision"]}
        >
          <div className="pr-4">Точность:</div>
          <div>
            <NumericInputWithControls
              id={"precision"}
              value={reportState["precision"]}
              onInput={onFormInput("precision")}
            />
          </div>
        </WrapperInput>
      </div>
      <div className="pt-4 separator-bot-greyLight">
        <WrapperInput
          value="ПН"
        >
          <div className="pr-4">Первый день недели:</div>
          <div>
            <Select
              valueKey="label"
              labelKey="label"
              options={dayOptions}
              id={"week"}
              value={reportState["week"]}
              onInput={onFormInput("week")}
            />
          </div>
        </WrapperInput>
        <WrapperInput
          value={reportState["time"]}
        >
          <div className="pr-4">Время выхода событий:</div>
          <div className="flex items-center justify-center">
            <Select
              valueKey="label"
              labelKey="label"
              options={exitTime}
              id={"time"}
              value={reportState["time"]}
              onInput={onFormInput("time")}
            />
            <div className="pl-1.5">мин</div>
          </div>
        </WrapperInput>
      </div>
      <div className="pt-4 separator-bot-greyLight">
        <WrapperInput
          value={reportState["duration"]}
        >
          <div className="pr-4">Базовая длительность:</div>
          <div className="flex items-center justify-center">
            <Select
              valueKey="label"
              labelKey="label"
              options={durationOptions}
              id={"duration"}
              value={reportState["duration"]}
              onInput={onFormInput("duration")}
            />
            <div className="pl-1.5">сек</div>
          </div>
        </WrapperInput>
      </div>
      <CheckBox
        id="groupEvents"
        label="Группировать события"
        value={reportState["groupEvents"]}
        onInput={onFormInput("groupEvents")}
        className="mb-4 pt-4 pb-4 separator-bot-greyLight"
      />
    </div>
  );
};

CalculationOptionsComponent.propTypes = {
  reportState: PropTypes.object.isRequired,
  onFormInput: PropTypes.func.isRequired,

};

export default CalculationOptionsComponent;