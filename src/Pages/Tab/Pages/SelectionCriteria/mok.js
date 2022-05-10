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
                        title: 'Нац.телекомпании',
                        type: "condition",
                        condition: "AND",
                        // icon: Icon,
                        children: [
                            {
                                id: 1,
                                condition: "OR",
                                title: 'CHE',
                            },
                            {
                                id: 2,
                                condition: "OR",
                                title: 'DISNEY CHANNEL',
                            },
                            {
                                id: 3,
                                condition: "OR",
                                title: 'DOMASHNIY',
                            },
                        ],
                    },
                    {
                        id: '666',
                        title: 'Тип рекламы',
                        condition: "AND",
                        type: "condition",
                        children: [
                            {
                                id: 4,
                                condition: "OR",
                                title: 'Анонс с датой',
                            },
                            {
                                id: 5,
                                condition: "OR",
                                title: 'Анонс: спонсор',
                            },
                            {
                                id: 8,
                                condition: "OR",
                                title: 'Анонс-промо',
                            },
                            {
                                id: 9,
                                condition: "OR",
                                title: 'Атрибутика спонсора (декорации)',
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
                        title: 'Рекламодатели',
                        type: "condition",
                        condition: "AND",
                        // icon: Icon,
                        children: [
                            {
                                id: 1,
                                condition: "OR",
                                title: 'BAYER AG',
                            },
                            {
                                id: 2,
                                condition: "OR",
                                title: 'BRITISH-AMERICAN TOBACCO',
                            },
                            {
                                id: 3,
                                condition: "OR",
                                title: 'COLGATE-PALMOLIVE',
                            },
                        ],
                    },
                    {
                        id: '1',
                        title: 'Модели',
                        condition: "AND",
                        type: "condition",
                        children: [
                            {
                                id: 1,
                                condition: "OR",
                                title: 'ADIDAS SPORTS FOOTWEAR',
                            },
                            {
                                id: 2,
                                condition: "OR",
                                title: 'ADIDAS SPORTS GOODS',
                            },
                            {
                                id: 3,
                                condition: "OR",
                                title: 'ADIDAS-SALOMON AG MANUAFCTURER OF SPORTSWEAR AND FOOTWEAR',
                            },
                            {
                                id: 4,
                                condition: "OR",
                                title: 'ALFA-BANK BANKING SERVICES',
                            },
                        ],
                    },
                ]
            }
        ]
    }
];

