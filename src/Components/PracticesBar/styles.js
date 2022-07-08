import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const ButtonsAndPracticesTabContainer = styled.div`
  border-bottom: 1px solid var(--color-grey-darken-3);
  padding: 0 10px;
`

export const PracticesButtonsContainer = styled.div`
  display: flex;
  border-top: 1px solid var(--color-grey-darken-1);
  align-items: center;
  border-top: 2px solid var(--color-white);
`

export const PracticeButton = styled.div`
  font-size: 14px;
  height: 30px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-darken-6);
  padding: 4px 10px;
  margin-right: 2px;
  cursor: pointer;
  will-change: width;
  transition: background 0.2s ease 0s, width 0.3s ease-in-out;
  border-radius: 5px;
  &:hover {
    color: var(--color-black-darken-1);
  }
  &.current-practice {
    background: var(--color-white);
    justify-content: center;
    color: var(--color-black-darken-1);
  }
`

export const WrapperButton = styled.div`
  padding: 4px;
  border-radius: 5px;
  margin-bottom: 10px;
`

export const OpenVersionButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
