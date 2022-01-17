import React from "react"
import PropTypes from "prop-types"

const PreviewFromArray = ({ value }) => (
  <div className="display-flex flex-wrap">
    {value.map(({ SYS_NAME, ID }, i) => (
      <div
        key={ID}
        className="text-uppercase font-weight-bold"
      >
        { SYS_NAME }
        {i !== value.length - 1 ? ", " : ""}
      </div>
    ))}
  </div>
)

PreviewFromArray.propTypes = {
  value: PropTypes.array,
}

PreviewFromArray.defaultProps = {
  value: []
}
export default PreviewFromArray
