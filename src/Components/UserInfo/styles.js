import styled from "styled-components"
import OverlayMenu from "@/Components/OverlayMenu"

export const UserOverlay = styled(OverlayMenu)`
  box-shadow: var(--shadow-3);
  border-radius: 2px;
  background: var(--color-white);
  font-family: var(--font-helvetica);
  font-size: 14px;
  width: 176px;
  .item {
    &:hover {
      color: var(--color-light-gold-1);
      .icon {
        color: var(--color-light-gold-1);
      }
    }
  }
`
