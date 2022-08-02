import React, {useCallback, useState} from 'react';
import BsInput from "@/component_ocean/Components/Inputs/Input";
import {typeRecord} from "@/Pages/NewTask/Pages/Reports/Components/ModalWindows/mok";
import BsCheckBox from "@/component_ocean/Components/Inputs/CheckBox";
import Select from "@/component_ocean/Components/Inputs/Select";

const RecordCorrectionForm = ({value, onInput}) => {
  const [reportState, setReportsState] = useState({
    precision: 4,
    time: " ",
    duration: " ",
  })
  const handleInput = (val, idVal) => {
    onInput({ ...value, [idVal]: val })
  }

  const onFormInput = useCallback((id) => (value) => {
    setReportsState((prevState) => ({...prevState, [id]: value}))
  }, [])
  return (
    <div>
      <h3 className="text-center">Коррекция записи</h3>
      <div className="pb-2.5">
        Наименование папки аудитории:
      </div>
      <BsInput
        id="title"
        placeholder="Наименование папки аудитории"
        label="Наименование папки аудитории"
        value={value.title}
        onInput={handleInput}
      />
      <div className="mt-2.5">
        <div className="pb-2.5">
          Папка:
        </div>
        <Select
          labelKey="label"
          valueKey="id"
          id="type"
          label="Папка"
          placeholder="Папка"
          disabled
          value={reportState["type"]}
          options={typeRecord}
        />
      </div>
      <div className="flex mt-2.5">
        <div className="mr-2.5">
          <div className="pb-2.5">
            Тип:
          </div>
          <Select
            labelKey="label"
            valueKey="label"
            id="type"
            label="Тип"
            placeholder="Тип"
            value={value.type}
            options={typeRecord}
            onInput={handleInput}
          />
        </div>
        <BsCheckBox
          id="replaceAll"
          label="Replace all child objects property"
          disabled
          className="pt-2.5"
          // value={replaceAll}
          // onInput={setReplaceAll}
        />
      </div>
    </div>
  );
};

export default RecordCorrectionForm;
