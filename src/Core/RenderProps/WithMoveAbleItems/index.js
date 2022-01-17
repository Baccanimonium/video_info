import { useCallback, useState } from "react"
import PropTypes from "prop-types"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"

const WithMoveAbleItems = ({ value, onInput, children }) => {
  const [tempValue, setTempValue] = useState()
  const [draggedIndex, setDraggedIndex] = useState()

  return children({
    isItemMoving: draggedIndex !== undefined,
    value: tempValue || value,
    onDragStart: useCallback((i) => () => {
      setDraggedIndex(i)
      setTempValue(value)
    }, [value]),
    onDragEnd: useCallback(() => {
      if (tempValue !== value) {
        onInput(tempValue)
      }
      setTempValue(undefined)
      setDraggedIndex(undefined)
    }, [onInput, tempValue, value]),
    onDragEnter: useCallback((index) => () => {
      if (index !== draggedIndex) {
        const nextData = [...tempValue]
        nextData.splice(index, 0, nextData.splice(draggedIndex, 1)[0])
        setTempValue(nextData)
        setDraggedIndex(index)
      }
    }, [draggedIndex, tempValue]),
    onDragOverDeleteContainer: useCallback((e) => e.preventDefault(), []),
    onDropAndDelete: useCallback(() => {
      const nextVal = PureDeleteItems(tempValue, draggedIndex)
      setTempValue(nextVal)
      onInput(nextVal)
    }, [draggedIndex, onInput, tempValue])
  })
}

WithMoveAbleItems.propTypes = {
  onInput: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  value: PropTypes.array
}

export default WithMoveAbleItems
