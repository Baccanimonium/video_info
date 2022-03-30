import React from "react"
import UserPortraitStyle from "./index"

export default {
  title: "Components/Layout/UserPortraitStyle",
  component: UserPortraitStyle,
}

const Template = (args) => (
  <div>
    Делает картинку круглой
    <div className="p-t-20"><UserPortraitStyle {...args} src="/logo.png" /></div>
  </div>
)

export const Default = Template.bind({})
