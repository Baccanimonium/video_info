import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const FooterContainer = styled.div`
  padding-left: 4px;
  transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-top: 3px solid var(--color-grey-Light-4);
  position: relative;
`

export const FooterLink = styled(NavLink)`
  text-transform: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 10px;
  height: auto;
  &:hover {
    color: var(--color-black-darken-1);
  }
  &:hover:not(.active) {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: var(--color-grey-darken-0);
  }
  &.active {
    background: var(--color-grey);
    color: var(--color-white);
    &:hover {
      color: var(--color-black-darken-1);
    }
  }
  &.disabled:not(.active) {
    background-color: var(--color-grey-Light-4);
    color: var(--color-grey-darken-0);
    pointer-events: none;
  }
`
export const FooterButton = FooterLink.withComponent("button")
