import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { LeftMenuContainer, LeftMenuLogo, LeftMenuItem, ToggleToolbar, ListTile,
  OpenMenuItem, TextLogo, MenuLink, WrapperMenuLink } from "./styles"
import NavigationButton from "../NavigationButton";
import TipsOverlayComponent from "../TipsHelp";
import "./styles.scss"

const NavigationDrawer = ({ routes, onOpenNewTab }) => {
  const [leftWidth, setLeftWidth] = useState(60)
  const [toggleArrow, setToggleArrow] = useState()
  const [iconArrowStyle, setIconArrowStyle] = useState()
  const [getHidden, setGetHidden] = useState(localStorage.getItem("APP_NAVBAR"))

  useEffect(() => {
    if (getHidden === "close") {
      setLeftWidth(60)
      setToggleArrow("default")
      setIconArrowStyle("default")
    } else {
      setLeftWidth(190)
      setToggleArrow("default-open")
      setIconArrowStyle("default-open")
    }
  }, [])
  useEffect(() => {
    setLeftWidth(getHidden === "close" ? 60 : 190)
  }, [getHidden])
  const hideToolbar = leftWidth === 60

  const toggleToolbar = () => {
    localStorage.setItem("APP_NAVBAR", getHidden === "close" ? "open" : "close")
    setToggleArrow(getHidden === "close" ? "open" : "close")
    setIconArrowStyle(getHidden === "close" ? "open" : "close")
    setGetHidden(localStorage.getItem("APP_NAVBAR"))
  }

  return (
    <LeftMenuContainer style={{ width: leftWidth }}>
      <LeftMenuLogo>
        <img src="/assets/toolbar-left/three-points.svg" alt="" />
        <OpenMenuItem hideToolbar={hideToolbar} className="flex items-center">
          <TextLogo>VideoInfo</TextLogo>
        </OpenMenuItem>
      </LeftMenuLogo>
      <TipsOverlayComponent
        tipsText={name}
        event={event}
      >
        {({renderTips, destroyTips}) => routes.map(({ name, style, route, picture: Picture, size }) => (
          <LeftMenuItem
            key={name}
            style={style}
            onMouseEnter={hideToolbar ? renderTips({text: name }) : null}
            onMouseLeave={destroyTips}
          >
            <NavigationButton to={`/tab${route}`} name={name} className="w-full h-full" onClick={onOpenNewTab}>
              <ListTile hideToolbar={hideToolbar}>
                <div className="icon-container items-center justify-center flex">
                  <Picture
                    size={size}
                  />
                </div>
                {!hideToolbar && (
                  <OpenMenuItem hideToolbar={hideToolbar} className="flex items-center">
                    <div className="text-menu font-bold">{name}</div>
                  </OpenMenuItem>
                )}
              </ListTile>
            </NavigationButton>
          </LeftMenuItem>
        ))}
      </TipsOverlayComponent>
      {!hideToolbar && (
        <WrapperMenuLink>
          <MenuLink>
            <NavLink to="/options" name="Опции">
              Дополнительныe опции
            </NavLink>
          </MenuLink>
          <MenuLink>
            <NavLink to="/options" name="Опции">
              Справочник
            </NavLink>
          </MenuLink>
          <MenuLink>
            <NavLink to="/options" name="Опции">
              Помощь
            </NavLink>
          </MenuLink>
        </WrapperMenuLink>
      )}
      <ToggleToolbar
        className={`flex items-center justify-center bg-color-blackDarken-1 ${toggleArrow}`}
        onClick={toggleToolbar}
      >
        <img className={`icon-arrow ${iconArrowStyle}`} src="/assets/icon-arrow/arrow-right-white.svg" alt="" />
      </ToggleToolbar>
    </LeftMenuContainer>
  )
}
NavigationDrawer.propTypes = {
  routes: PropTypes.array.isRequired,
  onOpenNewTab: PropTypes.func.isRequired,
}

export default React.memo(NavigationDrawer)
