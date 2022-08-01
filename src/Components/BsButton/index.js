/* eslint-disable react/button-has-type */
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { preloader } from "@/Icons/preloader"

import Icon from "@/Components/Icon"

const PreloaderIcon = Icon(preloader)

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

// TODO: revert transition

const BsButton = ({
  className, loading, children, classNameChildren, disabled, onClick, onMouseDown, onMouseUp, type, style, name, id
}) => (
  <button
    className={`${className} relative`}
    disabled={disabled}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    type={type}
    style={style}
    name={name}
    id={id}
  >
    {loading && (
      <LoaderContainer className="flex j-c-center items-center no-pointer-events">
        <PreloaderIcon size="25" className="color-lightGold" />
      </LoaderContainer>
    )}

    <span
      className={`${loading ? "opacity-0" : ""} ${classNameChildren} button-children-container`}
    >
      {children}
    </span>
  </button>
)

BsButton.propTypes = {
  loading: PropTypes.bool,
  className: PropTypes.string,
  // TODO выпилить должно быть реализовано через стайл компоненты
  classNameChildren: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
}

BsButton.defaultProps = {
  className: "",
  classNameChildren: "",
  type: "button"
}

export default BsButton
