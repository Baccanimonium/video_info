import React, { useContext } from "react"
import { ScrollContainer } from "@/constants"
// TODO используется только в селекте, потенциально мертвый функционал
export default Component => React.forwardRef((props, ref) => (
  <Component
    {...props}
    refScrollContainer={useContext(ScrollContainer)}
    ref={ref}
  />
))
