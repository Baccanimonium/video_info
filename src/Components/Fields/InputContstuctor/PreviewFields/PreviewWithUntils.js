import React from "react"
import PropTypes from "prop-types"

const PreviewWithUntils = ({ value, units }) => (
  <div>
    {value} {units}
  </div>
)

PreviewWithUntils.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  units: PropTypes.string,
}

export default PreviewWithUntils
