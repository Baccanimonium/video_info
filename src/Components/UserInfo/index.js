import React, { useCallback, useMemo, useState } from "react"
import UserPortrait from "@/Components/UserPortraitStyle"
import { useRecoilState, useRecoilValue } from "recoil"
import { tokenAtom} from "@/Store/userObject"
import Avatar from "@/Components/Avatar"
import WithCloseWindow from "@/Core/RenderProps/withCloseWindow"
import Icon from "@/Components/Icon"
import RenderOverlayMenu from "@/Components/OverlayMenu/RenderOverlayMenu"
import { logoutMenu } from "./icon/logoutMenu"
import { UserOverlay } from "./styles"
import {useNavigate} from "react-router-dom";
import {ContextMenuStyle} from "@/Components/ContextMenu";

const AvatarPortrait = UserPortrait.withComponent(Avatar)
const LogoutIcon = Icon(logoutMenu)

const UserInfo = () => {
  const { 1: removeToken } = useRecoilState(tokenAtom)
  const [isMenuOpen, setOpenMenuState] = useState(false)
  const closeMenu = useCallback(() => { setOpenMenuState(false) }, [])
  const toggleMenuState = useCallback(() => setOpenMenuState(!isMenuOpen), [isMenuOpen])
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
    <RenderOverlayMenu
      onOpenOverlayMenu={toggleMenuState}
      renderOverlayMenu={isMenuOpen}
      MenuComponent={UserOverlay}
    >
      {(overlayBoundRef, onOpenOverlayMenu, OverlayMenu) => (
        <WithCloseWindow closeWindow={closeMenu} byKey={isMenuOpen}>
          {(onMouseDown) => (
            <button
              ref={overlayBoundRef}
              type="button"
              className="flex items-center m-l-25"
              onMouseDown={onMouseDown}
              onClick={onOpenOverlayMenu}
            >
              <AvatarPortrait className="m-r-15" />
              <span className="fs-14 m-r-15 fw700">
                Иван И
              </span>
              <LogoutIcon
                onClick={() => navigate("/login")}
              />
              {isMenuOpen && (
              <OverlayMenu className="flex items-center p-t-5 p-b-5 fd-column">
                <ContextMenuStyle>
                  {menuItems.map(({ Component, Icon, label, ...props }) => (
                    <Component
                      key={label}
                      className="flex items-center p-t-10 p-b-10 p-r-15 p-l-15 w-100 item"
                      {...props}
                    >
                      <Icon
                        className="color-greyDarken m-r-10 icon"
                        size="14"
                      />
                      <span>{label}</span>
                    </Component>
                  ))}
                </ContextMenuStyle>
              </OverlayMenu>
              )}
            </button>
          )}
        </WithCloseWindow>
      )}
    </RenderOverlayMenu>
  )
}

export default UserInfo
