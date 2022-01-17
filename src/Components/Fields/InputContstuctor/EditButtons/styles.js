import styled from "styled-components"

// eslint-disable-next-line import/prefer-default-export
export const TextButton = styled.button`
  color: ${props => props.disabled ? "var(--color-grey-darken-0)" : "var(--input-constructor-color-btn)"};
`
