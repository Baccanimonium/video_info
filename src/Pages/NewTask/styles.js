import styled from "styled-components"
import { Link } from 'react-router-dom'

export const InformationCard = styled.div`
  border-radius: 5px;
  padding: 8px 14px;
  box-sizing: border-box;
  white-space: nowrap;
  text-align: center;
  border-color: var(--color-grey);
  border-width: 1px;
  border-style: solid;
  min-height: var(--height-button);
  color: var(--color-grey);
  margin-right: 5px;
  &:last-child {
    margin-right: 0;
  }
`

export const InformationCardMin = styled.div`
  height: 34px;
  width: 34px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 8px 8px;
  box-sizing: border-box;
  white-space: nowrap;
  text-align: center;
  border-color: var(--color-grey);
  border-width: 1px;
  border-style: solid;
  min-height: var(--height-button);
  color: var(--color-grey);
  margin-right: 5px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    box-shadow: 0px 2px 6px rgba(161, 137, 69, 0.49);
  }
  `

export const CardForDirectory = styled.div`
  border-radius: 5px;
  padding: 8px 14px;
  box-sizing: border-box;
  white-space: nowrap;
  text-align: center;
  border-color: ${props => props.active ? "var(--color-grey)" : "var(--color-grey-light-1)"};
  border-width: 1px;
  border-style: solid;
  min-height: var(--height-button);
  color: ${props => props.active ? "var(--color-grey)" : "var(--color-white)"};
  margin-right: 5px;
  background: ${props => props.active ? "var(--color-white)" : "var(--color-grey-light-1)"};
  cursor: ${props => props.active && "pointer"};
  pointer-events: ${props => !props.active && "none"};
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
`

export const PageLink = styled(Link)`
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
  &.active {
    background: var(--color-white);
    justify-content: center;
    color: var(--color-black-darken-1);
  }
`

export const DataSetContainer = styled.div`
  --layout-left-padding: 10%;
  --layout-right-padding: 10%;
  @media (max-width: 1024px) {
    --layout-left-padding: 5%;
    --layout-right-padding: 5%;
  }
`