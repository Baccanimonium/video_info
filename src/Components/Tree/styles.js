import styled from "styled-components";

export const LeafContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => `${props.level * 10}px`};
  //border-bottom: ${props => props.level === 0 ? "1px solid" : ""};
  padding: 5px 5px;
  border-radius: 4px;
  ${props => props.selected ?
          `background: var(--color-grey-Light-9);`
          : ``
  }
  ${props => props.level === 2 ?
          `
          padding-left: 5px;
          margin-left: 10px;
          `
          :
          ``
}
`

export const LeafHeader = styled.div`
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  width: 100%;
  ${props => props.borderState ? `
    border-${props.borderState}: 2px solid var(--color-light-gold-3);
  `
          : ""
  }
  //padding: 4px 4px;
`

export const LeafTitle = styled.span`
  ${props => props.selected ? `
    font-weight: 700;
    `
          :
          ""
  }
`
