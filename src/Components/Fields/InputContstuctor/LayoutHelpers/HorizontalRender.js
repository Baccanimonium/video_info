import React from "react"
import PropTypes from "prop-types"
import { StyleChildren } from "./styles"

const HorizontalRender = ({ children, button, leftIndent, rightIndent }) => (
  <div className="flex">
    <StyleChildren leftIndent={leftIndent} rightIndent={rightIndent}>
      {children}
    </StyleChildren>
    <div>{button}</div>
  </div>
)

HorizontalRender.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  button: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  leftIndent: PropTypes.bool,
  rightIndent: PropTypes.bool,
}

HorizontalRender.defaultProps = {
  leftIndent: true
}

export default HorizontalRender
