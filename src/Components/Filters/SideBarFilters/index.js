/* eslint-disable react/no-array-index-key */
import React, { useCallback } from "react"
import PropTypes from "prop-types"
import OverlayBackground from "@/Components/OverlayBackground"
import Icon from "@/Components/Icon/index"
import { close } from "@/Icons/close"
import RenderResizer from "@/Core/RenderProps/RenderResizer"
import {
  FilterWrapper, FilterItemContainer, FilterHeader, WrapperBtn, StylePerfectScrollbar, ResizeButton
} from "./styles"

const CloseIcon = Icon(close)

const childrenWrapper = (onStartResize, getElementSize) => {
  let i = 0
  const wrapChildren = (s) => {
    if (Array.isArray(s)) {
      return s.map(wrapChildren)
    }
    const res = (
      <FilterItemContainer key={i} style={getElementSize(i)}>
        <ResizeButton onMouseDown={onStartResize(i)} />
        {s}
      </FilterItemContainer>
    )
    i++
    return res
  }
  return wrapChildren
}

const SideBarFilters = ({
  onClose, onSubmit, filtersChanged, autoClose, title, buttonTitle, filterLocation, children, buttons, className, id
}) => {
  const handleApply = useCallback(() => {
    onSubmit()
    autoClose && onClose()
  }, [autoClose, onClose, onSubmit])

  return (
    <OverlayBackground filterLocation={filterLocation} onClick={onClose} className={className}>
      <FilterWrapper>
        <FilterHeader className="separator-bot">
          <div className="w-100">{title}</div>
          <CloseIcon className="m-l-15" size="12" onClick={onClose} />
        </FilterHeader>
        <RenderResizer id={id}>
          {({ refContainer, onStartResize, getElementSize }) => {
            const wrapChildren = childrenWrapper(onStartResize, getElementSize)
            return (
              <StylePerfectScrollbar ref={refContainer}>
                {children.map(wrapChildren)}
              </StylePerfectScrollbar>
            )
          }}
        </RenderResizer>
        {filtersChanged && (
          <WrapperBtn>
            {buttons}
            <button
              className="golden btn width-midi text-uppercase"
              onClick={handleApply}
              type="button"
              id="FilterButton"
            >
              {buttonTitle}
            </button>
          </WrapperBtn>
        )}
      </FilterWrapper>
    </OverlayBackground>
  )
}

SideBarFilters.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  filtersChanged: PropTypes.bool,
  autoClose: PropTypes.bool,
  buttonTitle: PropTypes.string,
  filterLocation: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  buttons: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
}

SideBarFilters.defaultProps = {
  filtersChanged: true,
  autoClose: true,
  title: "filter",
  buttonTitle: "Применить",
  filterLocation: ""
}

export default SideBarFilters
