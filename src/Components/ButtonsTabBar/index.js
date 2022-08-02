import styled from "styled-components"

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  background-color: var(--color-grey-Light-4);
  border-radius: 5px;
  padding: 4px;
`

export const Button = styled.button`
  width: 100%;
  font-size: 14px;
  height: 30px;
  min-width: 100px;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-darken-6);
  padding: 4px 10px;
  margin-right: 2px;
  cursor: pointer;
  will-change: width;
  transition: background 0.2s ease 0s, width 0.3s ease-in-out;
  border-radius: 5px;
  &:last-child {
    margin-right: 0;
  }
  &.current {
    background: var(--color-white);
    color: var(--color-black-darken-1);
    justify-content: center;
  }
  &:hover {
    color: var(--color-black-darken-1);
  }
`
