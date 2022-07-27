import React from "react"
import styled from "styled-components"

const NotFoundMessageContainer = styled.div`
  max-width: 555px;
  width: 100%;
  height: 100%;
  margin: auto;
`

const testArray = [
  {
    id:1,
    label: "1",
    children: [
      {
        id:2,
        label: "2",
        children: [
          {
            id:3,
            label: "3",
            children: [
              {
                id:4,
                label: "4",
                children: [
                  {
                    id:5,
                    label: "5",
                    children: [
                      {

                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

const Home = () => (
  <div className="flex-container pos-relative overflow-hidden">
    <div className="left-0 right-0 top-0 bottom-0 pos-absolute w-100 h-100 d-flex a-i-center j-c-center p-b-10-p">
      <NotFoundMessageContainer className="display-flex a-i-center j-c-center flex-column">
        <h2 className="fs-34 a-i-center max-width-555">
          Добро пожаловать в VideoInfo!
        </h2>
      </NotFoundMessageContainer>
    </div>
  </div>
)


export default Home
