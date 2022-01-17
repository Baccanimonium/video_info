import React from "react"
import { userStateSelector } from "@/Store/userObject"
import { useRecoilValue } from "recoil"

export default Component => React.forwardRef((props, ref) => (
  <Component
    ref={ref}
    {...props}
    currentUser={useRecoilValue(userStateSelector)}
  />
))
