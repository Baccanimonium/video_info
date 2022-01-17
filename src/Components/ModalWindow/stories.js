import React from "react"

import ModalWindow from "./index"

export default {
  title: "Components/Misc/ModalWindow",
  component: ModalWindow,
  argTypes: {
    onClose: {
      description: "HTML свойство обработчик события"
    },
    dialogueParams: {
      description: ""
    },
    onCancel: {
      description: "HTML свойство обработчик события"
    },
    onSubmit: {
      description: "HTML свойство обработчик события"
    },
    offsetTop: {
      description: "Отступ сверху"
    },
    width: {
      description: "Ширина модального окна"
    },
    loading: {
      description: "Индикатор загрузки"
    },
    onlyCancellable: {
      description: "Нужен чтобы крестик не нажимал кнопку Закрыть, а просто закрывал окно"
    },
    formValid: {
      description: "Кнопка заблокирована если валидация не прошла"
    },
    children: {
      description: "React children"
    }
  }
}

const Template = (args) => <ModalWindow {...args} />

export const Default = Template.bind({})
Default.args = {
  dialogueParams: {},
  offsetTop: "15vh",
  width: "440px",
  onlyCancellable: true,
}
