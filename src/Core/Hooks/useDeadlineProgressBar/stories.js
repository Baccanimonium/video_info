import React from "react"
import dayjs from "dayjs"
import { PRESENT_DATE_FORMAT } from "@/constants"
import useDeadlineProgressBar from "./index"

export default {
  title: "Core/Hooks/useDeadlineProgressBar",
  component: useDeadlineProgressBar,
  argTypes: {
    creationDate: {
      type: { name: "string", required: true },
      description: `Дата начала отсчёта принимает дату в формате ${PRESENT_DATE_FORMAT}`,
    },
    deadlineDate: {
      type: { name: "string", required: true },
      description: `Дата конца отсчёта принимает дату в формате ${PRESENT_DATE_FORMAT}`,
    }
  }
}

// eslint-disable-next-line react/prop-types
const Template = ({ creationDate, deadlineDate }) => (
  <div
    style={{
      ...useDeadlineProgressBar(creationDate, deadlineDate),
      height: "5px"
    }}
  />
)

export const Default = Template.bind({})
Default.args = { creationDate: dayjs().add(-1, "day"), deadlineDate: dayjs().add(1, "day") }

export const OutOfRange = Template.bind({})
OutOfRange.args = { creationDate: dayjs().add(-2, "day"), deadlineDate: dayjs().add(-1, "day") }

export const JustBeforeEnd = Template.bind({})
JustBeforeEnd.args = { creationDate: dayjs().add(-7, "day"), deadlineDate: dayjs().add(1, "day") }
