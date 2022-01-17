import { useCallback, useState } from "react"
import PropTypes from "prop-types"

const WithDragItem = ({ children, onDragStart, onDragEnd }) => {
  const [isItemDragging, setDraggingStatus] = useState(false)
  return children({
    isItemDragging,
    onDragStart: useCallback((e) => {
      e.dataTransfer.setData("application/json", JSON.stringify(onDragStart(e)))
      e.dataTransfer.effectAllowed = "move"
      setDraggingStatus(true)
    }, [onDragStart]),
    onDragEnd: useCallback(() => {
      setDraggingStatus(false)
      onDragEnd()
    }, [onDragEnd])
  })
}

WithDragItem.propTypes = {
  children: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired,
}

export default WithDragItem
