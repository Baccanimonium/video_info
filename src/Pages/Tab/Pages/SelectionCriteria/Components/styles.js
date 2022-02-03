import styled from "styled-components"
import {basketTrash} from "../Icons/basketTrash";
import Icon from '@/Components/Icon'
export const TrashIcon = Icon(basketTrash)

export const StyleTrashIcon = styled(TrashIcon)`
  color: var(--color-grey-darken-0);
  &:hover  {
    color: var(--color-gold-2);
  }
`
export const IconPlus = styled.div`
  .svg-inline--fa {
    width: 16px;
    height: 16px;
    color: var(--color-grey-darken-0);
    &:hover  {
      color: var(--color-gold-2);
    }
  }
  
`
