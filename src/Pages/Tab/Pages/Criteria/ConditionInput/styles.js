import styled from "styled-components"

export const ConditionItemWrapper = styled.div`
  --open-select-button-color: var(--color-light-gold-1);
  position: relative;
  --separator-color: var(--color-grey-darken-0);
  padding-left: 5px;
  padding-bottom: 5px;
  padding-right: 1em;
  &:not(:first-child) {
    border-top: 1px solid var(--separator-color);
  }
`

export const OverflowItemToggle = styled.button`
  position: absolute;
  background-color: inherit;
  overflow: hidden;
  top: 4px;
  right: 0;
`
export const ValueItem = styled.span`
 &.last {
  padding-right: 5px;
  &::after {
    display: none;
  }
}
&::after {
  content: ",";
  position: relative;
  left: -0.1em;
}
`

export const BtnOpenSelect = styled.button`
  width: 100%;
  display: flex;
  padding-top: 3px;
  padding-bottom: 3px;
`
