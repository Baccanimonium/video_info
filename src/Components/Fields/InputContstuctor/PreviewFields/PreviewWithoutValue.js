import React from "react"
import PropTypes from "prop-types"

const PreviewWithoutValue = ({ value }) => (
  <div />
)

PreviewWithoutValue.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PreviewWithoutValue
