import { useEffect, useRef } from "react"

export default (variable) => {
  const varRef = useRef(variable)
  useEffect(() => {
    varRef.current = variable
  }, [variable])
  return varRef
}
