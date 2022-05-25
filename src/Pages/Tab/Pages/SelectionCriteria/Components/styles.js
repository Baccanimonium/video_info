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

export const CardForCondition = styled.div`
  background: #404040;
  width: 40px;
  height: 40px;
  color: var(--color-white);
  border-radius: 100%;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  box-sizing: border-box;
  outline: none;
  white-space: nowrap;
  text-align: center;
  min-height: var(--height-button);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`
