import React from "react"
import Avatar from "@/Components/Avatar"
import RoundButtonStyle from "./index"

export default {
  title: "Components/Layout/RoundButtonStyle",
  component: RoundButtonStyle,
}

const Template = (args) => (
  <div>
    Стиль для круглой кнопки.
    <div className="p-t-20">
      <RoundButtonStyle>
        <Avatar style={{ width: "30px", height: "30px" }} />
      </RoundButtonStyle>
    </div>
  </div>
)

export const Default = Template.bind({})
