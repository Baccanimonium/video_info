import React from "react"
import { ContextMenuForm } from "@/Components/Forms/StateFullForm"
import WithSubmitContainerHoc from "@/Core/Decorators/WithSubmitContainerHOC"
import BsInput from "@/Components/Fields/BsInput"
import useOpenContextMenu from "./index"

export default {
  title: "Core/Hooks/useOpenContextMenu",
  component: useOpenContextMenu,
  argTypes: {
    settings: {
      type: { name: "object", required: false },
      description: "Объект с настройками контекстного меню",
    },
    onOpenContextMenu: {
      type: { name: "function", required: true },
      description: "Функция генерации конфига содержимого в контекстном меню",
    },
  }
}
const Template = (args) => {
  const [onFilterRows] = useOpenContextMenu(args)
  return (
    <button
      style={{
        background: "gray",
        width: "150px",
        height: "25px"
      }}
      type="button"
      onClick={onFilterRows}
    >
      open context menu
    </button>
  )
}

export const Default = Template.bind({})

Default.args = {
  settings: { minSize: "200" },
  onOpenContextMenu: ({ applyContextMenu }) => applyContextMenu([
    {
      component: ContextMenuForm,
      onSubmit: ({ TEST }) => {
        console.log("Submit", TEST)
      },
      componentProps: {
        initPayload: { TEST: "TEST" },
        btnText: "Apply",
        fields: [
          {
            id: "TEST",
            label: "Test field",
            component: WithSubmitContainerHoc(BsInput),
          }
        ]
      }
    }
  ])
}
