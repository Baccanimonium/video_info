import React, { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { LeftMenuContainer, LeftMenuLogo, LeftMenuItem, ToggleToolbar, ListTile,
  Copyright, OpenMenuItem, TextLogo, MenuLink, WrapperMenuLink } from "./styles"
import NavigationButton from "../NavigationButton";
import {RouteContext} from "../../constants"

const NavigationDrawer = ({ routes }) => {
  const { onOpenNewTab } = useContext(RouteContext)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <OpenMenuItem hideToolbar={hideToolbar} className="display-flex a-i-center">
          <TextLogo>VideoInfo</TextLogo>
        </OpenMenuItem>
      </LeftMenuLogo>
      {routes.map(({ name, style, route, picture: Picture }) => (
        <LeftMenuItem
          key={name}
          style={style}
          // current={currentIdObject === ID_OBJ_OBJ}
        >
          <NavigationButton to={route} name={name} className="w-100 h-100" onClick={onOpenNewTab}>
            <ListTile hideToolbar={hideToolbar}>
              <div className="icon-container transition-icon cursor a-i-center j-c-center display-flex">
                <Picture />
              </div>
              {!hideToolbar && (
                <OpenMenuItem hideToolbar={hideToolbar} className="display-flex a-i-center">
                  <div className="text-menu font-weight-bold capitalize">{name}</div>
                </OpenMenuItem>
              )}
            </ListTile>
          </NavigationButton>
        </LeftMenuItem>
      ))}
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
        className={`display-flex a-i-center j-c-center bg-color-black ${toggleArrow}`}
        onClick={toggleToolbar}
      >
        <img className={`icon-arrow ${iconArrowStyle}`} src="/assets/icon-arrow/arrow-right-white.svg" alt="" />
      </ToggleToolbar>
    </LeftMenuContainer>
  )
}
NavigationDrawer.propTypes = {
  routes: PropTypes.array.isRequired,
}

export default React.memo(NavigationDrawer)
