import styled from "styled-components"

export const BoxContainer = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 1px solid var(--border-color-input);
  position: relative;
`

export const Button = styled.div`
  transition-property: background-color, border-color, transform;
  transition-timing-function: linear;
  transition-duration: 150ms;
  background-color: var(--check-box-checked-bg);
  border-radius: 50%;
  transform: ${props => props.checked ? "scale(1)" : "scale(0)"};
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
`
