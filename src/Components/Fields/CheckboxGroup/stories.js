import React from "react"

import CheckboxGroup from "./index"

export default {
  title: "Components/Fields/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    onInput: {
      description: "HTML свойство обработчик события"
    },
    loading: {
      description: "Индикатор загрузки при клик на кнопку"
    },
    disabled: {
      description: "HTML блокировка"
    },
    blockTitle: {
      description: "Название группы чекбоксов"
    },
    labelKey: {
      description: "Ключ значения"
    },
    valueKey: {
      description: "Ключ значения"
    },
    maxHeight: {
      description: "Максимальная высота компонента"
    },
    options: {
      description: "Массив обектов группы чекбокса"
    },
    returnObjects: {
      description: "Возвращать объект"
    },
    reverseMode: {
      description: "По умолчанию чекбоксы активные"
    },
    id: {
      description: "id компонента"
    },
    inputStyles: {
      description: "пропс эквивалентый HTML аттрибуту"
    },
    showToggleIndicator: {
      description: "Показывать индикатор набора данных в поле ввода"
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

const Template = (args) => <CheckboxGroup {...args} />

export const Default = Template.bind({})
Default.args = {
  blockTitle: "Client",
  labelKey: "SYS_NAME",
  valueKey: "ID",
  maxHeight: "100%",
  options: [{ ID: 2274, SYS_NAME: "P&G", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2272, SYS_NAME: "Avon", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2270, SYS_NAME: "Mercedes", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2268, SYS_NAME: "Nestle", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2271, SYS_NAME: "StoLoto1", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2265, SYS_NAME: "Coca Cola", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2269, SYS_NAME: "Bayer", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2275, SYS_NAME: "Яндекс.Деньги", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2267, SYS_NAME: "Heineken", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2421, SYS_NAME: "Electrolux", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2700, SYS_NAME: "GSK", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2266, SYS_NAME: "McDonald's", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }, { ID: 2380, SYS_NAME: "Raiffeisenbank", ID_REF_DATA: 1, ID_TABLE_DATA: 1 }],
  value: [],
  showToggleIndicator: true
}
