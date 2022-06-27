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

export const BtnLink = styled.button`
  position: relative;
  color: var(--color-grey-darken-0);
  transition: .2s;
  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: var(--color-grey-darken-0);
  }
  &:hover {
    color: var(--color-gold-2);
    &:before {
      opacity: 0;
    }
  }
`

export const BtnPlus = styled.button`
  color: var(--color-grey-darken-0);
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-grey-darken-0);
  border-radius: 5px;
  position: relative;
  transition: .2s;
  &:before {
    content: "+";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    display: flex;
    justify-content: center;
  }
  &:hover {
    color: var(--color-gold-2);
    border-color: var(--color-gold-2);
  }
`
