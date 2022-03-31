import Icon from "@/Components/Icon"
import { book } from "./icons/book"
import { wiki } from "./icons/wiki"
import { settings } from "./icons/settings"
import { archive } from "./icons/archive"
import {mediaplanIcon} from "./icons/mediaplanIcon"
import {documentDownloadFile} from "./icons/documentDownloadFile"


export const tabNavigationMenu = [
  {
    name: "Новая задача",
    route: "/new_task",
    picture: Icon(mediaplanIcon),
  },
  {
    name: "Загрузить задачу",
    route: "/download_task",
    picture: Icon(documentDownloadFile),
    size: 20
  },
  // {
  //   name: "Базы данных",
  //   route: "/db",
  //   picture: Icon(book),
  // },
  // {
  //   name: "Опции",
  //   route: "/options",
  //   picture: Icon(settings),
  // },
  // {
  //   name: "Справка",
  //   route: "/faq",
  //   picture: Icon(wiki),
  // }
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
  {
    path: "/constructor",
    text: "ReportConstructor"
  },
]
