import styled from "styled-components"
import ScrollBar from "@/Components/ScrollBar"

export const FilterWrapper = styled.div`
  width: var(--sidebar-width);
  z-index: 2;
  color: var(--color-white);
  background: var(--color-grey-darken-2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  flex: 0 0 auto;
`

export const FilterHeader = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  font-weight: 700;
  text-transform: uppercase;
`

export const WrapperBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 7px 13px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`
export const StylePerfectScrollbar = styled(ScrollBar)`
 .ps__rail-y {
    width: 6px;
    display: block;
    opacity: 0;
    border: 0;
    right: 0;
  }
  .ps__rail-y:hover {
    background-color: transparent;
  }
  .ps__rail-y.ps--clicking {
    background-color: transparent;
  }
  .ps__rail-y:hover > .ps__thumb-y {
    width: 6px;
    background: var(--color-black-darken-1);
    opacity: 1;
  }
  .ps__thumb-y {
    width: 6px;
    background: var(--color-black-darken-1);
    right: 0;
  }
  .ps__thumb-y:hover {
    width: 6px;
    background: var(--color-black-darken-1);
  }
  .ps__rail-y {
    padding-right: 8px;
  }
`

export const FilterItemContainer = styled.div`
  position: relative;
  height: auto;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & > * {
    padding: 15px 20px 15px 20px;
    --separator-width: 1px;
    --separator-color: var(--color-grey-darken-6);
    border-bottom: var(--separator-width) solid var(--separator-color);
  }
`

export const ResizeButton = styled.button`
  left: 0;
  right: 0;
  cursor: row-resize;
  position: absolute;
  bottom: -1px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  height: 3px;
  background-color: var(--color-grey-darken-6);
  padding: 0;
  border: 0;
  transition: transform, background-color 150ms ease-in-out;
  border-radius: 4px;
  &:hover {
    transform: scaleY(2);
    background-color: var(--color-grey-darken-0);
  }
  &::after {
    content: "";
    top: -6px;
    width: 110%;
    left: 0;
    right: 0;
    position: absolute;
    height: 12px;
  }
`
