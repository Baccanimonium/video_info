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
      className={`${className} ${showFilterList && `separator-bot`}  overflow-hidden display-flex fd-column m-b-15`}
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
