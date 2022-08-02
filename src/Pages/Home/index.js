import React from "react"
import styled from "styled-components"

const NotFoundMessageContainer = styled.div`
  max-width: 555px;
  width: 100%;
  height: 100%;
  margin: auto;
`

const Home = () => (
  <div className="flex-container relative overflow-hidden">
    <div className="left-0 right-0 top-0 bottom-0 absolute w-full h-full flex items-center justify-center pb-2.5">
      <NotFoundMessageContainer className="flex items-center justify-center flex-col">
        <h2 className="fs-34 items-center max-width-555">
          Добро пожаловать в VideoInfo!
        </h2>
      </NotFoundMessageContainer>
    </div>
  </div>
)


export default Home
