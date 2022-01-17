import styled from "styled-components";

export const DataSetContainer = styled.div`
  --layout-left-padding: 10%;
  --layout-right-padding: 10%;
  @media (max-width: 1024px) {
    --layout-left-padding: 5%;
    --layout-right-padding: 5%;
  }
`
export const DataListContainer = styled.div`
  height: 85%;
  width: 30%;
  border: 2px black solid;
  margin-left: 5%;
  margin-top: 5%;
`

export const SelectTools = styled.div`
  border-bottom: 2px black solid;
  padding: 10px;
`
