import React from "react"
import TipsOverlayComponent from "@/Components/TipsHelp/TipsOverlayComponent"
import useOpenTip from "./index"

export default {
  title: "Core/Hooks/useOpenTip",
  component: useOpenTip,
  argTypes: {
  }
}

// eslint-disable-next-line react/prop-types
const Template = () => {
  const { event, showTips, closeTips } = useOpenTip()
  return (
    <div>
      Хук имеет две функции для открытия типсы. Использовать на компоненте или html-тэге,
      на которых будет открываться типса. А event передать в компонент TipsOverlayComponent.
      <div
        onMouseEnter={showTips}
        onMouseLeave={closeTips}
        className="m-t-20"
      >
        Icon
      </div>
      <TipsOverlayComponent
        tipsText="Text"
        tipsTitle="Title"
        event={event}
      />
    </div>
  )
}

export const Default = Template.bind({})
