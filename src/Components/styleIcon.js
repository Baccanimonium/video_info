import styled from "styled-components";
import Icon from "@/component_ocean/Components/Icon";

export const StyleIcon = styled(Icon)`
  cursor: pointer;
  color: ${props => props.active ? "var(--color-gold-2)" : "var(--color-grey-darken-0)"};
  &:hover  {
    color: var(--color-gold-2);
  }
`
