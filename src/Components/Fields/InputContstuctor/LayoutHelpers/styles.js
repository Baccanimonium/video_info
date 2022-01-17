import styled from "styled-components"

export const StyleChildren = styled.div`
 ${props => props.leftIndent && "margin-left: 10px"}
 ${props => props.rightIndent && "margin-right: 10px"}
 `
