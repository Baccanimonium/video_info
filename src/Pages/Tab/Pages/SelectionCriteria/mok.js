import style from "./style.less"

const Icon = () => (
    <span
        className="parent-icon"
    />
)

export const treeData = [
    {
        id: "fdgdsf0gdfg",
        title: "MEDIA SCOPE",
        type: "head",
        children: [
            {
                id: "123123",
                title: "",
                condition: "AND",
                type: "block",
                children: [
                    {
                        id: '15251',
                        title: 'ТВ + Интернет (Ноль плюс) с 1-авг-2019',
                        type: "condition",
                        condition: "AND",
                        // icon: Icon,
                        children: [
                            {
                                id: 1,
                                key: '0-0',
                                condition: "OR",
                                title: 'Национальное ТВ + Интернет (Ноль Плюс)',
                            },
                            {
                                id: 2,
                                key: '0-1',
                                condition: "OR",
                                title: 'Национальное ТВ + Неэфирное ТВ + Интернет (Ноль Плюс)',
                            },
                            {
                                id: 3,
                                key: '0-2',
                                condition: "OR",
                                title: 'Национальное ТВ + BigTVRating + Интернет (Ноль Плюс)',
                            },
                        ],
                    },
                    {
                        id: '666',
                        title: 'Города',
                        condition: "AND",
                        type: "condition",
                        children: [
                            {
                                id: 1,
                                key: '1-0',
                                condition: "OR",
                                title: 'Города 2015',
                            },
                            {
                                id: 2,
                                key: '1-1',
                                condition: "OR",
                                title: 'Города 2016',
                            },
                            {
                                id: 3,
                                key: '1-2',
                                condition: "OR",
                                title: 'Города 2017',
                            },
                            {
                                id: 15,
                                key: '1-3',
                                condition: "OR",
                                title: 'Города 2018',
                            },
                        ],
                    },
                ]
            },
            {
                id: "444",
                condition: "AND",
                type: "block",
                children: [
                    {
                        id: '0',
                        title: 'ТВ + Интернет (Ноль плюс) с 1-авг-2019',
                        type: "condition",
                        condition: "AND",
                        // icon: Icon,
                        children: [
                            {
                                id: 1,
                                key: '0-0',
                                condition: "OR",
                                title: 'Национальное ТВ + Интернет (Ноль Плюс)',
                            },
                            {
                                id: 2,
                                key: '0-1',
                                condition: "OR",
                                title: 'Национальное ТВ + Неэфирное ТВ + Интернет (Ноль Плюс)',
                            },
                            {
                                id: 3,
                                key: '0-2',
                                condition: "OR",
                                title: 'Национальное ТВ + BigTVRating + Интернет (Ноль Плюс)',
                            },
                        ],
                    },
                    {
                        id: '1',
                        title: 'Города',
                        condition: "AND",
                        type: "condition",
                        children: [
                            {
                                id: 1,
                                key: '1-0',
                                condition: "OR",
                                title: 'Города 2015',
                            },
                            {
                                id: 2,
                                key: '1-1',
                                condition: "OR",
                                title: 'Города 2016',
                            },
                            {
                                id: 3,
                                key: '1-2',
                                condition: "OR",
                                title: 'Города 2017',
                            },
                            {
                                id: 15,
                                key: '1-3',
                                condition: "OR",
                                title: 'Города 2018',
                            },
                        ],
                    },
                ]
            }
        ]
    }
];

export const channelsList = [
    {
        id: 1,
        title: 'Национальное ТВ + Интернет (Ноль Плюс)',
    },
    {
        id: 2,
        title: 'Национальное ТВ + Неэфирное ТВ + Интернет (Ноль Плюс)',
    },
    {
        id: 3,
        title: 'Национальное ТВ + BigTVRating + Интернет (Ноль Плюс)',
    },
    {
        id: 4,
        title: "2X2"
    },
    {
        id: 5,
        title: "AD CHANNELS"
    },
    {
        id: 6,
        title: "CHE"
    },
    {
        id: 7,
        title: "DISCOVERY CHANNEL"
    },
    {
        id: 8,
        title: "DOM KINO"
    },
    {
        id: 9,
        title: "DOMASHNIY"
    },
    {
        id: 10,
        title: "EURONEWS"
    },
    {
        id: 11,
        title: "EURONOVOSTI"
    },
    {
        id: 12,
        title: "FRIDAY"
    },
    {
        id: 13,
        title: "KANAL DISNEY"
    },
    {
        id: 14,
        title: "KARUSEL"
    }
]

export const citiesList = [
    {
        id: 1,
        key: '1-0',
        title: 'Города 2015',
    },
    {
        id: 2,
        key: '1-1',
        title: 'Города 2016',
    },
    {
        id: 3,
        key: '1-2',
        title: 'Города 2017',
    },
    {
        id: 15,
        key: '1-3',
        title: 'Города 2018',
    },
    {
        id: 4,
        title: "ГОРОД 1"
    },
    {
        id: 5,
        title: "ГОРОД 2"
    },
    {
        id: 6,
        title: "ГОРОД 3"
    },
    {
        id: 7,
        title: "ГОРОД 4"
    },
    {
        id: 8,
        title: "ГОРОД 5"
    },
    {
        id: 9,
        title: "ГОРОД 6"
    },
    {
        id: 10,
        title: "ГОРОД 7"
    },
    {
        id: 11,
        title: "ГОРОД 8"
    },
    {
        id: 12,
        title: "ГОРОД 9"
    },
    {
        id: 13,
        title: "ГОРОД 10"
    },
    {
        id: 14,
        title: "ГОРОД 11"
    },
]