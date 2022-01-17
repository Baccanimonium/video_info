import styled from "styled-components"
import BsButton from "@/Components/BsButton"

export const ClearFilter = styled.div`
  margin-right: 10px;
  padding: 0 9px 0 9px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  min-width: 152px;
  border-radius: 4px;
  position: relative;
  background: var(--color-white);
   display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.1);
  }
`
export const TitleLabel = styled.div`
  position: absolute;
  opacity: 0;
  left: -7px;
  display: block;
  width: max-content;
  margin-top: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  transition: opacity 0.2s ease-in-out;
  transition-delay: 0.2s;
  z-index: 100;
  
`
export const Title = styled.div`
  position: relative;
  padding: 9px 9px;
  background: var(--color-white);
  color: var(--color-black);
  &:before {
    content: "";
    position: absolute;
    transform: rotate(45deg);
    width: 24px;
    height: 12px;
    top: 2px;
    left: 12px;
    z-index: -1;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
    background: var(--color-white);
  }
`

export const StyleBtn = styled(BsButton)`
  border-color: ${props => props.disabled ? "var(--color-grey-darken-0)" : "transparent"};
  width: 94px;
  padding: 6px 11px;
`

export const WrapperBtnAndTitle = styled.div`
  position: relative;
  &:hover {
    ${TitleLabel} {
      opacity: 1;
    }
  }
`
