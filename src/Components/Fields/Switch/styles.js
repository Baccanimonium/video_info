import styled from "styled-components"

export const SwitchBlock = styled.div`
  display: flex;
  align-items: center;
   --color-switch: ${props => props.errorSwitch ? "var(--pink)" : "var(--color-light-gold-1)"};
  color: var(--color-switch);
`

export const SwitchLabel = styled.div`
  position: relative;
  text-align: left;
  font-size: var(--font-size-switch);
  cursor: pointer;
`

export const ContainerSwitch = styled.div`
  border: 1px solid var(--switch-border-color);
  flex: 0 0 auto;
  width: 24px;
  height: 12px;
  border-radius: 7px;
  position: relative;
  top: 1px;
  background: var(--color-grey-Light-4);
  cursor: pointer;
`

export const Circle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
  transition: all 0.3s ease 0s;
  transform: ${props => props.activeSwitch && "translateX(12px)"};
  background: var(--color-switch);
`
