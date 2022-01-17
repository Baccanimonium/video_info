import React, { useCallback, useState } from "react"
import useResizeable from "./index"

export default {
  title: "Core/Hooks/useResizeable",
  component: useResizeable,
  argTypes: {
    handler: {
      type: { name: "function", required: true },
      description: "Функция обработчик изменения размеров окна",
    },
  }
}

const Template = () => {
  const [size, updateSize] = useState(window.innerWidth)
  useResizeable(useCallback(() => updateSize(window.innerWidth), []))
  return (
    <div>
      размер окна = <span className="m-l-5">{size}</span>
    </div>
  )
}

export const Default = Template.bind({})
