import styled from "styled-components"

export const ReportContainer = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: 380px 1fr 1fr;
  grid-column-gap: 20px
`

export const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px
`

export const WrapperInput = styled.div`
  --width-input: 50px;
  --height-input: 30px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

export const LeftContainer = styled.div`
  border-right: 1px solid var(--color-grey-Light-4);
  padding-right: 30px;
`
