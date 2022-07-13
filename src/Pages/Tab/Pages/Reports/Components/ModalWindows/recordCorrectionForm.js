import React, {useCallback, useState} from 'react';
import BsInput from "@/Components/Fields/BsInput";
import Select from "@/Components/Fields/Select";
import {typeRecord} from "@/Pages/Tab/Pages/Reports/Components/ModalWindows/mok";
import BsCheckBox from "@/Components/Fields/BsCheckBox";

const RecordCorrectionForm = (props) => {
  const [nameAudience, setNameAudience] = useState("")

  const [reportState, setReportsState] = useState({
    precision: 4,
    time: " ",
    duration: " ",
  })

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
        id="NAME"
        placeholder="Наименование папки аудитории"
        label="Наименование папки аудитории"
        value={nameAudience}
        onInput={setNameAudience}
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
            valueKey="id"
            id="type"
            label="Тип"
            placeholder="Тип"
            value={reportState["type"]}
            options={typeRecord}
            onInput={onFormInput("type")}
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
