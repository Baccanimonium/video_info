import PropTypes from "prop-types"
import HideAndShowText from "@/Components/HideAndShowText/HideAndShowText"
import React from "react"

const TextAreaPreview = ({ value }) => (
  <HideAndShowText
    value={value}
    numberOfCharactersDisplayed={146}
  />
)

TextAreaPreview.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default TextAreaPreview
