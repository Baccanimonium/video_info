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
    {
        id: 14,
        title: "ГОРОД 11"
    },
]

export const nationalTV = [
    {
        id: 1,
        title: "CHE"
    },
    {
        id: 2,
        title: "DISNEY CHANNEL"
    },
    {
        id: 3,
        title: "DOMASHNIY"
    },
    {
        id: 4,
        title: "EURONEWS"
    },
    {
        id: 5,
        title: "FRIDAY"
    },
    {
        id: 6,
        title: "KARUSEL"
    },
    {
        id: 7,
        title: "MIR"
    },
    {
        id: 8,
        title: "MUZ TV"
    },
    {
        id: 9,
        title: "NTV"
    },
    {
        id: 10,
        title: "PERVY KANAL"
    },
    {
        id: 11,
        title: "PYATY KANAL"
    },
    {
        id: 12,
        title: "RAMBLER"
    },
    {
        id: 13,
        title: "REN TV"
    },
    {
        id: 14,
        title: "ROSSIYA K"
    },
    {
        id: 15,
        title: "ROSSIYA 1"
    },
    {
        id: 16,
        title: "ROSSIYA 2"
    },
    {
        id: 17,
        title: "ROSSIYA 24"
    },
    {
        id: 18,
        title: "RU.TV (TILL 31/12/2020)"
    },
    {
        id: 17,
        title: "SEMYORKA"
    },
    {
        id: 18,
        title: "STS"
    },
    {
        id: 19,
        title: "STS LOVE"
    },
    {
        id: 20,
        title: "TNT"
    },
    {
        id: 21,
        title: "TV TSENTR"
    },
    {
        id: 22,
        title: "TVS"
    },
    {
        id: 23,
        title: "TV-3"
    },
    {
        id: 24,
        title: "TV-6"
    },
    {
        id: 25,
        title: "TV-6: TEMPORARY BROADCASTING"
    },
    {
        id: 26,
        title: "U"
    },
    {
        id: 27,
        title: "ZVEZDA"
    }
]
export const TVcompanies = [
    {
        id: 1,
        title: "CHE / KA (MOSCOW)"
    },
    {
        id: 2,
        title: "DISCOVERY CHANNEL (TILL 31/12/2019) (NETWORK BROADCASTING)"
    },
    {
        id: 3,
        title: "EURONEWS / 33 VIRT. (MOSCOW)"
    },
    {
        id: 4,
        title: "FRIDAY / KA (MOSCOW)"
    },
    {
        id: 5,
        title: "KULTURA TILL 04.2003 / 33 (MOSCOW)"
    },
    {
        id: 6,
        title: "MUZ TV (MOSCOW)"
    },
    {
        id: 7,
        title: "M1 / 31 (MOSCOW)"
    },
    {
        id: 8,
        title: "MUZ NTV / KA (MOSCOW)"
    },
    {
        id: 9,
        title: "PERVY KANAL / KA (MOSCOW)"
    },
    {
        id: 10,
        title: "PERVY KANAL (NETWORK BROADCASTING)"
    },
    {
        id: 11,
        title: "PYATY KANAL / SP (MOSCOW)"
    },
    {
        id: 12,
        title: "REN TV / KA (MOSCOW)"
    },
    {
        id: 13,
        title: "ROSSIYA 1 / KA (MOSCOW)"
    },
    {
        id: 14,
        title: "ROSSIYA 1 (NETWORK BROADCASTING)"
    },
    {
        id: 15,
        title: "ROSSIYA 24 / KA (MOSCOW)"
    },
    {
        id: 16,
        title: "ROSSIYA 24 (NETWORK BROADCASTING)"
    },
    {
        id: 17,
        title: "STS / KA (MOSCOW)"
    },
    {
        id: 18,
        title: "TELEEXPO / FRIDAY (MOSCOW)"
    },
    {
        id: 17,
        title: "TLC (MOSCOW)"
    },
    {
        id: 18,
        title: "TNT / KA (MOSCOW)"
    },
    {
        id: 19,
        title: "TV STOLITSA / KA (MOSCOW)"
    },
    {
        id: 20,
        title: "TV TSENTR (NETWORK BROADCASTING)"
    },
    {
        id: 21,
        title: "TV TSENTR TILL 05.2005 / 03 (MOSCOW)"
    },
    {
        id: 22,
        title: "TVS / 06 (MOSCOW)"
    },
    {
        id: 23,
        title: "TV-3 / KA (MOSCOW)"
    },
    {
        id: 24,
        title: "TV-6 / 06 (MOSCOW)"
    },
    {
        id: 25,
        title: "U / KA (MOSCOW)"
    },
    {
        id: 26,
        title: "VESTI / SP (MOSCOW)"
    },
    {
        id: 27,
        title: "3 KANAL / 03 VIRT. (MOSCOW)"
    },
]
export const TypeOfAdvertisement = [
    {
        id: 1,
        title: "Анонс без даты"
    },
    {
        id: 2,
        title: "Анонс: заставка блока без даты"
    },
    {
        id: 3,
        title: "Анонс: заставка блока с датой"
    },
    {
        id: 4,
        title: "Анонс с датой"
    },
    {
        id: 5,
        title: "Анонс: спонсор"
    },
    {
        id: 6,
        title: "Анонс: спонсорская заставка"
    },
    {
        id: 7,
        title: "Анонс: упоминание спонсора"
    },
    {
        id: 8,
        title: "Анонс-промо"
    },
    {
        id: 9,
        title: "Атрибутика спонсора (декорации)"
    },
    {
        id: 10,
        title: "Атрибутика спонсора (одежда)"
    },
    {
        id: 11,
        title: "Атрибутика спонсора (продукция)"
    },
    {
        id: 12,
        title: "Аудио/видео наименование юр.лица"
    },
    {
        id: 13,
        title: "Благодарность в титрах"
    },
    {
        id: 14,
        title: "Благодарность с реквизитами в титрах"
    },
    {
        id: 15,
        title: "Вручение подарков"
    },
    {
        id: 16,
        title: "Динамическая заставка"
    },
    {
        id: 17,
        title: "Динамические титры"
    },
    {
        id: 18,
        title: "Динамический логотип"
    },
    {
        id: 17,
        title: "Погода: спонсор"
    },
    {
        id: 18,
        title: "Погода: упоминание спонсора"
    },
    {
        id: 19,
        title: "Ролик"
    },
    {
        id: 20,
        title: "Спонсор"
    },
    {
        id: 21,
        title: "Спонсорская заставка"
    },
    {
        id: 22,
        title: "Статические титры"
    },
    {
        id: 23,
        title: "Телемагазин"
    },
    {
        id: 24,
        title: "Устное объявление"
    },
    {
        id: 25,
        title: "Устное объявление с демонстрацией продукции"
    },
    {
        id: 26,
        title: "Электронный логотип"
    },
    {
        id: 27,
        title: "3D-анимированная заставка"
    }
]
export const AdvertisersList = [
    {
        id: 1,
        title: "BAYER AG"
    },
    {
        id: 2,
        title: "BRITISH-AMERICAN TOBACCO"
    },
    {
        id: 3,
        title: "COLGATE-PALMOLIVE"
    },
    {
        id: 4,
        title: "COMUS"
    },
    {
        id: 5,
        title: "CROCUS GROUP"
    },
    {
        id: 6,
        title: "ESKADO BANK"
    },
    {
        id: 7,
        title: "FERRERO"
    },
    {
        id: 8,
        title: "HITACHI MAXELL LTD."
    },
    {
        id: 9,
        title: "IBM"
    },
    {
        id: 10,
        title: "INDESIT RUS"
    },
    {
        id: 11,
        title: "JOHNSON & JOHNSON"
    },
    {
        id: 12,
        title: "JULIUS MEINL"
    },
    {
        id: 13,
        title: "KONKOVO PASSAZH"
    },
    {
        id: 14,
        title: "KREWEL MEUSELBACH"
    },
    {
        id: 15,
        title: "L'OREAL"
    },
    {
        id: 16,
        title: "NATUR PRODUKT"
    },
    {
        id: 17,
        title: "OGNI MOSKVY BANK"
    },
    {
        id: 18,
        title: "PANASONIC CORPORATION"
    },
    {
        id: 17,
        title: "PHILIPS"
    },
    {
        id: 18,
        title: "PODRAVKA"
    },
    {
        id: 19,
        title: "PROCTER & GAMBLE"
    },
    {
        id: 20,
        title: "RICHARD BITTNER"
    },
    {
        id: 21,
        title: "SALITA"
    },
    {
        id: 22,
        title: "SAMSUNG ELECTRONICS"
    },
    {
        id: 23,
        title: "SEB GROUP"
    },
    {
        id: 24,
        title: "SIEMENS-BOSCH"
    },
    {
        id: 25,
        title: "SONY LTD"
    },
    {
        id: 26,
        title: "VIDEO INTERNATIONAL"
    },
    {
        id: 27,
        title: "ZEPTER INTERNATIONAL"
    }
]
export const marking = [
    {
        id: 1,
        title: "AQUAFRESH"
    },
    {
        id: 2,
        title: "CAFFETIN"
    },
    {
        id: 3,
        title: "CARLSBERG"
    },
    {
        id: 4,
        title: "CENTRUM"
    },
    {
        id: 5,
        title: "CHUPA CHUPS"
    },
    {
        id: 6,
        title: "DELONGHI"
    },
    {
        id: 7,
        title: "ENTRAPMENT"
    },
    {
        id: 8,
        title: "FRUIT-TELLA"
    },
    {
        id: 9,
        title: "GALLINA BLANCA"
    },
    {
        id: 10,
        title: "GEDEON RICHTER"
    },
    {
        id: 11,
        title: "HIPP"
    },
    {
        id: 12,
        title: "HOLSTEN"
    },
    {
        id: 13,
        title: "LIPTON"
    },
    {
        id: 14,
        title: "MIRACLE BLADE"
    },
    {
        id: 15,
        title: "MONARCH (FOOTWEAR)"
    },
    {
        id: 16,
        title: "MOULINEX"
    },
    {
        id: 17,
        title: "MULTI-TABS"
    },
    {
        id: 18,
        title: "OLIMPIYSKY"
    },
    {
        id: 17,
        title: "PALMOLIVE"
    },
    {
        id: 18,
        title: "PANANGIN"
    },
    {
        id: 19,
        title: "PEDIGREE"
    },
    {
        id: 20,
        title: "REEBOK"
    },
    {
        id: 21,
        title: "ROYAL CANIN"
    },
    {
        id: 22,
        title: "SALAMANDER"
    },
    {
        id: 23,
        title: "SAMSUNG"
    },
    {
        id: 24,
        title: "SPRITE"
    },
    {
        id: 25,
        title: "TUBORG"
    },
    {
        id: 26,
        title: "ZOVIRAX"
    }
]
export const SubbrandsList = [
    {
        id: 1,
        title: "BACK TO THE FUTURE"
    },
    {
        id: 2,
        title: "BOLSHAYA PROGULKA (FILM)"
    },
    {
        id: 3,
        title: "CITROEN"
    },
    {
        id: 4,
        title: "CORK"
    },
    {
        id: 5,
        title: "ELDORADO.RU"
    },
    {
        id: 6,
        title: "GALEREYA (FURNITURE)"
    },
    {
        id: 7,
        title: "GARDEMARINY-3"
    },
    {
        id: 8,
        title: "GIORGIO ARMANI ACQUA DI GIO"
    },
    {
        id: 9,
        title: "GROMADA (FURNITURE CENTRE)"
    },
    {
        id: 10,
        title: "JERSEY GIRL"
    },
    {
        id: 11,
        title: "KIVACH (CLINIC)"
    },
    {
        id: 12,
        title: "KONARMIYA"
    },
    {
        id: 13,
        title: "LEXUS"
    },
    {
        id: 14,
        title: "LG"
    },
    {
        id: 15,
        title: "LORENA"
    },
    {
        id: 16,
        title: "MAGGI"
    },
    {
        id: 17,
        title: "MASTERDENT"
    },
    {
        id: 18,
        title: "MERCEDES-BENZ"
    },
    {
        id: 17,
        title: "MON PLATIN"
    },
    {
        id: 18,
        title: "NEBESNIYE LASTOCHKI (FILM)"
    },
    {
        id: 19,
        title: "NEW YORK MINUTE"
    },
    {
        id: 20,
        title: "PETROELEKTROSBYT"
    },
    {
        id: 21,
        title: "PROTEFIX"
    },
    {
        id: 22,
        title: "SHARP"
    },
    {
        id: 23,
        title: "TARKETT"
    },
    {
        id: 24,
        title: "VES ETOT DZHAZ (FILM)"
    },
    {
        id: 25,
        title: "VISA"
    },
    {
        id: 26,
        title: "VODITEL DLYA VERY"
    },
    {
        id: 26,
        title: "YURY ZAVODSKY - LYUBIMY I LYUBYASCHY"
    }
]
export const Models = [
    {
        id: 1,
        title: "ADIDAS SPORTS FOOTWEAR"
    },
    {
        id: 2,
        title: "ADIDAS SPORTS GOODS"
    },
    {
        id: 3,
        title: "ADIDAS-SALOMON AG MANUAFCTURER OF SPORTSWEAR AND FOOTWEAR"
    },
    {
        id: 4,
        title: "ALFA-BANK BANKING SERVICES"
    },
    {
        id: 5,
        title: "ARS ARRANGING CONCERTS"
    },
    {
        id: 6,
        title: "BAYER AG TRADEMARK ADVERTISING"
    },
    {
        id: 7,
        title: "BRITISH-AMERICAN TOBACCO TOBACCO PRODUCER"
    },
    {
        id: 8,
        title: "CROCUS INTERNATIONAL TRADEMARK ADVERTISING"
    },
    {
        id: 9,
        title: "DELONGHI TRADEMARK ADVERTISING"
    },
    {
        id: 10,
        title: "ESKADO BANK BANKING SERVICES"
    },
    {
        id: 11,
        title: "EUROPA PLUS RADIO STATIONS"
    },
    {
        id: 12,
        title: "FERRERO TRADEMARK ADVERTISING"
    },
    {
        id: 13,
        title: "HITACHI MAXELL LTD. TRADEMARK ADVERTISING"
    },
    {
        id: 14,
        title: "JOHNSON & JOHNSON PERSONAL HYGIENIC PRODUCTS"
    },
    {
        id: 15,
        title: "LONDA TRADEMARK ADVERTISING"
    },
    {
        id: 16,
        title: "MOSCOW YOUTH PALACE ENTERTAINING ACTIVITIES ORGANIZATION"
    },
    {
        id: 17,
        title: "NESTLE TRADEMARK ADVERTISING"
    },
    {
        id: 18,
        title: "OGNI MOSKVY BANK BANKING SERVICES"
    },
    {
        id: 17,
        title: "OKTYABRSKIY ARRANGING CONCERTS"
    },
    {
        id: 18,
        title: "PANASONIC CORPORATION TRADEMARK ADVERTISING"
    },
    {
        id: 19,
        title: "PHILIPS TRADEMARK ADVERTISING"
    },
    {
        id: 20,
        title: "PHILIPS TV SETS"
    },
    {
        id: 21,
        title: "PROCTER & GAMBLE TRADEMARK ADVERTISING"
    },
    {
        id: 22,
        title: "RICHARD BITTNER TRADEMARK ADVERTISING"
    },
    {
        id: 23,
        title: "SAMSUNG ELECTRONICS SHOP OF ELECTRONICS AND HOUSEHOLD APPLIANCES"
    },
    {
        id: 24,
        title: "SAMSUNG ELECTRONICS TRADEMARK ADVERTISING"
    },
    {
        id: 25,
        title: "SIEMENS-BOSCH TRADEMARK ADVERTISING"
    },
    {
        id: 26,
        title: "SONY LTD TRADEMARK ADVERTISING"
    },
    {
        id: 26,
        title: "WELLA TRADEMARK ADVERTISING"
    }
]
export const AdvertisingItemsLevel1 = [
    {
        id: 1,
        title: "N/A"
    },
    {
        id: 2,
        title: "КОСВЕННАЯ РЕКЛАМА"
    },
    {
        id: 3,
        title: "ОБЩЕСТВЕННО-ПОЛИТИЧЕСКИЕ ОРГАНИЗАЦИИ"
    },
    {
        id: 4,
        title: "РЕКЛАМА ТОРГОВОЙ МАРКИ"
    },
    {
        id: 5,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА"
    },
    {
        id: 6,
        title: "СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ"
    },
    {
        id: 7,
        title: "ТОВАРЫ"
    },
    {
        id: 8,
        title: "УСЛУГИ"
    }
]
export const AdvertisingItemsLevel2 = [
    {
        id: 1,
        title: "N/A"
    },
    {
        id: 2,
        title: "АЛКОГОЛЬНЫЕ НАПИТКИ"
    },
    {
        id: 3,
        title: "АУДИО, ВИДЕО, КИНО И ФОТОТЕХНИКА"
    },
    {
        id: 4,
        title: "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ"
    },
    {
        id: 5,
        title: "БЫТОВАЯ ТЕХНИКА"
    },
    {
        id: 6,
        title: "КОМПЬЮТЕРНАЯ ТЕХНИКА И ПО"
    },
    {
        id: 7,
        title: "КОНДИТЕРСКИЕ ИЗДЕЛИЯ"
    },
    {
        id: 8,
        title: "КОСВЕННАЯ РЕКЛАМА"
    },
    {
        id: 9,
        title: "КУХОННЫЕ И ХОЗЯЙСТВЕННЫЕ ПРИНАДЛЕЖНОСТИ"
    },
    {
        id: 10,
        title: "МАССОВЫЕ МЕРОПРИЯТИЯ"
    },
    {
        id: 11,
        title: "МЕБЕЛЬ И ПРЕДМЕТЫ ИНТЕРЬЕРА"
    },
    {
        id: 12,
        title: "ОБЩЕСТВЕННО-РЕЛИГИОЗНЫЕ ОРГАНИЗАЦИИ"
    },
    {
        id: 13,
        title: "ОБЩЕСТВЕННО-СПОРТИВНЫЕ ОРГАНИЗАЦИИ"
    },
    {
        id: 14,
        title: "ОБЩЕСТВЕННЫЕ ОРГАНИЗАЦИИ"
    },
    {
        id: 15,
        title: "ОРГТЕХНИКА И КАНЦЕЛЯРСКИЕ ТОВАРЫ"
    },
    {
        id: 16,
        title: "ПОЛИТИЧЕСКИЕ ОРГАНИЗАЦИИ"
    },
    {
        id: 17,
        title: "ПРОДУКТЫ ПИТАНИЯ"
    },
    {
        id: 18,
        title: "ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ"
    },
    {
        id: 17,
        title: "ПРОМЫШЛЕННЫЕ МАТЕРИАЛЫ"
    },
    {
        id: 18,
        title: "РЕКЛАМА ТОРГОВОЙ МАРКИ"
    },
    {
        id: 19,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ"
    },
    {
        id: 20,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: НАУКА И ПРОГРЕСС"
    },
    {
        id: 21,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: ОТНОШЕНИЯ МЕЖДУ ЛЮДЬМИ"
    },
    {
        id: 22,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА (РАЗНОЕ)"
    },
    {
        id: 23,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА: ЭКОЛОГИЯ"
    },
    {
        id: 24,
        title: "СРЕДСТВА ОХРАНЫ И ЛИЧНОЙ БЕЗОПАСНОСТИ"
    },
    {
        id: 25,
        title: "СРЕДСТВА СВЯЗИ И ОБОРУДОВАНИЕ"
    },
    {
        id: 26,
        title: "ТАБАК И КУРИТЕЛЬНЫЕ ПРИНАДЛЕЖНОСТИ"
    },
    {
        id: 26,
        title: "ТРАНСПОРТ И СОПУТСТВУЮЩИЕ ТОВАРЫ"
    }
]
export const AdvertisingItemsLevel3 = [
    {
        id: 1,
        title: "ГОСУДАРСТВЕННЫЙ СЛУЖАЩИЙ"
    },
    {
        id: 2,
        title: "ЗДОРОВЫЙ ОБРАЗ ЖИЗНИ (РАЗНОЕ)"
    },
    {
        id: 3,
        title: "КОСВЕННАЯ РЕКЛАМА"
    },
    {
        id: 4,
        title: "МАССОВЫЕ МЕРОПРИЯТИЯ (РАЗНОЕ)"
    },
    {
        id: 5,
        title: "ОБЩЕСТВЕННЫЕ ОРГАНИЗАЦИИ (РАЗНОЕ)"
    },
    {
        id: 6,
        title: "ПОЛИТИЧЕСКИЕ МЕРОПРИЯТИЯ"
    },
    {
        id: 7,
        title: "ПОЛИТИЧЕСКИЕ ОРГАНИЗАЦИИ (РАЗНОЕ)"
    },
    {
        id: 8,
        title: "ПОЛИТИЧЕСКИЙ ДЕЯТЕЛЬ"
    },
    {
        id: 9,
        title: "ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ (РАЗНОЕ)"
    },
    {
        id: 10,
        title: "ПРОМЫШЛЕННЫЕ МАТЕРИАЛЫ (РАЗНОЕ)"
    },
    {
        id: 11,
        title: "РАСТЕНИЯ,ТОВАРЫ ДЛЯ САДА И ОГОРОДА (РАЗНОЕ)"
    },
    {
        id: 12,
        title: "СБОР СРЕДСТВ НА ВОССТАНОВЛЕНИЕ ХРАМОВ"
    },
    {
        id: 13,
        title: "СОЦИАЛЬНАЯ РЕКЛАМА (РАЗНОЕ)"
    },
    {
        id: 14,
        title: "СРЕДСТВА ОХРАНЫ И ЛИЧНОЙ БЕЗОПАСНОСТИ (РАЗНОЕ)"
    },
    {
        id: 15,
        title: "СТРОИТЕЛЬСТВО И РЕМОНТ (РАЗНОЕ)"
    },
    {
        id: 16,
        title: "УСЛУГИ БЫТОВЫЕ И СЕРВИС (РАЗНОЕ)"
    },
    {
        id: 17,
        title: "УСЛУГИ В ОБЛАСТИ РЕКЛАМЫ И МАРКЕТИНГА (РАЗНОЕ)"
    },
    {
        id: 18,
        title: "УСЛУГИ В ОБЛАСТИ ТОРГОВЛИ (РАЗНОЕ)"
    },
    {
        id: 17,
        title: "УСЛУГИ В СИСТЕМЕ ОБРАЗОВ.,ТРУДОУСТРОЙСТВО (РАЗНОЕ)"
    },
    {
        id: 18,
        title: "УСЛУГИ ИНДУСТРИИ РАЗВЛЕЧЕНИЙ (РАЗНОЕ)"
    },
    {
        id: 19,
        title: "УСЛУГИ ПО ОПЕРАЦИЯМ С НЕДВИЖИМОСТЬЮ (РАЗНОЕ)"
    },
    {
        id: 20,
        title: "УСЛУГИ ПО ОХРАНЕ И БЕЗОПАСНОСТИ (РАЗНОЕ)"
    },
    {
        id: 21,
        title: "УСЛУГИ ПО ТУРИЗМУ, СПОРТУ И ОТДЫХУ (РАЗНОЕ)"
    },
    {
        id: 22,
        title: "УСЛУГИ ПРОИЗВОДСТВЕННОГО ХАРАКТЕРА (РАЗНОЕ)"
    },
    {
        id: 23,
        title: "УСЛУГИ СВЯЗИ (РАЗНОЕ)"
    },
    {
        id: 24,
        title: "УСЛУГИ СТРАХОВЫЕ (РАЗНОЕ)"
    },
    {
        id: 25,
        title: "УСЛУГИ ТРАНСПОРТНЫЕ (РАЗНОЕ)"
    },
    {
        id: 26,
        title: "УСЛУГИ ФИНАНСОВЫЕ (РАЗНОЕ)"
    },
    {
        id: 26,
        title: "УСЛУГИ ЮРИДИЧ., АУДИТ. И КОНСАЛТИНГОВЫЕ (РАЗНОЕ)"
    }
]
export const AdvertisingItemsLevel4 = [
    {
        id: 1,
        title: "АЛКОГОЛЬНЫЕ НАПИТКИ (РАЗНОЕ)"
    },
    {
        id: 2,
        title: "АУДИО, ВИДЕО, КИНО И ФОТОТЕХНИКА (РАЗНОЕ)"
    },
    {
        id: 3,
        title: "АУДИО, ВИДЕОПРОДУКЦИЯ, ИГРЫ (РАЗНОЕ)"
    },
    {
        id: 4,
        title: "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ (РАЗНОЕ)"
    },
    {
        id: 5,
        title: "БЫТОВАЯ ТЕХНИКА (РАЗНОЕ)"
    },
    {
        id: 6,
        title: "БЫТОВАЯ ХИМИЯ (РАЗНОЕ)"
    },
    {
        id: 7,
        title: "КОМПЬЮТЕРНАЯ ТЕХНИКА И ПО (РАЗНОЕ)"
    },
    {
        id: 8,
        title: "КОНДИТЕРСКИЕ ИЗДЕЛИЯ (РАЗНОЕ)"
    },
    {
        id: 9,
        title: "КУХОННЫЕ И ХОЗЯЙСТВЕННЫЕ ПРИНАДЛЕЖНОСТИ (РАЗНОЕ)"
    },
    {
        id: 10,
        title: "ЛЕКАРСТВЕННЫЕ ПРЕПАРАТЫ И БАД (РАЗНОЕ)"
    },
    {
        id: 11,
        title: "МАССОВЫЕ МЕРОПРИЯТИЯ (РАЗНОЕ)"
    },
    {
        id: 12,
        title: "МЕБЕЛЬ И ПРЕДМЕТЫ ИНТЕРЬЕРА (РАЗНОЕ)"
    },
    {
        id: 13,
        title: "ОДЕЖДА И ОБУВЬ (РАЗНОЕ)"
    },
    {
        id: 14,
        title: "ОРГТЕХНИКА И КАНЦЕЛЯРСКИЕ ТОВАРЫ (РАЗНОЕ)"
    },
    {
        id: 15,
        title: "ПАРФЮМЕРИЯ (РАЗНОЕ)"
    },
    {
        id: 16,
        title: "ПРОДУКТЫ ПИТАНИЯ (РАЗНОЕ)"
    },
    {
        id: 17,
        title: "ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ (РАЗНОЕ)"
    },
    {
        id: 18,
        title: "ПРОМЫШЛЕННЫЕ МАТЕРИАЛЫ (РАЗНОЕ)"
    },
    {
        id: 17,
        title: "РАСТЕНИЯ,ТОВАРЫ ДЛЯ САДА И ОГОРОДА (РАЗНОЕ)"
    },
    {
        id: 18,
        title: "СПОРТИВНЫЕ ТОВАРЫ (РАЗНОЕ)"
    },
    {
        id: 19,
        title: "СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ (РАЗНОЕ)"
    },
    {
        id: 20,
        title: "СРЕДСТВА ОХРАНЫ И ЛИЧНОЙ БЕЗОПАСНОСТИ (РАЗНОЕ)"
    },
    {
        id: 21,
        title: "СРЕДСТВА СВЯЗИ И ОБОРУДОВАНИЕ (РАЗНОЕ)"
    },
    {
        id: 22,
        title: "СТРОИТЕЛЬНЫЕ, ОТД. МАТЕРИАЛЫ, САНТЕХНИКА (РАЗНОЕ)"
    },
    {
        id: 23,
        title: "ТОВАРЫ ДЛЯ ЖИВОТНЫХ (РАЗНОЕ)"
    },
    {
        id: 24,
        title: "ТОВАРЫ ДЛЯ КРАСОТЫ И ЗДОРОВЬЯ (РАЗНОЕ)"
    },
    {
        id: 25,
        title: "ТРАНСПОРТ И СОПУТСТВУЮЩИЕ ТОВАРЫ (РАЗНОЕ)"
    },
    {
        id: 26,
        title: "ЧАСЫ, ЮВЕЛИРНЫЕ ИЗДЕЛИЯ (РАЗНОЕ)"
    },
    {
        id: 26,
        title: "ШОКОЛАДНЫЕ ПЛИТКИ"
    }
]
