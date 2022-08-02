import styled, {css} from "styled-components"
import { RemoveIcon } from "@/Components/CommonIcons"

export const TabBarContainer = styled.div`
  height: 40px;
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.1);
`
export const TabButton = styled.button`
  width: 160px;
  min-width: 100px;
  padding-left: 15px;
  padding-right: 13px;
  color: var(--color-white);
  transition-property: color, background-color;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
  margin-right: ${props => props.notLast ? "2px" : "0px"};
  ${({ active }) => active
          ? css`
      background: var(--color-light-gold-1);
    `
          : css`
      background: var(--color-grey-darken-0);
      &:hover {
        color: var(--color-black-darken-1);
      }
  `};
`

export const StyleRemoveIcon = styled(RemoveIcon)`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
  }
`

export const AlertAndUserInfoContainer = styled.div`
  min-width: 366px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