export const nationalTV = [
    {
        id: 1,
        title: "N/A",
        condition: "OR"
    },
    {
        id: 2,
        title: "PERVY KANAL",
        condition: "OR"
    },
    {
        id: 3,
        title: "ROSSIYA 1",
        condition: "OR"
    },
    {
        id: 4,
        title: "NTV",
        condition: "OR"
    },
    {
        id: 5,
        title: "TV-6",
        condition: "OR"
    },
    {
        id: 6,
        title: "MIR",
        condition: "OR"
    },
    {
        id: 7,
        title: "STS",
        condition: "OR"
    },
    {
        id: 8,
        title: "TV TSENTR",
      condition: "OR"
    },
    {
        id: 9,
        title: "ROSSIYA K",
      condition: "OR"
    },
    {
        id: 10,
        title: "STS LOVE",
      condition: "OR"
    },
    {
        id: 11,
        title: "KARUSEL",
      condition: "OR"
    },
    {
        id: 12,
        title: "REN TV",
      condition: "OR"
    },
    {
        id: 14,
        title: "TNT",
      condition: "OR"
    },
    {
        id: 15,
        title: "DISNEY CHANNEL",
      condition: "OR"
    },
    {
        id: 16,
        title: "MUZ TV",
      condition: "OR"
    },
    {
        id: 17,
        title: "FRIDAY",
      condition: "OR"
    },
    {
        id: 18,
        title: "U",
      condition: "OR"
    },
    {
        id: 17,
        title: "TV-3",
      condition: "OR"
    },
    {
        id: 18,
        title: "TV-6: TEMPORARY BROADCASTING",
      condition: "OR"
    },
    {
        id: 19,
        title: "SEMYORKA",
      condition: "OR"
    },
    {
        id: 20,
        title: "TVS",
      condition: "OR"
    },
    {
        id: 21,
        title: "TV TSENTR",
      condition: "OR"
    },
    {
        id: 22,
        title: "EURONEWS",
      condition: "OR"
    },
    {
        id: 23,
        title: "RAMBLER",
      condition: "OR"
    },
    {
        id: 24,
        title: "CHE",
      condition: "OR"
    },
    {
        id: 25,
        title: "ROSSIYA 2",
      condition: "OR"
    },
    {
        id: 26,
        title: "DOMASHNIY",
      condition: "OR"
    },
    {
        id: 27,
        title: "ZVEZDA",
        condition: "OR"
    },
    {
        id: 28,
        title: "PYATY KANAL",
        condition: "OR"
    },
    {
        id: 29,
        title: "ROSSIYA 24",
        condition: "OR"
    },
    {
        id: 30,
        title: "2X2",
        condition: "OR"
    },
    {
        id: 31,
        title: "MEASURED LOCAL TV",
        condition: "OR"
    },
    {
        id: 32,
        title: "VIDEO",
        condition: "OR"
    },
    {
        id: 33,
        title: "MEASURED THEMATIC TV",
        condition: "OR"
    },
    {
        id: 34,
        title: "OTHER",
        condition: "OR"
    },
    {
        id: 35,
        title: "MATCH TV",
        condition: "OR"
    },
    {
        id: 36,
        title: "TNT 4",
        condition: "OR"
    },
    {
        id: 37,
        title: "DISCOVERY CHANNEL (TILL 31/12/2019)",
        condition: "OR"
    },
    {
        id: 38,
        title: "DOM KINO",
        condition: "OR"
    },
    {
        id: 39,
        title: "AD CHANNELS",
        condition: "OR"
    },
    {
        id: 40,
        title: "MULT",
        condition: "OR"
    },
    {
        id: 41,
        title: "SUBBOTA",
        condition: "OR"
    },
    {
        id: 42,
        title: "EVRONOVOSTI",
        condition: "OR"
    },
    {
        id: 43,
        title: "SPAS",
        condition: "OR"
    },
    {
        id: 44,
        title: "OTHER TV SET",
        condition: "OR"
    },
    {
        id: 45,
        title: "OTR (TILL 31/12/2020)",
        condition: "OR"
    },
    {
        id: 46,
        title: "SOLOVIEVLIVE",
        condition: "OR"
    },
]
export const TVcompanies = [
    {
        id: 1,
        title: "CHE / KA (MOSCOW)",
        condition: "OR"
    },
    {
        id: 2,
        title: "DISCOVERY CHANNEL (TILL 31/12/2019) (NETWORK BROADCASTING)",
        condition: "OR"
    },
    {
        id: 3,
        title: "EURONEWS / 33 VIRT. (MOSCOW)",
        condition: "OR",
    },
    {
        id: 4,
        title: "FRIDAY / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 5,
        title: "KULTURA TILL 04.2003 / 33 (MOSCOW)",
        condition: "OR",
    },
    {
        id: 6,
        title: "MUZ TV (MOSCOW)",
        condition: "OR",
    },
    {
        id: 7,
        title: "M1 / 31 (MOSCOW)",
        condition: "OR",
    },
    {
        id: 8,
        title: "MUZ NTV / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 9,
        title: "PERVY KANAL / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 10,
        title: "PERVY KANAL (NETWORK BROADCASTING)",
        condition: "OR",
    },
    {
        id: 11,
        title: "PYATY KANAL / SP (MOSCOW)",
        condition: "OR",
    },
    {
        id: 12,
        title: "REN TV / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 13,
        title: "ROSSIYA 1 / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 14,
        title: "ROSSIYA 1 (NETWORK BROADCASTING)",
        condition: "OR",
    },
    {
        id: 15,
        title: "ROSSIYA 24 / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 16,
        title: "ROSSIYA 24 (NETWORK BROADCASTING)",
        condition: "OR",
    },
    {
        id: 17,
        title: "STS / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 18,
        title: "TELEEXPO / FRIDAY (MOSCOW)",
        condition: "OR",
    },
    {
        id: 17,
        title: "TLC (MOSCOW)",
        condition: "OR",
    },
    {
        id: 18,
        title: "TNT / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 19,
        title: "TV STOLITSA / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 20,
        title: "TV TSENTR (NETWORK BROADCASTING)",
        condition: "OR",
    },
    {
        id: 21,
        title: "TV TSENTR TILL 05.2005 / 03 (MOSCOW)",
        condition: "OR",
    },
    {
        id: 22,
        title: "TVS / 06 (MOSCOW)",
        condition: "OR",
    },
    {
        id: 23,
        title: "TV-3 / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 24,
        title: "TV-6 / 06 (MOSCOW)",
        condition: "OR",
    },
    {
        id: 25,
        title: "U / KA (MOSCOW)",
        condition: "OR",
    },
    {
        id: 26,
        title: "VESTI / SP (MOSCOW)",
        condition: "OR",
    },
    {
        id: 27,
        title: "3 KANAL / 03 VIRT. (MOSCOW)",
        condition: "OR",
    },
]
export const TypeOfAdvertisement = [
    {
        id: 1,
        title: "Анонс без даты",
        condition: "OR",
    },
    {
        id: 2,
        title: "Анонс: заставка блока без даты",
        condition: "OR",
    },
    {
        id: 3,
        title: "Анонс: заставка блока с датой",
        condition: "OR",
    },
    {
        id: 4,
        title: "Анонс с датой",
        condition: "OR",
    },
    {
        id: 5,
        title: "Анонс: спонсор",
        condition: "OR",
    },
    {
        id: 6,
        title: "Анонс: спонсорская заставка",
        condition: "OR",
    },
    {
        id: 7,
        title: "Анонс: упоминание спонсора",
        condition: "OR",
    },
    {
        id: 8,
        title: "Анонс-промо",
        condition: "OR",
    },
    {
        id: 9,
        title: "Атрибутика спонсора (декорации)",
        condition: "OR",
    },
    {
        id: 10,
        title: "Атрибутика спонсора (одежда)",
        condition: "OR",
    },
    {
        id: 11,
        title: "Атрибутика спонсора (продукция)",
        condition: "OR",
    },
    {
        id: 12,
        title: "Аудио/видео наименование юр.лица",
        condition: "OR",
    },
    {
        id: 13,
        title: "Благодарность в титрах",
        condition: "OR",
    },
    {
        id: 14,
        title: "Благодарность с реквизитами в титрах",
        condition: "OR",
    },
    {
        id: 15,
        title: "Вручение подарков",
        condition: "OR",
    },
    {
        id: 16,
        title: "Динамическая заставка",
        condition: "OR",
    },
    {
        id: 17,
        title: "Динамические титры",
        condition: "OR",
    },
    {
        id: 18,
        title: "Динамический логотип",
        condition: "OR",
    },
    {
        id: 17,
        title: "Погода: спонсор",
        condition: "OR",
    },
    {
        id: 18,
        title: "Погода: упоминание спонсора",
        condition: "OR",
    },
    {
        id: 19,
        title: "Ролик",
        condition: "OR",
    },
    {
        id: 20,
        title: "Спонсор",
        condition: "OR",
    },
    {
        id: 21,
        title: "Спонсорская заставка",
        condition: "OR",
    },
    {
        id: 22,
        title: "Статические титры",
        condition: "OR",
    },
    {
        id: 23,
        title: "Телемагазин",
        condition: "OR",
    },
    {
        id: 24,
        title: "Устное объявление",
        condition: "OR",
    },
    {
        id: 25,
        title: "Устное объявление с демонстрацией продукции",
        condition: "OR",
    },
    {
        id: 26,
        title: "Электронный логотип",
        condition: "OR",
    },
    {
        id: 27,
        title: "3D-анимированная заставка"
    }
]
export const AdvertisersList = [
    {
        id: 1,
        title: "BAYER AG",
        condition: "OR",
    },
    {
        id: 2,
        title: "BRITISH-AMERICAN TOBACCO",
        condition: "OR",
    },
    {
        id: 3,
        title: "COLGATE-PALMOLIVE",
        condition: "OR",
    },
    {
        id: 4,
        title: "COMUS",
        condition: "OR",
    },
    {
        id: 5,
        title: "CROCUS GROUP",
        condition: "OR",
    },
    {
        id: 6,
        title: "ESKADO BANK",
        condition: "OR",
    },
    {
        id: 7,
        title: "FERRERO",
        condition: "OR",
    },
    {
        id: 8,
        title: "HITACHI MAXELL LTD.",
        condition: "OR",
    },
    {
        id: 9,
        title: "IBM",
        condition: "OR",
    },
    {
        id: 10,
        title: "INDESIT RUS",
        condition: "OR",
    },
    {
        id: 11,
        title: "JOHNSON & JOHNSON",
        condition: "OR",
    },
    {
        id: 12,
        title: "JULIUS MEINL",
        condition: "OR",
    },
    {
        id: 13,
        title: "KONKOVO PASSAZH",
        condition: "OR",
    },
    {
        id: 14,
        title: "KREWEL MEUSELBACH",
        condition: "OR",
    },
    {
        id: 15,
        title: "L'OREAL",
        condition: "OR",
    },
    {
        id: 16,
        title: "NATUR PRODUKT",
        condition: "OR",
    },
    {
        id: 17,
        title: "OGNI MOSKVY BANK",
        condition: "OR",
    },
    {
        id: 18,
        title: "PANASONIC CORPORATION",
        condition: "OR",
    },
    {
        id: 17,
        title: "PHILIPS",
        condition: "OR",
    },
    {
        id: 18,
        title: "PODRAVKA",
        condition: "OR",
    },
    {
        id: 19,
        title: "PROCTER & GAMBLE",
        condition: "OR",
    },
    {
        id: 20,
        title: "RICHARD BITTNER",
        condition: "OR",
    },
    {
        id: 21,
        title: "SALITA",
        condition: "OR",
    },
    {
        id: 22,
        title: "SAMSUNG ELECTRONICS",
        condition: "OR",
    },
    {
        id: 23,
        title: "SEB GROUP",
        condition: "OR",
    },
    {
        id: 24,
        title: "SIEMENS-BOSCH",
        condition: "OR",
    },
    {
        id: 25,
        title: "SONY LTD",
        condition: "OR",
    },
    {
        id: 26,
        title: "VIDEO INTERNATIONAL",
        condition: "OR",
    },
    {
        id: 27,
        title: "ZEPTER INTERNATIONAL"
    }
]
export const marking = [
    {
        id: 1,
        title: "AQUAFRESH",
        condition: "OR",
    },
    {
        id: 2,
        title: "CAFFETIN",
        condition: "OR",
    },
    {
        id: 3,
        title: "CARLSBERG",
        condition: "OR",
    },
    {
        id: 4,
        title: "CENTRUM",
        condition: "OR",
    },
    {
        id: 5,
        title: "CHUPA CHUPS",
        condition: "OR",
    },
    {
        id: 6,
        title: "DELONGHI",
        condition: "OR",
    },
    {
        id: 7,
        title: "ENTRAPMENT",
        condition: "OR",
    },
    {
        id: 8,
        title: "FRUIT-TELLA",
        condition: "OR",
    },
    {
        id: 9,
        title: "GALLINA BLANCA",
        condition: "OR",
    },
    {
        id: 10,
        title: "GEDEON RICHTER",
        condition: "OR",
    },
    {
        id: 11,
        title: "HIPP",
        condition: "OR",
    },
    {
        id: 12,
        title: "HOLSTEN",
        condition: "OR",
    },
    {
        id: 13,
        title: "LIPTON",
        condition: "OR",
    },
    {
        id: 14,
        title: "MIRACLE BLADE",
        condition: "OR",
    },
    {
        id: 15,
        title: "MONARCH (FOOTWEAR)",
        condition: "OR",
    },
    {
        id: 16,
        title: "MOULINEX",
        condition: "OR",
    },
    {
        id: 17,
        title: "MULTI-TABS",
        condition: "OR",
    },
    {
        id: 18,
        title: "OLIMPIYSKY",
        condition: "OR",
    },
    {
        id: 17,
        title: "PALMOLIVE",
        condition: "OR",
    },
    {
        id: 18,
        title: "PANANGIN",
        condition: "OR",
    },
    {
        id: 19,
        title: "PEDIGREE",
        condition: "OR",
    },
    {
        id: 20,
        title: "REEBOK",
        condition: "OR",
    },
    {
        id: 21,
        title: "ROYAL CANIN",
        condition: "OR",
    },
    {
        id: 22,
        title: "SALAMANDER",
        condition: "OR",
    },
    {
        id: 23,
        title: "SAMSUNG",
        condition: "OR",
    },
    {
        id: 24,
        title: "SPRITE",
        condition: "OR",
    },
    {
        id: 25,
        title: "TUBORG",
        condition: "OR",
    },
    {
        id: 26,
        title: "ZOVIRAX"
    }
]
export const SubbrandsList = [
    {
        id: 1,
        title: "BACK TO THE FUTURE",
        condition: "OR",
    },
    {
        id: 2,
        title: "BOLSHAYA PROGULKA (FILM)",
        condition: "OR",
    },
    {
        id: 3,
        title: "CITROEN",
        condition: "OR",
    },
    {
        id: 4,
        title: "CORK",
        condition: "OR",
    },
    {
        id: 5,
        title: "ELDORADO.RU",
        condition: "OR",
    },
    {
        id: 6,
        title: "GALEREYA (FURNITURE)",
        condition: "OR",
    },
    {
        id: 7,
        title: "GARDEMARINY-3",
        condition: "OR",
    },
    {
        id: 8,
        title: "GIORGIO ARMANI ACQUA DI GIO",
        condition: "OR",
    },
    {
        id: 9,
        title: "GROMADA (FURNITURE CENTRE)",
        condition: "OR",
    },
    {
        id: 10,
        title: "JERSEY GIRL",
        condition: "OR",
    },
    {
        id: 11,
        title: "KIVACH (CLINIC)",
        condition: "OR",
    },
    {
        id: 12,
        title: "KONARMIYA",
        condition: "OR",
    },
    {
        id: 13,
        title: "LEXUS",
        condition: "OR",
    },
    {
        id: 14,
        title: "LG",
        condition: "OR",
    },
    {
        id: 15,
        title: "LORENA",
        condition: "OR",
    },
    {
        id: 16,
        title: "MAGGI",
        condition: "OR",
    },
    {
        id: 17,
        title: "MASTERDENT",
        condition: "OR",
    },
    {
        id: 18,
        title: "MERCEDES-BENZ",
        condition: "OR",
    },
    {
        id: 17,
        title: "MON PLATIN",
        condition: "OR",
    },
    {
        id: 18,
        title: "NEBESNIYE LASTOCHKI (FILM)",
        condition: "OR",
    },
    {
        id: 19,
        title: "NEW YORK MINUTE",
        condition: "OR",
    },
    {
        id: 20,
        title: "PETROELEKTROSBYT",
        condition: "OR",
    },
    {
        id: 21,
        title: "PROTEFIX",
        condition: "OR",
    },
    {
        id: 22,
        title: "SHARP",
        condition: "OR",
    },
    {
        id: 23,
        title: "TARKETT",
        condition: "OR",
    },
    {
        id: 24,
        title: "VES ETOT DZHAZ (FILM)",
        condition: "OR",
    },
    {
        id: 25,
        title: "VISA",
        condition: "OR",
    },
    {
        id: 26,
        title: "VODITEL DLYA VERY",
        condition: "OR",
    },
    {
        id: 26,
        title: "YURY ZAVODSKY - LYUBIMY I LYUBYASCHY"
    }
]
export const Models = [
    {
        id: 1,
        title: "ADIDAS SPORTS FOOTWEAR",
        condition: "OR",
    },
    {
        id: 2,
        title: "ADIDAS SPORTS GOODS",
        condition: "OR",
    },
    {
        id: 3,
        title: "ADIDAS-SALOMON AG MANUAFCTURER OF SPORTSWEAR AND FOOTWEAR",
        condition: "OR",
    },
    {
        id: 4,
        title: "ALFA-BANK BANKING SERVICES",
        condition: "OR",
    },
    {
        id: 5,
        title: "ARS ARRANGING CONCERTS",
        condition: "OR",
    },
    {
        id: 6,
        title: "BAYER AG TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 7,
        title: "BRITISH-AMERICAN TOBACCO TOBACCO PRODUCER",
        condition: "OR",
    },
    {
        id: 8,
        title: "CROCUS INTERNATIONAL TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 9,
        title: "DELONGHI TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 10,
        title: "ESKADO BANK BANKING SERVICES",
        condition: "OR",
    },
    {
        id: 11,
        title: "EUROPA PLUS RADIO STATIONS",
        condition: "OR",
    },
    {
        id: 12,
        title: "FERRERO TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 13,
        title: "HITACHI MAXELL LTD. TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 14,
        title: "JOHNSON & JOHNSON PERSONAL HYGIENIC PRODUCTS",
        condition: "OR",
    },
    {
        id: 15,
        title: "LONDA TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 16,
        title: "MOSCOW YOUTH PALACE ENTERTAINING ACTIVITIES ORGANIZATION",
        condition: "OR",
    },
    {
        id: 17,
        title: "NESTLE TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 18,
        title: "OGNI MOSKVY BANK BANKING SERVICES",
        condition: "OR",
    },
    {
        id: 17,
        title: "OKTYABRSKIY ARRANGING CONCERTS",
        condition: "OR",
    },
    {
        id: 18,
        title: "PANASONIC CORPORATION TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 19,
        title: "PHILIPS TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 20,
        title: "PHILIPS TV SETS",
        condition: "OR",
    },
    {
        id: 21,
        title: "PROCTER & GAMBLE TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 22,
        title: "RICHARD BITTNER TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 23,
        title: "SAMSUNG ELECTRONICS SHOP OF ELECTRONICS AND HOUSEHOLD APPLIANCES",
        condition: "OR",
    },
    {
        id: 24,
        title: "SAMSUNG ELECTRONICS TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 25,
        title: "SIEMENS-BOSCH TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 26,
        title: "SONY LTD TRADEMARK ADVERTISING",
        condition: "OR",
    },
    {
        id: 26,
        title: "WELLA TRADEMARK ADVERTISING"
    }
]
export const AdvertisingItemsLevel1 = [
    {
        id: 1,
        title: "N/A",
        condition: "OR",
    },
    {
        id: 2,
        title: "КОСВЕННАЯ РЕКЛАМА",
        condition: "OR",
    },
    {
        id: 3,
        title: "ОБЩЕСТВЕННО-ПОЛИТИЧЕСКИЕ ОРГАНИЗАЦИИ",
        condition: "OR",
    },
    {
        id: 4,
        title: "РЕКЛАМА ТОРГОВОЙ МАРКИ",
        condition: "OR",
    },
    {
        id: 5,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА",
        condition: "OR",
    },
    {
        id: 6,
        title: "СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ",
        condition: "OR",
    },
    {
        id: 7,
        title: "ТОВАРЫ",
        condition: "OR",
    },
    {
        id: 8,
        title: "УСЛУГИ"
    }
]
export const AdvertisingItemsLevel2 = [
    {
        id: 1,
        title: "N/A",
        condition: "OR",
    },
    {
        id: 2,
        title: "АЛКОГОЛЬНЫЕ НАПИТКИ",
        condition: "OR",
    },
    {
        id: 3,
        title: "АУДИО, ВИДЕО, КИНО И ФОТОТЕХНИКА",
        condition: "OR",
    },
    {
        id: 4,
        title: "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ",
        condition: "OR",
    },
    {
        id: 5,
        title: "БЫТОВАЯ ТЕХНИКА",
        condition: "OR",
    },
    {
        id: 6,
        title: "КОМПЬЮТЕРНАЯ ТЕХНИКА И ПО",
        condition: "OR",
    },
    {
        id: 7,
        title: "КОНДИТЕРСКИЕ ИЗДЕЛИЯ",
        condition: "OR",
    },
    {
        id: 8,
        title: "КОСВЕННАЯ РЕКЛАМА",
        condition: "OR",
    },
    {
        id: 9,
        title: "КУХОННЫЕ И ХОЗЯЙСТВЕННЫЕ ПРИНАДЛЕЖНОСТИ",
        condition: "OR",
    },
    {
        id: 10,
        title: "МАССОВЫЕ МЕРОПРИЯТИЯ",
        condition: "OR",
    },
    {
        id: 11,
        title: "МЕБЕЛЬ И ПРЕДМЕТЫ ИНТЕРЬЕРА",
        condition: "OR",
    },
    {
        id: 12,
        title: "ОБЩЕСТВЕННО-РЕЛИГИОЗНЫЕ ОРГАНИЗАЦИИ",
        condition: "OR",
    },
    {
        id: 13,
        title: "ОБЩЕСТВЕННО-СПОРТИВНЫЕ ОРГАНИЗАЦИИ",
        condition: "OR",
    },
    {
        id: 14,
        title: "ОБЩЕСТВЕННЫЕ ОРГАНИЗАЦИИ",
        condition: "OR",
    },
    {
        id: 15,
        title: "ОРГТЕХНИКА И КАНЦЕЛЯРСКИЕ ТОВАРЫ",
        condition: "OR",
    },
    {
        id: 16,
        title: "ПОЛИТИЧЕСКИЕ ОРГАНИЗАЦИИ",
        condition: "OR",
    },
    {
        id: 17,
        title: "ПРОДУКТЫ ПИТАНИЯ",
        condition: "OR",
    },
    {
        id: 18,
        title: "ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ",
        condition: "OR",
    },
    {
        id: 17,
        title: "ПРОМЫШЛЕННЫЕ МАТЕРИАЛЫ",
        condition: "OR",
    },
    {
        id: 18,
        title: "РЕКЛАМА ТОРГОВОЙ МАРКИ",
        condition: "OR",
    },
    {
        id: 19,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ",
        condition: "OR",
    },
    {
        id: 20,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: НАУКА И ПРОГРЕСС",
        condition: "OR",
    },
    {
        id: 21,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: ОТНОШЕНИЯ МЕЖДУ ЛЮДЬМИ",
        condition: "OR",
    },
    {
        id: 22,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 23,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: ЭКОЛОГИЯ",
        condition: "OR",
    },
    {
        id: 24,
        title: "СРЕДСТВА ОХРАНЫ И ЛИЧНОЙ БЕЗОПАСНОСТИ",
        condition: "OR",
    },
    {
        id: 25,
        title: "СРЕДСТВА СВЯЗИ И ОБОРУДОВАНИЕ",
        condition: "OR",
    },
    {
        id: 26,
        title: "ТАБАК И КУРИТЕЛЬНЫЕ ПРИНАДЛЕЖНОСТИ",
        condition: "OR",
    },
    {
        id: 26,
        title: "ТРАНСПОРТ И СОПУТСТВУЮЩИЕ ТОВАРЫ"
    }
]
export const AdvertisingItemsLevel3 = [
    {
        id: 1,
        title: "ГОСУДАРСТВЕННЫЙ СЛУЖАЩИЙ",
        condition: "OR",
    },
    {
        id: 2,
        title: "ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 3,
        title: "КОСВЕННАЯ РЕКЛАМА",
        condition: "OR",
    },
    {
        id: 4,
        title: "МАССОВЫЕ МЕРОПРИЯТИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 5,
        title: "ОБЩЕСТВЕННЫЕ ОРГАНИЗАЦИИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 6,
        title: "ПОЛИТИЧЕСКИЕ МЕРОПРИЯТИЯ",
        condition: "OR",
    },
    {
        id: 7,
        title: "ПОЛИТИЧЕСКИЕ ОРГАНИЗАЦИИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 8,
        title: "ПОЛИТИЧЕСКИЙ ДЕЯТЕЛЬ",
        condition: "OR",
    },
    {
        id: 9,
        title: "ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 10,
        title: "ПРОМЫШЛЕННЫЕ МАТЕРИАЛЫ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 11,
        title: "РАСТЕНИЯ,ТОВАРЫ ДЛЯ САДА И ОГОРОДА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 12,
        title: "СБОР СРЕДСТВ НА ВОССТАНОВЛЕНИЕ ХРАМОВ",
        condition: "OR",
    },
    {
        id: 13,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 14,
        title: "СРЕДСТВА ОХРАНЫ И ЛИЧНОЙ БЕЗОПАСНОСТИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 15,
        title: "СТРОИТЕЛЬСТВО И РЕМОНТ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 16,
        title: "УСЛУГИ БЫТОВЫЕ И СЕРВИС (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 17,
        title: "УСЛУГИ В ОБЛАСТИ РЕКЛАМЫ И МАРКЕТИНГА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 18,
        title: "УСЛУГИ В ОБЛАСТИ ТОРГОВЛИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 17,
        title: "УСЛУГИ В СИСТЕМЕ ОБРАЗОВ.,ТРУДОУСТРОЙСТВО (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 18,
        title: "УСЛУГИ ИНДУСТРИИ РАЗВЛЕЧЕНИЙ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 19,
        title: "УСЛУГИ ПО ОПЕРАЦИЯМ С НЕДВИЖИМОСТЬЮ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 20,
        title: "УСЛУГИ ПО ОХРАНЕ И БЕЗОПАСНОСТИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 21,
        title: "УСЛУГИ ПО ТУРИЗМУ, СПОРТУ И ОТДЫХУ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 22,
        title: "УСЛУГИ ПРОИЗВОДСТВЕННОГО ХАРАКТЕРА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 23,
        title: "УСЛУГИ СВЯЗИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 24,
        title: "УСЛУГИ СТРАХОВЫЕ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 25,
        title: "УСЛУГИ ТРАНСПОРТНЫЕ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 26,
        title: "УСЛУГИ ФИНАНСОВЫЕ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 26,
        title: "УСЛУГИ ЮРИДИЧ., АУДИТ. И КОНСАЛТИНГОВЫЕ (РАЗНОЕ)"
    }
]
export const AdvertisingItemsLevel4 = [
    {
        id: 1,
        title: "АЛКОГОЛЬНЫЕ НАПИТКИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 2,
        title: "АУДИО, ВИДЕО, КИНО И ФОТОТЕХНИКА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 3,
        title: "АУДИО, ВИДЕОПРОДУКЦИЯ, ИГРЫ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 4,
        title: "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 5,
        title: "БЫТОВАЯ ТЕХНИКА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 6,
        title: "БЫТОВАЯ ХИМИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 7,
        title: "КОМПЬЮТЕРНАЯ ТЕХНИКА И ПО (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 8,
        title: "КОНДИТЕРСКИЕ ИЗДЕЛИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 9,
        title: "КУХОННЫЕ И ХОЗЯЙСТВЕННЫЕ ПРИНАДЛЕЖНОСТИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 10,
        title: "ЛЕКАРСТВЕННЫЕ ПРЕПАРАТЫ И БАД (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 11,
        title: "МАССОВЫЕ МЕРОПРИЯТИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 12,
        title: "МЕБЕЛЬ И ПРЕДМЕТЫ ИНТЕРЬЕРА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 13,
        title: "ОДЕЖДА И ОБУВЬ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 14,
        title: "ОРГТЕХНИКА И КАНЦЕЛЯРСКИЕ ТОВАРЫ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 15,
        title: "ПАРФЮМЕРИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 16,
        title: "ПРОДУКТЫ ПИТАНИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 17,
        title: "ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 18,
        title: "ПРОМЫШЛЕННЫЕ МАТЕРИАЛЫ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 17,
        title: "РАСТЕНИЯ,ТОВАРЫ ДЛЯ САДА И ОГОРОДА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 18,
        title: "СПОРТИВНЫЕ ТОВАРЫ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 19,
        title: "СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 20,
        title: "СРЕДСТВА ОХРАНЫ И ЛИЧНОЙ БЕЗОПАСНОСТИ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 21,
        title: "СРЕДСТВА СВЯЗИ И ОБОРУДОВАНИЕ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 22,
        title: "СТРОИТЕЛЬНЫЕ, ОТД. МАТЕРИАЛЫ, САНТЕХНИКА (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 23,
        title: "ТОВАРЫ ДЛЯ ЖИВОТНЫХ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 24,
        title: "ТОВАРЫ ДЛЯ КРАСОТЫ И ЗДОРОВЬЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 25,
        title: "ТРАНСПОРТ И СОПУТСТВУЮЩИЕ ТОВАРЫ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 26,
        title: "ЧАСЫ, ЮВЕЛИРНЫЕ ИЗДЕЛИЯ (РАЗНОЕ)",
        condition: "OR",
    },
    {
        id: 26,
        title: "ШОКОЛАДНЫЕ ПЛИТКИ",
        condition: "OR",
    }
]


