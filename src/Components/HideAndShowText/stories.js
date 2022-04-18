import React from "react"

import ButtonsForHiddenText from "@/Components/BsButton/ButtonsForHiddenText"
import HideAndShowText from "./HideAndShowText"

export default {
  title: "Components/WorkWithText/HideAndShowText",
  component: HideAndShowText,
  argTypes: {
    value: {
      description: "Текст выводящийся в компоненте и ограниченный по колличеству символов."
        + " Если символы не влазят, то заканчиваются троеточием",
    },
    numberOfCharactersDisplayed: {
      description: "Колличество символов, которые можно выводить"
    },
    buttonComponent: {
      description: "Компонент кнопок, показывающие либо скрывающие текст"
    },
    className: {
      description: "пропс эквивалентый HTML аттрибуту"
    }
  }
}

const text = "SEO-анализ текста от Text.ru - это уникальный сервис, не имеющий аналогов. Возможность подсветки «воды», заспамленности и ключей в тексте позволяет сделать анализ текста интерактивным и легким для восприятия.\n"
  + "SEO-анализ текста включает в себя:\n"
  + "Счетчик символов, подсчет количества знаков и слов в тексте онлайн\n"
  + "С помощью данного онлайн-сервиса можно определить число слов в тексте, а также количество символов с пробелами и без них.\n"
  + "Определение ключей и семантического ядра текста"

const Template = (args) => <HideAndShowText {...args} value={text} />

export const Default = Template.bind({})
Default.args = {
  numberOfCharactersDisplayed: 360,
  buttonComponent: ButtonsForHiddenText
}
