import styled from "styled-components";

import BaseButton from "@/component_ocean/Components/Button";

export const BorderButtonBlack = styled(BaseButton)`
  background: var(--color-white);
  border: 2px solid var(--color-black-darken-2);
  color: var(--color-black-darken-2);
  &:hover {
    background: var(--color-black-darken-2);
    color:  var(--color-white);
  }
`

export const BorderButtonGold = styled(BaseButton)`
  background: var(--color-white);
  border: 2px solid var(--color-gold);
  color: var(--color-gold);
  &:hover {
    background: var(--color-gold);
    color:  var(--color-white);
  }
`

export const LightGrayButton = styled(BaseButton)`
  background: var(--color-grey-Light-4);
  &:not(:disabled):active, &:not(:disabled):focus {
    background: var(--color-light-gold-1);
    color: var(--color-white);
  }
  color: #1d1d1d;
  height: 34px;
  &:hover {
    background-color: var(--color-grey-darken-0);
  }
`
export const GoldButton = styled(BaseButton)`
  background: var(--color-light-gold-1);
  color: var(--color-white);
  &:not(:disabled):active, &:not(:disabled):focus {
    background: var(--color-gold);
  }
  &:not(:disabled):hover {
    box-shadow: var(--shadow-golden);
  }
`
