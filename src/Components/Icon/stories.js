import React from "react"

import { basketTrash } from "@/Icons/basketTrash"
import Icon from "./index"

const TrashIcon = Icon(basketTrash)

export default {
  title: "Components/Layout/Icon",
  component: Icon,
  argTypes: {
    style: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    className: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    children: {
      description: ""
    },
    size: {
      description: "Размер иконки"
    },
    title: {
      description: "Текст, который будет во всплывающем окне при наведении на иконку "
    },
    onKeyUp: {
      description: "HTML свойство обработчик события",
    },
    onKeyDown: {
      description: "HTML свойство обработчик события",
    },
    onClick: {
      description: "HTML свойство обработчик события",
    },
    onMouseEnter: {
      description: "HTML свойство обработчик события",
    },
    onMouseLeave: {
      description: "HTML свойство обработчик события",
    },
  }
}

const Template = (args) => <TrashIcon {...args} title="TrashIcon" size="24">children`s Icon</TrashIcon>

export const Default = Template.bind({})
Default.args = {
  size: 16,
  className: ""
}
