import React from "react"
import OverlayBackground from "./index"

export default {
  title: "Components/Layout/OverlayBackground",
  component: OverlayBackground,
}

const Template = (args) => (
  <div>
    Задний фон для фильтров и модальных окон
    <OverlayBackground {...args} />
  </div>
)

export const Default = Template.bind({})
