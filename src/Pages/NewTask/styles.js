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
