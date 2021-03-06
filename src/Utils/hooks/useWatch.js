import { useEffect, useRef } from "react"

export function useWatch(nextVal, handler) {
  const prevVal = useRef()
  useEffect(() => {
    const r = handler(nextVal, prevVal.current)
    prevVal.current = nextVal
    return r
  }, [nextVal])
}
