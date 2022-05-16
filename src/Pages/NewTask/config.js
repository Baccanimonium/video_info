import DatePicker from "../../Components/Fields/DatePicker";
import WithSubmitButtonHOC from "@/Core/Decorators/WithSubmitButtonHOC"
import DefaultPreview from "@/Components/Fields/InputContstuctor/PreviewFields/DefaultPreview"

export const listDirectory = [
  {
    id: 1,
    name: "Нац.телекомпании",
    active: true,
    sequence: [0, 0, 0]
  },
  {
    id: 2,
    name: "Телекомпании",
    active: true,
    sequence: [0, 0, 0]
  },
  {
    id: 3,
    name: "Тип рекламы",
    active: true,
    sequence: [0, 0, 1]
  },
  {
    id: 4,
    name: "Рекламодатели"
  },
  {
    id: 5,
    name: "Марки"
  },
  {
    id: 6,
    name: "Суббренды"
  },
  {
    id: 7,
    name: "Модели"
  },
  {
    id: 8,
    name: "Предметы рекламы"
  },
  {
    id: 9,
    name: "TV-списки ID, ListID"
  },
  {
    id: 10,
    name: "Р/блоки"
  },
  {
    id: 11,
    name: "Программы"
  },
  {
    id: 12,
    name: "Ролики"
  },
  {
    id: 13,
    name: "Признак рекл. кампании"
  },
  {
    id: 14,
    name: "TV-Виртуальный события"
  },
  {
    id: 15,
    name: "Дни недели, типы дней"
  },
  {
    id: 16,
    name: "Статус события"
  },
]

export const configForBtnCalendar = [
  {
    id: "ContinuousDateRange",
    label: "Выбор даты или периода",
  },
  {
    id: "IntervalRange",
    label: "Выбор интервального диапазона",
  },
  {
    id: "ContinuousDateRange",
    label: "Выбор временных интервалов",
  }
]

export const editConfig = {
  component: WithSubmitButtonHOC(DatePicker),
  label: "Выбор даты или периода",
  placeholder: "Выбор даты или периода",
  allWaysOpen: true,
  preview: DefaultPreview.constructor,
  range: true
}

export const editConfigIntervalRange = {
  component: WithSubmitButtonHOC(DatePicker),
  label: "Выбор интервального диапазона",
  placeholder: "Выбор интервального диапазона",
  allWaysOpen: true,
  preview: DefaultPreview.constructor,
  range: true
}

export const editConfigTimeRange = {
  component: WithSubmitButtonHOC(DatePicker),
  label: "Выбор временных интервалов",
  placeholder: "Выбор временных интервалов",
  allWaysOpen: true,
  preview: DefaultPreview.constructor,
  range: true
}
