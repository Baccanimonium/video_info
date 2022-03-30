import styled from "styled-components"

export const PracticesButtonsContainer = styled.div`
  display: flex;
  border-top: 1px solid var(--color-grey-darken-1);
  background: var(--color-grey-Light-4);
  align-items: center;
  border-bottom: 2px solid var(--color-light-gold-1);
  border-top: 2px solid var(--color-white);
`

export const PracticeButton = styled.div`
  font-size: 16px;
  height: 30px;
  min-width: 150px;
  background: var(--color-grey-darken-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-white);
  padding: 4px 16px;
  margin-right: 2px;
  cursor: pointer;
  will-change: width;
  transition: background 0.2s ease 0s, width 0.3s ease-in-out;
  &.current-practice {
    background: var(--color-light-gold-1);
    color: var(--color-white);
    justify-content: center;
  }
`

export const OpenVersionButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
