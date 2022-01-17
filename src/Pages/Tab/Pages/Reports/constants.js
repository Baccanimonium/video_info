import CheckboxGroup from "@/Components/Fields/CheckboxGroup";
import NumericInput from "@/Components/Fields/NumericInput";
import Select from "@/Components/Fields/Select";
import BsCheckBox from "@/Components/Fields/BsCheckBox";
import DatePicker from "@/Components/Fields/DatePicker"
import {PRESENT_DATE_FORMAT} from "@/constants";

export const reportsFields = [
  {
    label: "Доступные отчеты",
    id: "available_reports",
    component: CheckboxGroup,
    valueKey: "label",
    labelKey: "label",
    blockTitle: "Доступные отчеты",
    filterable: false,
    options: [
      { label: "Отчет “Протокол роликов”"},
      { label: "Отчет “Протокол блоков”"},
      { label: "Отчет “Протокол программ”"},
      { label: "Отчет “Time Band”"},
    ]
  },
  {
    label: "Подведение итога",
    id: "summation",
    component: CheckboxGroup,
    filterable: false,
    valueKey: "label",
    labelKey: "label",
    blockTitle: "Итоги",
    options: [
      { label: "Итоговая строка"},
      { label: "Промежуточный итог"},
      { label: "Нарастающий итог"},
    ]
  },
  {
    label: "Точность",
    id: "precision",
    component: NumericInput,
    placeholder: "1",
    className: "flex-min-with",
    maxlength: 1,
  },
  {
    label: "Первый день недели",
    id: "weekDay",
    component: Select,
    valueKey: "label",
    labelKey: "label",
    options: [
      { label: "Пн" },
      { label: "Вт" },
      { label: "Ср"},
      { label: "Чт" },
      { label: "Пт"},
      { label: "Сб" },
      { label: "Вс" }
    ],
    placeholder: "Пн",
    className: "flex-min-with",
  },
  {
    label: "Время выхода событий",
    id: "output_event_time",
    component: NumericInput,
    placeholder: "0 мин",
    className: "flex-min-with",
    maxlength: 2,
  },
  {
    label: "Базовая длительность",
    id: "last",
    component: NumericInput,
    placeholder: "20 сек",
    className: "flex-min-with",
    maxlength: 2
  },
  {
    label: "Группировать события",
    id: "is_events_grouped",
    component: BsCheckBox,
  },
  {
    label: "NBD коррекция",
    id: "NBD_correction",
    component: Select,
    valueKey: "label",
    labelKey: "label",
    options: [
      { label: "Standart" },
    ],
    placeholder: "Standart",
    className: "flex-min-with",
  },
  {
    label: "Базовый день",
    id: "base_day",
    component: DatePicker,
    placeholder: "08-авг-2020",
    dateFormat: PRESENT_DATE_FORMAT,
    styleWrapperCalendar: "flex: 0 0 auto;"
  },
  {
    label: "Average Weekly/Monthly Reach",
    id: "avg_reach",
    component: Select,
    valueKey: "label",
    labelKey: "label",
    options: [
      { label: "Серединный день" },
    ],
    placeholder: "Серединный день",
  },
  {
    label: "Список предметов рекламы",
    id: "language",
    component: Select,
    valueKey: "label",
    labelKey: "label",
    options: [
      { label: "Russian" },
    ],
    placeholder: "Russian",
  },
]

export const attribsFields = [
  {
    label: "Атрибуты",
    id: "attributes",
    component: Select,
    multiple: true,
    valueKey: "label",
    labelKey: "label",
    options: [
      { label: "Month" },
      { label: "Year" },
      { label: "TvCompany" },
      { label: "TvNet" },
    ],
    placeholder: "Month, TvCompany",
  },
  {
    label: "Аудиторные",
    id: "classroom",
    component: Select,
    multiple: true,
    valueKey: "label",
    labelKey: "label",
    options: [
      { label: "GRP" },
      { label: "WRP" },
      { label: "Audience" },
      { label: "Share" },
    ],
    placeholder: "Share, Audience",
  },
]

export const mainFields = [
  {
    label: "Непрерывный диапазон дат",
    id: "selection_range",
    component: DatePicker,
    range: true,
    placeholder: "08-авг-2020 - 08-авг-2021",
    dateFormat: PRESENT_DATE_FORMAT,
    styleWrapperCalendar: "flex: 0 0 auto;"
  },
]
