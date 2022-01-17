/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react"
import PropTypes from "prop-types"
import ScrollBar from "@/Components/ScrollBar"
import { Wrapper, ToggleIndicatorIconStyle } from "./styles"

const WrapperFilter = ({
  children, slotTitle, style, onMouseDown, onClick, onMouseUp, className, showToggleIndicator }) => {
  const [showFilterList, updateShowFilterList] = useState(true)

  const toggleFilterList = () => {
    updateShowFilterList(!showFilterList)
  }

  return (
    <div
      className={`${className} separator-bot overflow-hidden display-flex fd-column`}
      style={style}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={onClick}
    >
      <Wrapper showFilterList={showFilterList}>
        {slotTitle}
        <ToggleIndicatorIconStyle
          showToggleIndicator={showToggleIndicator}
          showFilterList={showFilterList}
          onClick={toggleFilterList}
        />
      </Wrapper>
      {showFilterList && (
        <ScrollBar>
          {children}
        </ScrollBar>
      )}
    </div>
  )
}

WrapperFilter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  slotTitle: PropTypes.object,
  onMouseDown: PropTypes.func,
  onClick: PropTypes.func,
  onMouseUp: PropTypes.func,
  className: PropTypes.string,
  showToggleIndicator: PropTypes.bool,
}

WrapperFilter.defaultProps = {
  className: "",
  showToggleIndicator: true
}
export default WrapperFilter
