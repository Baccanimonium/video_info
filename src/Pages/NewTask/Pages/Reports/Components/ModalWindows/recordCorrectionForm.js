import React, {useCallback, useState} from 'react';
import BsInput from "@/Components/Fields/BsInput";
import Select from "@/Components/Fields/Select";
import {typeRecord} from "@/Pages/NewTask/Pages/Reports/Components/ModalWindows/mok";
import BsCheckBox from "@/Components/Fields/BsCheckBox";

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
      <h3 className="ta-center">Коррекция записи</h3>
      <div className="p-b-10">
        Наименование папки аудитории:
      </div>
      <BsInput
        id="title"
        placeholder="Наименование папки аудитории"
        label="Наименование папки аудитории"
        value={value.title}
        onInput={handleInput}
      />
      <div className="m-t-10">
        <div className="p-b-10">
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
      <div className="flex m-t-10">
        <div className="m-r-10">
          <div className="p-b-10">
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
          className="p-t-10"
          // value={replaceAll}
          // onInput={setReplaceAll}
        />
      </div>
    </div>
  );
};

export default RecordCorrectionForm;
