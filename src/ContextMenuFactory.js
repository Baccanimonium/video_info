/* eslint-disable react/no-array-index-key */
import React, { useCallback, useMemo, useRef } from "react"
import styled from "styled-components"
import { useRecoilState } from "recoil"
import { contextMenuAtom } from "@/Store/contextMenu"
import OverlayMenu from "@/Components/OverlayMenu"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import { useWatch } from "@/Utils/hooks/useWatch"

const ContextMenu = styled(OverlayMenu)`
  background: var(--color-white);
  max-width: 350px;
  z-index: 20000;
  padding-top: 5px;
  padding-bottom: 5px;
`

const StyleContextMenuButton = styled.button`
  &:hover {
    color: var(--color-gold);
  }
`

export const defaultContextMenuButton = ({ title, onSubmit, className }) => (
  <StyleContextMenuButton
    type="button"
    key={title}
    className={className}
    onMouseDown={onSubmit}
  >
    {title}
  </StyleContextMenuButton>
)

const ContextMenuFactory = () => {
  const [contextMenuState, setModalsState] = useRecoilState(contextMenuAtom)
  const refPrevContextMenuConfig = useRef(contextMenuState)
  const renderContextMenu = contextMenuState && contextMenuState.actions

  const closeContextMenu = useCallback(({ target } = {}) => {
    // не нужно закрывать если мы нажали на кнопку инициатор открытия, нужно чтобы избежать мигания контекстного меню
    if (!refPrevContextMenuConfig.current.position || target !== refPrevContextMenuConfig.current.position.event.target) {
      setModalsState(null)
    }
  }, [setModalsState])

  useWatch(contextMenuState, (nextVal, prevVal) => {
    if (prevVal) {
      if (nextVal && nextVal.contextMenuId !== prevVal.contextMenuId) {
        const { position: { target, eType } = {} } = nextVal
        const { position: { target: prevTarget } = {} } = prevVal
        // закрываем контекстное меню если мы нажали на ту же самую кнопку, нужно чтобы избежать мигания контекстного меню
        if (!prevTarget || (prevTarget === target && eType === "click")) {
          closeContextMenu()
        }
      }
      prevVal.closeContextMenu()
    }
    refPrevContextMenuConfig.current = nextVal
  })

  const withSubmitInterceptorsActions = useMemo(() => contextMenuState && contextMenuState.actions
    ? contextMenuState.actions.map((a) => a.onSubmit ? {
      ...a,
      onSubmit: async (...args) => {
        const data = await a.onSubmit(...args)
        closeContextMenu()
        return data
      }
    }
      : a)
    : [], [closeContextMenu, contextMenuState])

  return renderContextMenu ? (
    <WithCloseWindow
      closeWindow={closeContextMenu}
      byKey={renderContextMenu}
    >
      {(onMouseDown) => renderContextMenu && (
        <ContextMenu
          {...contextMenuState.settings}
          {...contextMenuState.position}
          onMouseDown={onMouseDown}
        >
          {withSubmitInterceptorsActions.map(({
            component: Item = defaultContextMenuButton,
            componentProps,
            children: Ch,
            childrenData,
            ...props
          }, i) => (
            <Item
              className="ta-left p-t-5 p-b-5 p-l-10 p-r-10 w-100"
              key={i}
              {...componentProps}
              {...props}
              onClose={closeContextMenu}
            >
              {Ch && <Ch {...childrenData} />}
            </Item>
          ))}
        </ContextMenu>
      )}
    </WithCloseWindow>
  ) : null
}

export default ContextMenuFactory
