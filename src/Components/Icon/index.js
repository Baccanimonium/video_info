/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react"
import PropTypes from "prop-types"

const renderIcon = (children) => children.map((child, index) => {
  const { name: Icon, attribs, children = null } = child
  const { fill, stroke } = attribs
  const merge = fill === "none" && stroke
    ? { fill: "none", stroke: "currentColor" }
    : {
      fill: fill
        ? fill.indexOf("!") >= 0
          ? fill.slice(1)
          : fill === "white"
            ? "white"
            : "currentColor"
        : undefined,
      stroke: stroke
        ? stroke === "white"
          ? "white"
          : "currentColor"
        : undefined
    }
  return (
    <Icon
      key={index}
      {...attribs}
      fill={merge.fill}
      stroke={merge.stroke}
    >
      {children === null ? children : renderIcon(children)}
    </Icon>
  )
})

export default ({ children, viewBox, attribs = {} }) => {
  const Icon = ({ children: ch, size, title, className, style, onKeyUp, onKeyDown, onClick, onMouseEnter, onMouseLeave }) => (
    <div
      className={`${className} icon-container transition-icon j-c-center display-flex`}
      style={style}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        fill="currentColor"
        height={size}
        width={size}
        viewBox={viewBox}
        {...attribs}
      >
        {title && <title>{title}</title>}
        {renderIcon(children)}
      </svg>
      {ch}
    </div>
  )
  Icon.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onKeyUp: PropTypes.func,
    onKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }
  Icon.defaultProps = {
    size: 16,
    className: ""
  }
  return Icon
}
