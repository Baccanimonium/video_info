import { useCallback, useContext, useRef } from "react"
import PropTypes from "prop-types"
import { useRecoilState } from "recoil"
import { contextMenuAtom } from "@/Store/contextMenu"
import { ScrollContainer } from "@/constants"
import uniqueId from "lodash/uniqueId"

const WithOpenContextMenu = ({ settings, onOpenContextMenu, onUpdateContextMenu, children, fieldRef }) => {
  const refContainer = useContext(ScrollContainer)
  const settingsRef = useRef(settings)
  const refMemoizedContextMenuConfig = useRef()
  settingsRef.current = settings
  const { 1: openContextMenu } = useRecoilState(contextMenuAtom)
  const handleUpdateContextMenu = useCallback(() => {
    if (refMemoizedContextMenuConfig.current) {
      const { config, modalWindow } = refMemoizedContextMenuConfig.current
      onUpdateContextMenu({
        applyContextMenu: (actions) => {
          openContextMenu({ ...config, actions })
          return modalWindow
        }
      })
    }
  }, [onUpdateContextMenu, openContextMenu])
  const handleOpenContextMenu = useCallback((e, ...args) => {
    e.preventDefault()
    return onOpenContextMenu({
      e,
      onUpdateContextMenu: handleUpdateContextMenu,
      applyContextMenu: (actions) => {
        let config
        const modalWindow = new Promise(resolve => {
          config = {
            contextMenuId: uniqueId(),
            settings: { axis: "y", minSize: "310px", ...settingsRef.current },
            position: {
              event: {
                pageX: e.pageX,
                pageY: e.pageY,
                target: e.target,
                type: e.type
              },
              refContainer,
              refTargetParent: fieldRef || e.target,
            },
            actions,
            closeContextMenu: resolve
          }
          openContextMenu(config)
        })
        refMemoizedContextMenuConfig.current = { modalWindow, config }
        return modalWindow
      }
    },
    ...args)
  }, [fieldRef, handleUpdateContextMenu, onOpenContextMenu, openContextMenu, refContainer])

  return children(handleOpenContextMenu, handleUpdateContextMenu)
}

WithOpenContextMenu.propTypes = {
  onOpenContextMenu: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  onUpdateContextMenu: PropTypes.func,
  settings: PropTypes.object,
}

export default WithOpenContextMenu
