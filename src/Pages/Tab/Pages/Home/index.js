import React from "react"
import styled from "styled-components"

const NotFoundMessageContainer = styled.div`
  max-width: 555px;
  width: 100%;
  height: 100%;
  margin: auto;
`

const Home = () => (
  <div className="flex-container pos-relative overflow-hidden">
    <div className="left-0 right-0 top-0 bottom-0 pos-absolute w-100 h-100 d-flex a-i-center j-c-center p-b-10-p">
      <NotFoundMessageContainer className="display-flex a-i-center j-c-center flex-column">
        <h2 className="fs-34 a-i-center max-width-555">
          Добро пожаловать в VideoInfo!
        </h2>
        <div className="fs-18 d-flex fw700 color-lightGold">
          Начните с выбора данных в нижнем меню.
        </div>
      </NotFoundMessageContainer>
    </div>
  </div>
)


export default Home
