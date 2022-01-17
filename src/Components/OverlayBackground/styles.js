import styled from "styled-components"

// eslint-disable-next-line import/prefer-default-export
export const Fon = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.22);
  z-index: 5000;
  --sidebar-width: 284px;
  display: flex;
  flex-direction: ${props => props.filterLocation !== "right" ? "row-reverse" : "row"};
`
