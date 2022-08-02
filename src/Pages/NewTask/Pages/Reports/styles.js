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
  --width-input: ${({ value }) => value ? 50 + String(value).length * 9 : 59}px;
  --height-input: 30px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

export const Resizer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 3px;
  cursor: e-resize;
  transition: background-color 500ms ease-in-out;
  &:hover {
    background-color: #e5e7eb;
  }
  &::after {
    content: "";
    position: absolute;
    right: -2px;
    left: -2px;
    top: 0;
    bottom: 0;
  }
`

export const ContainerDatePicker = styled.div`
  //width: 270px;
  --background-input: var(--color-white);
  --width-input: 320px;
`
