import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { FooterButton, FooterLink, FooterContainer } from "./styles"


const TabFooter = ({ disabled, buttons, parentUrl }) => {
  const ButtonComponent = disabled ? FooterButton : FooterLink
  return (
    <FooterContainer className="display-flex j-c-space-between bg-color-white">
      <div className="button-block-container display-flex">
        {useMemo(() => buttons.map(({ path, text }) => (
          <ButtonComponent
            disabled={disabled}
            key={text}
            type="button"
            className="btn width-midi bg-color-greyDarken color-white m-r-3"
            to={`${parentUrl}${path}`}
          >
            {text}
          </ButtonComponent>
        )), [buttons, disabled, parentUrl])}
      </div>
    </FooterContainer>
  )
}

TabFooter.propTypes = {
  buttons: PropTypes.array.isRequired,
  parentUrl: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

export default TabFooter
