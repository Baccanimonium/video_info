import styled from "styled-components";


export const RowContainer = styled.div`
  display: grid;  
  grid-template-columns: 1fr 60px 60px 80px 100px 100px;
  width: 100%;
  span {
    border-right: 1px solid var(--color-grey-darken-1);
    padding: 0 4px;
  }
`