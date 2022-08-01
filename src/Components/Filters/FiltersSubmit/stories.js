import React from "react"

import BsButton from "@/Components/BsButton"
import FiltersSubmit from "./FiltersSubmit"

export default {
  title: "Components/Filters/FiltersSubmit",
  component: FiltersSubmit,
  argTypes: {
    className: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    withouthFilter: {
      description: "Без фильтра"
    },
    filtersCount: {
      description: "Показывает сколько элеменов отсортированно в фильтре"
    },
    dropFilters: {
      description: "HTML свойство обработчик события удаляющее отфильтрованные данные"
    },
    sortDirect: {
      description: "Объект для сортировки"
    },
    handleSortInput: {
      description: "Функция меняющия кнопку сортировки"
    },
    sortQuery: {
      description: "Назвние кнопки сортировки"
    },
    withouthSort: {
      description: "Без кнопки сортировки"
    },
    toggleSideBarFilter: {
      description: "HTML свойство обработчик события открытия фильтра"
    },
    findParam: {
      description: "Ключ в filterQuery"
    },
    filterQuery: {
      description: "Объект с ключем-findParam и значение, которое было выбрано "
    },
    children: {
      description: "React children"
    },
    data: {
      description: "Массив с данными"
    },
    uploadDataOnce: {
      description: "HTML блокировка"
    },
  }
}

const Template = (args) => (
  <div className="flex fd-column j-c-start">
    <div className="p-b-10"> <FiltersSubmit {...args}>По умолчанию</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args} sortQuery="+id">Изменение отображения кнопки сортировки</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args} sortQuery="-id">Изменение отображения кнопки сортировки</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args} filtersCount="4">Показывает сколько элеменов отсортированно в фильтре</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args} uploadDataOnce>HTML блокировка</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args} withouthSort>Без кнопки сортировка</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args} withouthFilter>Без кнопки фильтра</FiltersSubmit></div>
    <div className="p-b-10"> <FiltersSubmit {...args}><BsButton className="golden btn ml-auto width-medium">btn</BsButton></FiltersSubmit></div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  data: [],
  withouthFilter: false,
  filtersCount: "",
  sortDirect: {
    ASC: "+id",
    DESC: "-id"
  },
  sortQuery: "",
  withouthSort: false,
  findParam: "query_params",
  filterQuery: {},
  className: ""
}
