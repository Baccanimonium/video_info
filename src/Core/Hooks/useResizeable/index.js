import debounce from "@/Utils/debounce"
import { useEffect, useRef } from "react"

export default (handler) => {
  const debouncedHandler = debounce(handler, 5)
  const handlerRef = useRef(debouncedHandler)
  useEffect(() => {
    handlerRef.current()
    window.addEventListener("resize", handlerRef.current)
    return () => { window.removeEventListener("resize", handlerRef.current) }
  }, [])
}
