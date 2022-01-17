import React from "react"
import styled from "styled-components"
import Carousel from "./index"

export default {
  title: "Components/Carousel",
  component: Carousel,
  argTypes: {
    children: {
      description: "React children",
    },
    arrowLeft: {
      description: "Компонент левой стрелки",
    },
    arrowRight: {
      description: "Компонент правой стрелки",
    },
    value: {
      description: "Индекс текущего активного элемента",
    },
    onInput: {
      description: "Функция обработчик смены активного элемента",
    },
  }
}

const CarouselButton = styled.button`
  width: 178px;
  height: 50px;
  min-width: 100px;
  padding-left: 15px;
  padding-right: 13px;
  background: var(--color-grey-darken-0);
  color: var(--color-white);
  transition-property: color, background-color;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
  margin-right: ${props => props.notLast ? "5px" : "0px"};

  &:hover:not(.active) {
    color: var(--color-black-darken-1);
  }
  .active > & {
    background: var(--color-light-gold-1);
  }
`

const Template = (args) => <Carousel {...args} />


export const Default = Template.bind({ })
Default.args = {
  value: 4,
  children: new Array(10).fill(1).map((_, i) => (
    <CarouselButton
      type="button"
      key={i}
    >
      {i}
    </CarouselButton>
  ))
}
