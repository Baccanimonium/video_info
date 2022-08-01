import React, { useCallback, useContext, useMemo, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ButtonWithTimer from "@/Components/ButtonWithTimer"
import ContextMenuButtonWithTimer from "@/Components/ButtonWithTimer/ContextMenuButtonWithTimer"
import BsButton from "@/Components/BsButton"
import Icon from "@/Components/Icon"
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu"
import { CustomnStyleContextMenu } from "@/Pages/Mediaplan/item/Pages/Periods/Components/CustomnStyleContextMenu"
import { DocumentBusinessProcessButtons } from "./index"
import { expandIcon } from "./icons/expanIcon"

const ExpandIcon = Icon(expandIcon)

const OpenContextMenuButton = styled.button`
  ${props => props.open && `
    background-color: var(--color-white)!important;
    color: var(--color-grey-darken-0)!important;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}
`

const contextMenuSettings = { renderTip: false, containerMargin: "0px", minSize: 250, sticky: true }

const DocumentBusinessButtons = ({ buttonGroupName, renderButtonLimit, customHandler = {} }) => {
  const [isContextMenuOpen, setContextMenuState] = useState(false)
  const { buttons, onChangeStatus, idButtonInWork } = useContext(DocumentBusinessProcessButtons)
  const { defaultButtons, dropDownButtons } = useMemo(() => {
    if (buttons[buttonGroupName]) {
      let normalizedButtons = Array.isArray(buttons[buttonGroupName]) ? [...buttons[buttonGroupName]] : [buttons[buttonGroupName]]
      normalizedButtons = normalizedButtons.map(item => {
        const { id, handler } = customHandler
        if (item.BTN_ID === id) {
          return { ...item, HANDLER: handler }
        } return item
      })
      if (renderButtonLimit) {
        return { defaultButtons: normalizedButtons.splice(0, renderButtonLimit), dropDownButtons: normalizedButtons }
      }
      return { defaultButtons: normalizedButtons }
    }
    return { defaultButtons: [] }
  }, [buttonGroupName, buttons, customHandler, renderButtonLimit])

  const openButtonsMenu = useCallback(async ({ applyContextMenu }) => {
    setContextMenuState(true)
    await applyContextMenu(dropDownButtons.map(({ BUTTON_NAME, STATUS_ONCLICK, POPUP, TIMER, DATE_STATUS }) => TIMER !== 0
      ? {
        component: ContextMenuButtonWithTimer,
        componentProps: {
          label: BUTTON_NAME,
          startTimerDate: DATE_STATUS,
          handlers: onChangeStatus(POPUP, STATUS_ONCLICK)
        }
      }
      : {
        title: BUTTON_NAME,
        onSubmit: onChangeStatus(POPUP, STATUS_ONCLICK),
        component: CustomnStyleContextMenu
      }))
    setContextMenuState(false)
  }, [dropDownButtons, onChangeStatus])

  return (
    <div className="flex items-center">
      {defaultButtons
        .map(({ BTN_ID, BUTTON_NAME, COLOR, HINT_TEXT, POPUP, STATUS_ONCLICK, TIMER, DATE_STATUS, HANDLER, disabled }, index) => {
          const ButtonComponent = TIMER !== 0 ? ButtonWithTimer : BsButton
          const loading = BTN_ID === idButtonInWork
          return (
            <ButtonComponent
              className={`btn width-midi ${index !== 0 ? "m-l-5" : ""} ${TIMER === 0 ? COLOR : ""}`}
              key={BTN_ID}
              id={BTN_ID}
              title={HINT_TEXT}
              disabled={loading || disabled}
              loading={loading}
              startTimerDate={DATE_STATUS}
              onClick={HANDLER || onChangeStatus(POPUP, STATUS_ONCLICK, BTN_ID)}
            >
              {BUTTON_NAME}
            </ButtonComponent>
          )
        })}
      {dropDownButtons && dropDownButtons.length > 0 && (
        <WithOpenContextMenu
          onOpenContextMenu={openButtonsMenu}
          settings={contextMenuSettings}
        >
          {(onOpenContextMenu) => (
            <OpenContextMenuButton
              type="button"
              disabled={dropDownButtons.some(({ disabled }) => disabled)}
              open={isContextMenuOpen}
              className={`m-l-5 btn  black-btn flex items-center j-c-center ${isContextMenuOpen ? "active" : ""}`}
              onClick={onOpenContextMenu}
            >
              <ExpandIcon className="pos-absolute no-pointer-events" />
            </OpenContextMenuButton>
          )}
        </WithOpenContextMenu>
      )}
    </div>
  )
}

DocumentBusinessButtons.propTypes = {
  customHandler: PropTypes.object,
  buttonGroupName: PropTypes.string.isRequired,
  renderButtonLimit: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DocumentBusinessButtons
