import styled from "styled-components"

export const ReportContainer = styled.div`
  padding-top: 15px;
  display: grid;
  grid-column-gap: 20px;
  --separator-width: 1px;
  --separator-color: var(--color-grey-Light-4);
  padding-bottom: 15px;
`

export const WrapperInput = styled.div`
  --width-input: ${({ value }) => value !== undefined ? 50 + String(value).length * 9 : 115}px;
  --height-input: 30px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`
