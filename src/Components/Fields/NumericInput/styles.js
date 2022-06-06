import styled from "styled-components";
import {InputComponentContainer} from "../BsInput";
import { IconToggleIndicator } from "@/Components/Icon/CommonIcons"

export const IncrementButton = styled(IconToggleIndicator)`
  display: flex;
  align-items: center;
  height: 50%;
  transition: all .1s linear;
  user-select: none;
  &:hover {
    height: 60%!important;
    color: var(--color-gold);
  }
  &.last {
    border-top: 1px solid var(--border-color-input);
  }
`

export const IncrementsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 22px;
  height: 100%;
  border-radius: 0 2px 2px 0;
  opacity: 0;
  transition: opacity .24s linear .1s;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--border-color-input);
  ${InputComponentContainer}:hover & {
    opacity: 1;
  }
  &:hover {
    ${IncrementButton} {
      height: 40%;
    }
  }
`
