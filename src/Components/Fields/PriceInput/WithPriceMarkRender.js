import React from "react"
import { RubIcon } from "./index"

const WithCurrencySinghRenderer = (Component) => props => (
  <div className="display-flex j-c-space-between h-100">
    <Component {...props} />
    <RubIcon
      className="m-t-3 m-l-5 p-r-5"
      size="10"
    />
  </div>
)

export default WithCurrencySinghRenderer
