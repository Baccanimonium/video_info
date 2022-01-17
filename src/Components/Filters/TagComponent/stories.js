import React from "react"

import TagComponent from "./index"

export default {
  title: "Components/Filters/TagComponent",
  component: TagComponent,
  argTypes: {
    client: {
      description: "Объект данных"
    },
    prefix: {
      description: "Название карточки компонента"
    },
    closeTag: {
      description: "HTML свойство обработчик события"
    }
  }
}

const Template = (args) => <TagComponent {...args} />

export const Default = Template.bind({})
Default.args = {
  client: { ID: 2274, SYS_NAME: "P&G", ID_REF_DATA: 1, ID_TABLE_DATA: 1 },
  prefix: "Client"
}
