/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"
import PropTypes from "prop-types"
import { Fon } from "./styles"

const OverlayBackground = ({ filterLocation, children, onClick, onKeyUp, onKeyDown, className }) => (
  <Fon filterLocation={filterLocation} className={className}>
    <div
      className="w-100 h-full"
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onClick={onClick}
    />
    {children}
  </Fon>
)

OverlayBackground.propTypes = {
  filterLocation: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default OverlayBackground
