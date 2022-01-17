import React from "react"
import PropTypes from "prop-types"

const SelectPreview = ({ value }) => (
  <div className="display-flex flex-wrap">
    {value.map(({ SYS_NAME, ID }) => (
      <div
        key={ID}
        className="bg-color-greyLight-2 b-r-2 m-b-5 m-r-5 p-t-5 p-b-5 p-r-15 p-l-15"
      >
        { SYS_NAME }
      </div>
    ))}
  </div>
)

SelectPreview.propTypes = {
  value: PropTypes.array,
}

SelectPreview.defaultProps = {
  value: []
}
export default SelectPreview
