/* eslint-disable react/no-danger */
import React from "react"
import { getBlob } from "@/Core/LoadAndCacheImages"
import useLoadImageAndCache from "./index"

export default {
  title: "Core/Hooks/useLoadImageAndCache",
  component: useLoadImageAndCache,
  argTypes: {
    defaultIcon: {
      type: { name: "string", required: true },
      description: "Строка с адресом иконки по умолчанию или svg",
    },
    value: {
      type: { name: "string", required: true },
      description: "Ключ файла иконки на сервере",
    },
    loadFunction: {
      type: { name: "function", required: true },
      description: "Функция загрузки данных",
    },
    dataKey: {
      type: { name: "string", required: true },
      description: "Атрибут ключа файла, используется если value == object",
    }
  }
}
const Template = (args) => <div dangerouslySetInnerHTML={{ __html: useLoadImageAndCache(args) }} />

const Template2 = (args) => <img src={useLoadImageAndCache(args)} alt="" />

export const Default = Template.bind({})

Default.args = {
  value: "FILE_SERVER/SYSTEM/ICONS/9B43F5845FAFCDD7049F6C8A001BE3A1145E41AE91D4461F64E9142027BFB153",
  defaultIcon: "<div>Отобразиться в случае ошибки загрузки с сервера</div>"
}

export const CommonUsage = Template2.bind({})
CommonUsage.args = {
  value: "FILE_SERVER/SYSTEM/ICONS/9B43F5845FAFCDD7049F6C8A001BE3A1145E41AE91D4461F64E9142027BFB153",
  dataKey: "KEY",
  loadFunction: getBlob,
  defaultIcon: "/default-user.png"
}
