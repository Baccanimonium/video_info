import { useCallback, useRef, useState } from "react"

export default () => {
  const [event, setEvent] = useState()
  const timerRef = useRef()

  const showTips = useCallback((e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { setEvent(e) }, 500)
  }, [])

  const closeTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(undefined)
  }, [setEvent])
  return { event, showTips, closeTips }
}
