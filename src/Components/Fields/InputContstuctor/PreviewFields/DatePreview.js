import React, { useMemo } from "react"
import PropTypes from "prop-types"
import DefaultPreview from "./DefaultPreview"

const DatePreview = ({ value }) => (
  <DefaultPreview value={useMemo(() => Array.isArray(value) ? value.join(" - ") : value, [value])} />
)

DatePreview.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default DatePreview
