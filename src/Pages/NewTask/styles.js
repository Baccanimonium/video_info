import styled from "styled-components"

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
  height: 48px;
  width: 48px;
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
