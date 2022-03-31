import React from "react"

import Avatar from "./index"

export default {
  title: "Components/Misc/Avatar",
  component: Avatar,
  argTypes: {
    value: {
      description: "Объект с ключом и именем файла",
    },
    style: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
    className: {
      description: "пропс эквивалентый HTML аттрибуту",
    },
  }
}

const Template = (args) => <Avatar {...args} style={{ width: "150px", height: "150px" }} />

export const Default = Template.bind({})
Default.args = {
  value: {
    KEY: "FILE_SERVER/KFNRPQFXFYEWOSULOIZU/AETGNKAGBNTNFEZKIOLX/ADBC82552445B49187128FD2D590C929B2664D6A5AA6F0915B7D5C1C585099D2",
    VALUE: "pics-0006.jpg"
  }
}
