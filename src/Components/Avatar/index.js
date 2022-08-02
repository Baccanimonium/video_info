import React, { useMemo } from "react"
import PropTypes from "prop-types"

const Avatar = ({ value, className, style }) => {
  return (
    <div className="rounded-full overflow-hidden" style={style}>
      <img src="/default-user.png" alt="" className={`${className} w-100 h-full`} />
    </div>
  )
}

Avatar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.object,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  value: {},
  style: {},
  className: ""
}
export default Avatar
