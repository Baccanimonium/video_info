
export const DemographicLabel = "Демография"
export const WeightVariables = "Весовые переменные"

export const SecondDemographicLabel = "Демография"
export const SecondWeightVariables = "Весовые переменные"

export const treeData = [
  {
    id: "fdgdsf0gdfg",
    title: "***",
    type: "head",
    condition: "AND",
    children: [
      {
        id: 1,
        title: "Количество работающих телевизоров",
        condition: "AND",
      },
      {
        id: 2,
        title: "Пол Женский",
        condition: "AND",
      },
      {
        id: 3,
        title: "Возраст between 25 and 35",
        condition: "AND",
      },
      {
        id: 4,
        title: "Образование высшее",
        condition: "AND",
      },
      {
        id: 5,
        title: "Занятость Работает",
        condition: "AND",
      },
      {
        id: 6,
        title: "Количество членов семьи 3",
        condition: "AND",
      },
      {
        id: 7,
        title: "Доход between 0 and 0",
        condition: "AND",
      },
      {
        id: 8,
        title: "Затраты на питание Меньше четверти, От четверти до половины," +
          " От половины до трех четвертей, Более трех четвертей",
        condition: "AND",
      },
    ]
  }
  ]

export const demographic = [
  {
    id: "1",
    title: "Пол",
    children: [
      {
        id: "11-1",
        title: "Женский"
      },
      {
        id: "11-2",
        title: "Мужской"
      }
    ]
  },
  {
    id: "2",
    title: "Возраст",
    children: [
      {
        id: "22-1",
        title: "1"
      },
      {
        id: "22-2",
        title: "2"
      },
      {
        id: "22-3",
        title: "3+"
      }
    ]
  },
  {
    id: "3",
    title: "Образование",
    children: [
      {
        id: "33-1",
        title: "1"
      },
      {
        id: "33-2",
        title: "2"
      },
      {
        id: "33-3",
        title: "3+"
      }
    ]
  },
  {
    id: "4",
    title: "Занятость",
    children: [
      {
        id: "44-1",
        title: "1"
      },
      {
        id: "44-2",
        title: "2"
      },
      {
        id: "44-3",
        title: "3+"
      }
    ]
  },
  {
    id: "5",
    title: "Количество работающих телевизоров",
    children: [
      {
        id: "55-1",
        title: "1"
      },
      {
        id: "55-2",
        title: "2"
      },
      {
        id: "55-3",
        title: "3+"
      }
    ]
  },
  {
    id: "6",
    title: "Количество членов семьи",
    children: [
      {
        id: "66-1",
        title: "1"
      },
      {
        id: "66-2",
        title: "2"
      },
      {
        id: "66-3",
        title: "3+"
      }
    ]
  },
  {
    id: "7",
    title: "Затраты на питание",
    children: [
      {
        id: "77-1",
        title: "1"
      },
      {
        id: "77-2",
        title: "2"
      },
      {
        id: "77-3",
        title: "3+"
      }
    ]
  }
]


export const typeOptions = [
  {
    id: 1,
    label: 'Normal'
  },
]

export const accessOptions = [
  {
    id: 1,
    label: 'Public'
  },
]

export const folderOptions = [
  {
    id: 1,
    label: 'Folder'
  },
]
