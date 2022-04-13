import styled from "styled-components"

export const PageContainer = styled.div`
  position: relative;
  height: 100vh;
`

export const ContentContainer = styled.div`
  position: absolute;
  top: -63px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 404px;
  height: 425px;
`

export const FormContainer = styled.div`
  background: var(--color-white);
  padding: 40px 62px;
  color: var(--color-black-darken-1);
`

export const FormTittle = styled.div`
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 14px;
`
export const ImgLogo = styled.img`
  width: auto;
  height: 100%;
  transform: translate(-12%, 0%);
  @media (min-width: 1210px) {
    transform: translate(-6%, 0%);
  }
  @media (min-width: 1169px) {
    width: 100%;
    transform: scaleY(1.2);
  }
`
