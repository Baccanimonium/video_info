import PropTypes from "prop-types"

const DefaultPreview = ({ value }) => value

DefaultPreview.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DefaultPreview
