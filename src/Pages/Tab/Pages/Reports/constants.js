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

export const demographic = [
  {
    id: "66-1",
    title: "test_deep_children",
    type: "Public",
    owner:  "Taschfd",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Ycvb",
    children: [
      {
        id: "66-2",
        title: "deep children level 2-1",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "66-3",
            title: "deep children level 3-1",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "66-4",
            title: "deep children level 3-2",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
      {
        id: "66-5",
        title: "deep children level 2-2",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "66-6",
            title: "deep children level 3-3",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "66-7",
            title: "deep children level 3-4",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
    ]
  },
  {
    id: "65-1",
    title: "test_deep_children",
    type: "Public",
    owner:  "Taschfd",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Ycvb",
    children: [
      {
        id: "65-2",
        title: "deep children level 2-1",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "65-3",
            title: "deep children level 3-1",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "65-4",
            title: "deep children level 3-2",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
      {
        id: "65-5",
        title: "deep children level 2-2",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "65-6",
            title: "deep children level 3-3",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "65-7",
            title: "deep children level 3-4",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
    ]
  },
  {
    id: "64-1",
    title: "test_deep_children",
    type: "Public",
    owner:  "Taschfd",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Ycvb",
    children: [
      {
        id: "64-2",
        title: "deep children level 2-1",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "64-3",
            title: "deep children level 3-1",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "64-4",
            title: "deep children level 3-2",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
      {
        id: "64-5",
        title: "deep children level 2-2",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "64-6",
            title: "deep children level 3-3",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "64-7",
            title: "deep children level 3-4",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
    ]
  },
  {
    id: "63-1",
    title: "test_deep_children",
    type: "Public",
    owner:  "Taschfd",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Ycvb",
    children: [
      {
        id: "63-2",
        title: "deep children level 2-1",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "63-3",
            title: "deep children level 3-1",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "63-4",
            title: "deep children level 3-2",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
      {
        id: "63-5",
        title: "deep children level 2-2",
        type: "Public",
        owner:  "Taschfd",
        lastUpdateDate: "02.12.2018",
        lastUpdater: "Ycvb",
        children: [
          {
            id: "63-6",
            title: "deep children level 3-3",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
          {
            id: "63-7",
            title: "deep children level 3-4",
            type: "Public",
            owner:  "Taschfd",
            lastUpdateDate: "02.12.2018",
            lastUpdater: "Ycvb",
          },
        ]
      },
    ]
  },
  {
    id: "fdgdsf0gdfg",
    title: "11-34",
    folder: "",
    type: "Public",
    owner:  "Taschfd",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Ycvb",
    children: [
      {
        id: "fdgdsf0gdfg1",
        title: "11-34",
      },
      {
        id: "fdgdsf0gdfg2",
        title: "11-33",
      },
      {
        id: "fdgdsf0gdfg3",
        title: "11-32",
      },
      {
        id: "fdgdsf0gdfg4",
        title: "11-31",
      },
      {
        id: "fdgdsf0gdfg5",
        title: "11-30",
      },
    ]
  },
  {
    id: "fdgdsf0gdfg1",
    title: "15-20",
    folder: "",
    type: "Public",
    owner:  "Oklfd",
    lastUpdateDate: "17.12.2018",
    lastUpdater: "Krocv",
    children: [
      {
        id: "fdgdsf0gdfg01",
        title: "11-34",
      },
      {
        id: "fdgdsf0gdfg02",
        title: "11-33",
      },
      {
        id: "fdgdsf0gdfg03",
        title: "11-32",
      },
      {
        id: "fdgdsf0gdfg04",
        title: "11-31",
      },
      {
        id: "fdgdsf0gdfg05",
        title: "11-30",
      },
    ]
  },
  {
    id: "fdgdsf0gdfg2",
    title: "15-24",
    folder: "",
    type: "Private",
    owner:  "Tmndfui",
    lastUpdateDate: "02.12.2018",
    lastUpdater: "Lkjdfh",
    children: [
      {
        id: "fdgdsf0gdfg012",
        title: "11-34",
      },
      {
        id: "fdgdsf0gdfg022",
        title: "11-33",
      },
      {
        id: "fdgdsf0gdfg032",
        title: "11-32",
      },
      {
        id: "fdgdsf0gdfg042",
        title: "11-31",
      },
      {
        id: "fdgdsf0gdfg052",
        title: "11-30",
      },
    ]
  },
]

export const StatisticLabel = "Статистика"
export const AttributeLabel = "Атрибуты"
export const DemographicLabel = "Демография"

export const statistics = [
  {
    id: "Неаудиторные",
    title: "Неаудиторные",
    children: [
      {
        id: "Quantity",
        title: "Quantity",
      },
      {
        id: "Dur",
        title: "Dur",
      },
      {
        id: "StDur",
        title: "StDur",
      },
      {
        id: "Cost",
        title: "Cost",
      },
      // {
      //   id: "GrpCost",
      //   title: "GrpCost",
      // },
      // {
      //   id: "CndCost",
      //   title: "CndCost",
      // },
      // {
      //   id: "CostRub",
      //   title: "CostRub",
      // },
      // {
      //   id: "GrpCostRub",
      //   title: "GrpCostRub",
      // },
      // {
      //   id: "CndCostRub",
      //   title: "CndCostRub",
      // },
    ]
  },
  {
    id: "RealBudget",
    title: "RealBudget",
    children: []
  },
  {
    id: "Аудиторные",
    title: "Аудиторные",
    children: [
      {
        id: "GRP",
        title: "GRP",
      },
      {
        id: "WRP",
        title: "WRP",
      },
      {
        id: "Audience",
        title: "Audience",
      },
      {
        id: "Affinity",
        title: "Affinity",
      },
      {
        id: "Reach%",
        title: "Reach%",
      },
      {
        id: "Reach",
        title: "Reach",
      },
      {
        id: "Sample",
        title: "Sample",
      },
      {
        id: "wSample",
        title: "wSample",
      },
      {
        id: "UniverseSize",
        title: "UniverseSize",
      },
      {
        id: "Universe",
        title: "Universe",
      },
      {
        id: "SumWeight",
        title: "SumWeight",
      },
    ]
  },
  {
    id: "By Breaks, By Programs",
    title: "By Breaks, By Programs",
    children: []
  },
  {
    id: "Tolerance",
    title: "Tolerance",
    children: []
  },
  {
    id: "Co-viewing",
    title: "Co-viewing",
    children: []
  },
]

export const attributes = [
  {
    id: "Date, time, Days",
    title: "Date, time, Days",
    children: []
  },
  {
    id: "User virtual events",
    title: "User virtual events",
    children: [
      {
        id: "Estat",
        title: "Estat",
      },
      {
        id: "TV_arena",
        title: "TV_arena",
      },
      {
        id: "Nat",
        title: "Nat",
      },
      {
        id: "Aired in Moscow",
        title: "Aired in Moscow",
      },
      {
        id: "Sales House",
        title: "Sales House",
      },
      {
        id: "Spot Flight ID",
        title: "Spot Flight ID",
      },
      {
        id: "Break Flight ID",
        title: "Break Flight ID",
      },
    ]
  },
]
