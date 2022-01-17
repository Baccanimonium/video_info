import React from "react"
import PropTypes from "prop-types"
import ScrollBar from "@/Components/ScrollBar"

const DefaultSelectedItemContainer = ({ children }) => (
  <ScrollBar className="p-r-10">
    {children}
  </ScrollBar>
)

DefaultSelectedItemContainer.propTypes = {

}

export default DefaultSelectedItemContainer
