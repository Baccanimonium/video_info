import React from "react"
import PropTypes from "prop-types"

const ButtonsForHiddenText = ({ showText }) => (
  <div className="dragging display-i-b cursor">
    { !showText ? "Less" : "Read more" }
  </div>
)

ButtonsForHiddenText.propTypes = {
  showText: PropTypes.bool
}

ButtonsForHiddenText.defaultProps = {
  showText: true
}

export default ButtonsForHiddenText
