import React, {useCallback, useMemo, useState} from "react"
import UserPortrait from "@/Components/UserPortraitStyle"
import {useRecoilState} from "recoil"
import {tokenAtom} from "@/Store/userObject"
import Avatar from "@/Components/Avatar"
import ContextMenu from "@/component_ocean/Components/ContextMenu";
import Icon from "@/Components/Icon"
import {logoutMenu} from "./icon/logoutMenu"
import {useNavigate} from "react-router-dom";
import {ContextMenuStyle} from "@/Components/ContextMenu";

const AvatarPortrait = UserPortrait.withComponent(Avatar)
const LogoutIcon = Icon(logoutMenu)

const UserInfo = () => {
  const {1: removeToken} = useRecoilState(tokenAtom)
  const [isMenuOpen, setOpenMenuState] = useState(false)
  const closeMenu = useCallback(() => {
    setOpenMenuState(false)
  }, [])
  const toggleMenuState = useCallback(() => setOpenMenuState(true), [])
  const navigate = useNavigate();

  const menuItems = useMemo(() => [
    {
      Component: "button",
      Icon: LogoutIcon,
      label: "Log out",
      onClick: () => navigate("/login")
    }
  ], [removeToken])

  return (
    <button
      type="button"
      className="flex items-center ml-6"
      onClick={toggleMenuState}
    >
      <AvatarPortrait className="mr-4"/>
      <span className="fs-14 mr-4 fw700">
        Иван И
      </span>
      <LogoutIcon
        onClick={() => navigate("/login")}
      />
      {isMenuOpen && (
        <ContextMenuStyle
          className="flex items-center pt-1.5 pb-1.5 flex-col"
          onClose={closeMenu}
          width={200}
        >
          {menuItems.map(({Component, Icon, label, ...props}) => (
            <Component
              key={label}
              className="flex items-center pt-2.5 pb-2.5 pr-4 pl-4 w-full item"
              {...props}
            >
              <Icon
                className="color-greyDarken mr-2.5 icon"
                size="14"
              />
              <span>{label}</span>
            </Component>
          ))}
        </ContextMenuStyle>
      )}
    </button>
  )
}

export default UserInfo
