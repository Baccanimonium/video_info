import React from "react"
import PropTypes from "prop-types"

const VerticalRender = ({ children, button }) => (
  <div className="flex fd-column a-i-flex-start">
    <div className="word-break-all">
      {children}
    </div>
    <div className="m-t-10">
      {button}
    </div>
  </div>
)

VerticalRender.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  button: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default VerticalRender
