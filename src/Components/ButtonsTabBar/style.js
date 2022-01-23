import styled from "styled-components"
import {NavLink} from "react-router-dom";

export const ButtonsContainer = styled.div`
  display: flex;
  border-top: 1px solid var(--color-grey-darken-1);
  align-items: center;
  border-top: 2px solid var(--color-white);
  margin-bottom: 5px;
  border-bottom: 2px solid var(--color-light-gold-1);
`

export const Button = styled.button`
  width: 100%;
  font-size: 14px;
  height: 30px;
  min-width: 100px;
  background: var(--color-grey-darken-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-white);
  padding: 4px 10px;
  margin-right: 2px;
  cursor: pointer;
  will-change: width;
  transition: background 0.2s ease 0s, width 0.3s ease-in-out;
  &:last-child {
    margin-right: 0;
  }
  &.current {
    background: var(--color-light-gold-1);
    color: var(--color-white);
    justify-content: center;
  }
`
