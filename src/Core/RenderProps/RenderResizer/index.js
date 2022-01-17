import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import memoize from "lodash/memoize"
import PropTypes from "prop-types"
import RenderAutoScroll from "@/Core/RenderProps/RenderAutoScroll"
import { useWatch } from "@/Utils/hooks/useWatch"
import { useRecoilState } from "recoil"
import { cachedLocalStorageValue } from "@/Store/localStorageCache"

const InnerResizer = ({
  refContainer, onStartScroll, outerChildren, initialCord, minSize, defaultSize,
  pixelsAutoScrolled, id
}) => {
  const [itemSizeData, setItemSizeData] = useRecoilState(cachedLocalStorageValue(useMemo(() => `resized_filters_${id}`, [id])))
  const [resizedState, setResizedState] = useState(null)

  const refResizedState = useRef()

  useEffect(() => {
    refResizedState.current = resizedState
  }, [resizedState])

  const startResize = useCallback((index) => (e) => {
    const { current: { _container: scrollEl } } = refContainer
    document.body.style.cursor = "row-resize"
    const newTempData = [...itemSizeData || []]
    newTempData[index] = scrollEl.children[index].clientHeight
    setResizedState({
      tempData: newTempData, resizedIndex: index, initContainerScrollTop: scrollEl.scrollTop, initSize: newTempData[index]
    })

    onStartScroll(e)
  }, [itemSizeData, onStartScroll, refContainer])

  const calcSizes = useCallback((e) => {
    const { current: { _container: scrollEl } } = refContainer
    const { initContainerScrollTop, tempData, resizedIndex, initSize } = refResizedState.current
    const scrollTopDIff = scrollEl.scrollTop - initContainerScrollTop
    const newData = [...tempData]
    const newSize = initSize + e.pageY - initialCord + scrollTopDIff
    newData[resizedIndex] = newSize > minSize ? newSize : newData[resizedIndex]
    setResizedState({ ...refResizedState.current, tempData: newData })
  }, [initialCord, minSize, refContainer])

  const onMouseUp = useCallback(() => {
    document.body.style.cursor = ""
    setItemSizeData(refResizedState.current.tempData)
    setResizedState(null)
  }, [setItemSizeData])

  useWatch(pixelsAutoScrolled, (nextVal, prevVal) => {
    if (prevVal && refResizedState.current) {
      const { tempData, resizedIndex } = refResizedState.current
      const newData = [...tempData]
      const updatedData = newData[resizedIndex]
      const newSize = updatedData + pixelsAutoScrolled
      newData[resizedIndex] = newSize > minSize ? newSize : updatedData
      setResizedState({ ...refResizedState.current, tempData: newData })
    }
  }, [minSize, pixelsAutoScrolled])

  useEffect(() => {
    if (initialCord) {
      document.addEventListener("mousemove", calcSizes)
      document.addEventListener("mouseup", onMouseUp)
      return () => {
        document.removeEventListener("mousemove", calcSizes)
        document.removeEventListener("mouseup", onMouseUp)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCord])

  const currentElementSizes = resizedState ? resizedState.tempData : itemSizeData

  return outerChildren({
    refContainer,
    onStartResize: startResize,
    getElementSize: useMemo(
      () => ((sizes = []) => memoize((index) => ({ maxHeight: `${sizes[index] || defaultSize}px` })))(currentElementSizes),
      [defaultSize, currentElementSizes]
    )
  })
}

InnerResizer.defaultProps = {
  minSize: 250,
  defaultSize: 250
}

const RenderResizer = ({ children, id }) => (
  <RenderAutoScroll>
    {(props) => (
      <InnerResizer
        {...props}
        id={id}
        outerChildren={children}
      />
    )}
  </RenderAutoScroll>
)

RenderResizer.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default RenderResizer
