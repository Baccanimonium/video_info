import React from "react"

import FileInput from "./index"

export default {
  title: "Components/Fields/FileInput",
  component: FileInput,
  argTypes: {
    onInput: {
      description: "HTML свойство обработчик события\""
    },
    inputRef: {
      description: "HTML элемент"
    },
    allowedTypes: {
      description: "Массив с указанными форматами файлов"
    },
    disabled: {
      description: "HTML блокировка"
    },
    renderInputZone: {
      description: "Пропадает зона загрузки файлов"
    },
    id: {
      description: "id инпута"
    },
    multiple: {
      description: "Загрузка нескольких файлов"
    },
    folderPath: {
      description: "Часть пути пост запроса на сохранение файла"
    },
    value: {
      description: "Объект с ключом и именем файла",
    },
    style: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    className: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
  }
}

const Template = (args) => <FileInput {...args} />

export const Default = Template.bind({})
Default.args = {
  value: [],
  multiple: true,
  renderInputZone: true,
  inputRef: () => null,
  folderPath: ""
}
