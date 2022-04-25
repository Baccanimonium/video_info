import DatePicker from "../../Components/Fields/DatePicker";
import WithSubmitButtonHOC from "@/Core/Decorators/WithSubmitButtonHOC"
import DefaultPreview from "@/Components/Fields/InputContstuctor/PreviewFields/DefaultPreview"

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
