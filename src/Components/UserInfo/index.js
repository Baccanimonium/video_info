import React, {useCallback, useMemo, useState} from "react"
import UserPortrait from "@/Components/UserPortraitStyle"
import {useRecoilState} from "recoil"
import {tokenAtom} from "@/Store/userObject"
import Avatar from "@/Components/Avatar"
import Icon from "@/component_ocean/Components/Icon"
import {logoutMenu} from "./icon/logoutMenu"
import {useNavigate} from "react-router-dom";
import {ThemedContextMenu} from "@/Components/ContextMenus";

const AvatarPortrait = UserPortrait.withComponent(Avatar)

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
      Icon: (props) => <Icon {...props} icon={logoutMenu}/>,
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
      <span className="fs-14 mr-4 font-bold">
        Иван И
      </span>
      <Icon
        icon={logoutMenu}
        onClick={() => navigate("/login")}
      />
      {isMenuOpen && (
        <ThemedContextMenu
          className="flex items-center pt-1.5 pb-1.5 flex-col"
          onClose={closeMenu}
          width={200}
        >
          {menuItems.map(({Component, Icon, label, ...props}) => (
            <Component
              key={label}
              className="flex items-center py-1.5 w-full"
              {...props}
            >
              <Icon
                className="color-greyDarken mr-2.5"
                size="14"
              />
              <span>{label}</span>
            </Component>
          ))}
        </ThemedContextMenu>
      )}
    </button>
  )
}

export default UserInfo
