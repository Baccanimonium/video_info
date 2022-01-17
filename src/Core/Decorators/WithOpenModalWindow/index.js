import React from "react"
import useOpenModalWindow from "@/Core/Hooks/useOpenModalWindow"

export default Component => React.forwardRef((props, ref) => (
  <Component
    ref={ref}
    {...props}
    openModalWindow={useOpenModalWindow()}
  />
))
