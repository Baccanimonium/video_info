import styled from "styled-components"
import { toggleIndicator } from "@/Icons/toggleIndicator"
import Icon from "@/Components/Icon"

const ToggleIndicatorIcon = Icon(toggleIndicator)

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-grey-darken-2);
  border-radius: 4px;
  padding: 8px 14px;
  color: var(--color-white);
  ${props => props.showFilterList
  && "margin-bottom: 15px;" +
          "  border-bottom: var(--separator-width) solid var(--separator-color);"}
 `

export const ToggleIndicatorIconStyle = styled(ToggleIndicatorIcon)`
  transform: ${props => props.showFilterList ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 500ms ease-in-out;
  margin-left: auto;
  color: var(--color-white);
  cursor: pointer;
  ${props => !props.showToggleIndicator && "display: none"}
`
