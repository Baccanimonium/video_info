import React, { useEffect, useState, useContext, useCallback, useRef } from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { LeftMenuContainer, LeftMenuLogo, LeftMenuItem, ToggleToolbar, ListTile,
  OpenMenuItem, TextLogo, MenuLink, WrapperMenuLink } from "./styles"
import NavigationButton from "../NavigationButton";
import {RouteContext} from "../../constants"
import TipsOverlayComponent from "../TipsHelp/TipsOverlayComponent";

const NavigationDrawer = ({ routes }) => {
  const [tipsName, setTipsName]= useState("")
  const { onOpenNewTab } = useContext(RouteContext)
  const [leftWidth, setLeftWidth] = useState(60)
  const [toggleArrow, setToggleArrow] = useState()
  const [iconArrowStyle, setIconArrowStyle] = useState()
  const [getHidden, setGetHidden] = useState(localStorage.getItem("APP_NAVBAR"))
  const [event, setEvent] = useState()
  const timerRef = useRef()
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

  const showTips = useCallback((name) => (e) => {
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => { setEvent(e) }, 500)
    setTipsName(name)
  }, [])

  const closeTips = useCallback(() => {
    clearTimeout(timerRef.current)
    setEvent(undefined)
    setTipsName("")
  }, [setEvent])
  return (
    <LeftMenuContainer style={{ width: leftWidth }}>
      <LeftMenuLogo>
        <img src="/assets/toolbar-left/three-points.svg" alt="" />
        <OpenMenuItem hideToolbar={hideToolbar} className="display-flex a-i-center">
          <TextLogo>VideoInfo</TextLogo>
        </OpenMenuItem>
      </LeftMenuLogo>
      {routes.map(({ name, style, route, picture: Picture, size }) => (
        <LeftMenuItem
          key={name}
          style={style}
          onMouseEnter={showTips(name)}
          onMouseLeave={closeTips}
        >
          <NavigationButton to={route} name={name} className="w-100 h-100" onClick={onOpenNewTab}>
            <ListTile hideToolbar={hideToolbar}>
              <div className="icon-container transition-icon cursor a-i-center j-c-center display-flex">
                <Picture
                  size={size}
                />
              </div>
              {hideToolbar && tipsName === name && (
                <TipsOverlayComponent
                  tipsText={name}
                  event={event}
                />
              )}
              {!hideToolbar && (
                <OpenMenuItem hideToolbar={hideToolbar} className="display-flex a-i-center">
                  <div className="text-menu font-weight-bold">{name}</div>
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
        className={`display-flex a-i-center j-c-center bg-color-blackDarken-1 ${toggleArrow}`}
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
