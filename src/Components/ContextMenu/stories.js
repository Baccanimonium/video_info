import React from "react"

import PreviewValueContextMenu from "./PreviewValueContextMenu"

export default {
  title: "Components/Misc/PreviewValueContextMenu",
  component: PreviewValueContextMenu,
  argTypes: {
    onEdit: {
      description: "HTML свойство обработчик события"
    },
    title: {
      description: "Заголовок компонента"
    },
    text: {
      description: "Текст компонента"
    },
    textBtn: {
      description: "Название кнопки"
    }
  }
}

const Template = (args) => (
  <div className="flex fd-column j-c-start">
    <div className="p-b-30"><PreviewValueContextMenu {...args} /></div>
    <div className="p-b-30"><PreviewValueContextMenu {...args} textBtn="название кнопки" /></div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  textBtn: "comment",
  title: "Title component",
  text: "Text component"
}
