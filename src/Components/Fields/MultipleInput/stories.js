import React from "react"

import BsInput from "@/Components/Fields/BsInput"
import MultipleInput from "./index"
import Select from "@/Components/Fields/Select"

export default {
  title: "Components/Fields/MultipleInput",
  component: MultipleInput,
  argTypes: {
    value: {
      description: "Масссив с объектами",
    },
    inputStyle: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    InputComponent: {
      description: "Добавить компонен, по умолчанию это BsInput",
    },
    idKey: {
      description: "id ключа",
    },
    maxlength: {
      description: "Максимальное колличество символов в компоненте",
    },
    placeholder: {
      description: "Placeholder",
    },
    addButtonLabel: {
      description: "Текст кнопки",
    },
    onInput: {
      description: "HTML свойство обработчик события"
    },
    id: {
      description: "id компонента",
    },
  }
}

const Template = (args) =>
  <div className="flex fd-column j-c-start">
    <div className="p-b-10"><MultipleInput {...args} /></div>
    <div className="p-b-10"><MultipleInput {...args} InputComponent={Select} addButtonLabel="Добавить еще Select" /></div>
  </div>

export const Default = Template.bind({})
Default.args = {
  maxlength: 500,
  addButtonLabel: "+ Add more",
  InputComponent: BsInput,
  value: []
}
