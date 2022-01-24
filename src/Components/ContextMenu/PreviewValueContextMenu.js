import React from "react"
import PropTypes from "prop-types"
import { PreviewContainer } from "./styles"

const PreviewValueContextMenu = ({ title, text, textBtn, onEdit }) => (
  <PreviewContainer>
    {title && (
      <div className="p-b-15">
        { title }
      </div>
    )}
    <p className="m-b-5">
      { text }
    </p>
    <button
      type="button"
      className="color-lightGold cursor display-i-b"
      onMouseDown={onEdit}
    >
      { `Edit ${textBtn}` }
    </button>
  </PreviewContainer>
)

PreviewValueContextMenu.propTypes = {
  onEdit: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  textBtn: PropTypes.string,
}

PreviewValueContextMenu.defaultProps = {
  textBtn: "comment"
}

export default PreviewValueContextMenu
