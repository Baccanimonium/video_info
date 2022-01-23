import styled from "styled-components";

export const LeafContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => `${props.level * 20}px`};
  // border-bottom: ${props => props.level === 0 ? "1px solid" : ""};
  padding: 3px 0;
`

export const LeafHeader = styled.button`
  ${props => props.selected ? `
    background-color: var(--color-light-gold-1);
    box-shadow: 0 0 0 1px var(--color-light-gold-1);
    color: white;
    `
  :
    ""
  }
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  ${props => props.borderState ? `
    border-${props.borderState}: 2px solid var(--color-light-gold-3);
  `
  : ""
  }
  padding: 4px 4px;
`