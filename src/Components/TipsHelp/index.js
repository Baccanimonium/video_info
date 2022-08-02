import React, {useCallback, useRef, useState} from "react"
import PropTypes from "prop-types"
import {ThemedContextMenu} from "@/Components/ContextMenus";

const TipsOverlayComponent = ({children, width}) => {
  const [{title, text}, setTipsName] = useState({})
  const [event, setEvent] = useState(null)

  const timerRef = useRef(null)
  const renderTips = useCallback((state) => (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setEvent(e)
      setTipsName(state)
    }, 500)
  }, [])

  const destroyTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(null)
    setTipsName({})
  }, [setEvent])

  return (
    <>
      {event && <ThemedContextMenu
        onClose={destroyTips}
        width={width}
        className="color-blackDarken-1"
        target={event.target}
      >
        {title && (
          <div className="inline-block">
            {title}
          </div>
        )}
        <div>
          {text}
        </div>
      </ThemedContextMenu>}
      {children({renderTips, destroyTips})}
    </>
  )
}

TipsOverlayComponent.propTypes = {
  children: PropTypes.func.isRequired,
  width: PropTypes.number,
}

TipsOverlayComponent.defaultProps = {
  width: 220
};

export default TipsOverlayComponent
