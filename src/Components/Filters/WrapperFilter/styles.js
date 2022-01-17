import styled from "styled-components"
import { toggleIndicator } from "@/Icons/toggleIndicator"
import Icon from "@/Components/Icon"

const ToggleIndicatorIcon = Icon(toggleIndicator)

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${props => props.showFilterList
  && "padding: var(--padding-search-in-filter); margin-bottom: 15px;  border-bottom: var(--separator-width) solid var(--separator-color);"}
 `

export const ToggleIndicatorIconStyle = styled(ToggleIndicatorIcon)`
  transform: ${props => props.showFilterList ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 500ms ease-in-out;
  margin-left: auto;
  color: var(--color-grey);
  cursor: pointer;
  ${props => !props.showToggleIndicator && "display: none"}
`
