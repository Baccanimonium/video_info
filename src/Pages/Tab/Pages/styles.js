import styled from "styled-components"

export const DealConditionWrapper = styled.div`
  --font-size-switch: 14px;
  .color-lightGold {
    color:  ${props => !props.hide && "var(--color-grey-darken-0);"}
  }
  &:not(:first-child) {
    &::before {
      content: "";
      height: 10px;
      display: block;
      background-color: var(--color-grey-Light-4);
    }
  }
`

export const IndentionConditionForm = styled.div`
display: ${props => props.showCondition && "none"};
 @media (min-width: 1023px) {
    padding: 0 13px;
  }
  @media (min-width: 1279px) {
    padding: 0 20px;
  }
  @media (min-width: 1670px) {
    padding: 0 calc(50% - 680px) 0 calc(50% - 740px);
  }
`

export const HeaderCondition = styled(IndentionConditionForm)`
  min-height: 60px;
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr 70px;
  padding-bottom: 15px;
  padding-top: 15px;
  align-items: center;
  grid-row-gap: 15px;
  border-bottom: 1px solid var(--color-grey-Light-4);
  --tip-icon-margin: 0px;
  @media (max-width: 1199px) {
    grid-template-columns: repeat(4, auto);
  }
  ${IndentionConditionForm}
`

export const NameCondition = styled.div`
  grid-column: 1/3;
  display: flex;
  align-items: center;
   @media (max-width: 1199px) {
   grid-column: 1/2;
   }
`

export const Separator = styled.div`
  border-bottom: 1px solid var(--color-grey-Light-4);
   transition: 0.3s;
   margin-bottom: 12px;
  padding-bottom: 15px;
`

export const ConditionFormWrapper = styled.div`
  padding-top: 15px;
  display: grid;
  grid-row-gap: 20px;
  --validation-color: transparent;
  //--border-color-input: transparent;
  --indent-bottom-for-form: 0px;
  @media (min-width: 1023px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1279px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1439px) {
    grid-template-columns: repeat(6, 1fr);
  }
  .styleFormWrapper {
  --color-input: var(--color-light-gold-1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    min-height: 60px;
    border-top: 1px solid var(--color-grey-darken-0);
    border-left: 1px solid var(--color-grey-darken-0);
    border-bottom: 1px solid var(--color-grey-darken-0);
    padding: 6px;
    &::after {
      content: "";
      position: absolute;
      border-right: 1px solid var(--color-grey-darken-0);
      top: -1px;
      bottom: -1px;
      right: -1px;
    }
  }
`
