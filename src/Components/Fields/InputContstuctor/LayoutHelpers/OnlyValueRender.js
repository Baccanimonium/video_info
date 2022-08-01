import React from "react"
import PropTypes from "prop-types"

const OnlyValueRender = ({ button, value, children }) => (
  <div className="flex items-center j-c-space-between h-full flex-wrap">
    {Array.isArray(value) ? value.length > 0 : value && children}
    <div>
      {button}
    </div>
  </div>
)

OnlyValueRender.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  button: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number, PropTypes.object])
}

export default OnlyValueRender
