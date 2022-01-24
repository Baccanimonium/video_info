import styled from "styled-components"

export const ReportContainer = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 400px 1fr 1fr;
  grid-column-gap: 20px;
  --separator-width: 1px;
  --separator-color: var(--color-grey-Light-4);
`

export const WrapperInput = styled.div`
  --width-input: 50px;
  --height-input: 30px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`
