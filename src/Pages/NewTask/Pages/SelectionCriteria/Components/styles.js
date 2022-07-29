import styled from "styled-components";
import CheckboxGroup from "@/component_ocean/Components/Inputs/CheckboxGroup";

export const GridContainer = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: 400px 1fr 400px ;
  --separator-width: 1px;
  --separator-color: var(--color-grey-Light-4);
`

export const CheckboxGroupContainer = styled.div`
  height: 500px;
`

export const CheckboxGroupStyle = styled(CheckboxGroup)`
  --height-checkboxGroup-container: 470px;
  --color-border-checkboxGroup: var(--color-grey-Light-4);
`
