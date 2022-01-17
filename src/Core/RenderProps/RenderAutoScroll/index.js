import { useCallback, useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import debounce from "@/Utils/debounce"

let scrollInterval

const RenderAutoScroll = ({ children }) => {
  const [initialCord, setInitialCord] = useState(0)
  const [pixelsAutoScrolled, setPixelsAutoScrolled] = useState(0)
  const refAutoScrolledPixels = useRef(0)
  useEffect(() => {
    refAutoScrolledPixels.current = pixelsAutoScrolled
  }, [pixelsAutoScrolled])

  const refContainer = useRef()
  const onStartScroll = useCallback((e) => setInitialCord(e.pageY), [])
  const handleDocumentMouseMove = useCallback(debounce(({ pageY }) => {
    const { current: { _container: scrollEl } } = refContainer
    const { top, bottom } = scrollEl.getBoundingClientRect()
    clearInterval(scrollInterval)
    let multiplicator
    if (bottom - pageY <= 10) {
      multiplicator = 8
    } else if (pageY - top <= 10) {
      multiplicator = -8
    } else {
      multiplicator = 0
    }
    if (multiplicator) {
      scrollInterval = setInterval(() => {
        window.requestAnimationFrame(() => {
          scrollEl.scrollTop += multiplicator
          setPixelsAutoScrolled(refAutoScrolledPixels.current += multiplicator)
        })
      }, 20)
    }
  }, 3), [])

  const handleDocumentMouseUp = useCallback(() => {
    setInitialCord(undefined)
    setPixelsAutoScrolled(0)
    clearInterval(scrollInterval)
  }, [])

  useEffect(() => {
    if (initialCord) {
      document.addEventListener("mousemove", handleDocumentMouseMove)
      document.addEventListener("dragover", handleDocumentMouseMove)
      document.addEventListener("mouseup", handleDocumentMouseUp)
      document.addEventListener("dragend", handleDocumentMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleDocumentMouseMove)
        document.removeEventListener("dragover", handleDocumentMouseMove)
        document.removeEventListener("mouseup", handleDocumentMouseUp)
        document.removeEventListener("dragend", handleDocumentMouseUp)
      }
    }
  }, [handleDocumentMouseMove, handleDocumentMouseUp, initialCord])
  return children({ refContainer, onStartScroll, initialCord, pixelsAutoScrolled })
}

RenderAutoScroll.propTypes = {
  children: PropTypes.func.isRequired,
}

export default RenderAutoScroll
