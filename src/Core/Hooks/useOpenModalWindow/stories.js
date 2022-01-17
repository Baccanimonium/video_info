import React from "react"
import useOpenModalWindow from "./index"

export default {
  title: "Core/Hooks/useOpenModalWindow",
  component: useOpenModalWindow,
}
const Template = () => {
  const openModalWindow = useOpenModalWindow()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        style={{
          background: "gray",
          width: "150px",
          height: "25px"
        }}
        type="button"
        onClick={() => openModalWindow({
          dialogueParams: {
            title: "Delete filter",
            submitLabel: "Delete filter",
            reverseButtonPosition: true
          },
          message: "Do you really want to delete this filter?",
          onSubmit: () => {
            console.log("success")
          }
        })}
      >
        open modal window
      </button>
      <a
        href="?path=/story/guides-открытие-модального-окна--page"
        style={{ color: "#1EA7FD" }}
      >
        Гайд открытия модального кона
      </a>
    </div>
  )
}

export const Default = Template.bind({})
