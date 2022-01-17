import Icon from "@/Components/Icon"
import { book } from "./icons/book"
import { wiki } from "./icons/wiki"
import { settings } from "./icons/settings"
import { archive } from "./icons/archive"

export const CACHED_TAB_STATE = "CACHED_TAB_STATE"
export const LAST_ACTIVE_INDEX = "LAST_ACTIVE_INDEX"


export const tabNavigationMenu = [
  {
    name: "Файл",
    route: "/file",
    picture: Icon(archive),
  },
  {
    name: "Базы данных",
    route: "/db",
    picture: Icon(book),
  },
  {
    name: "Опции",
    route: "/options",
    picture: Icon(settings),
  },
  {
    name: "Справка",
    route: "/faq",
    picture: Icon(wiki),
  }
]

export const FooterTabs = [
  {
    path: "/data_set",
    text: "Наборы данных"
  },
  {
    path: "/report",
    text: "Отчеты"
  },
  {
    path: "/selection_criteria",
    text: "Критерии отбора"
  },
  {
    path: "/buying_audiences",
    text: "Баинговые аудитории"
  },
  {
    path: "/result",
    text: "Результат"
  },
]