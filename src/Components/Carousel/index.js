import React, { useMemo, useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import Icon from "@/Components/Icon"
import { arrowleft } from "./icons/arrowleft"
import { arrowright } from "./icons/arrowright"
import { ArrowsContainer, SlidesContainer } from "./styles"

const arrowLeftIcon = Icon(arrowleft)
const arrowRightIcon = Icon(arrowright)

const Carousel = ({ children, arrowLeft: ArrowLeft, arrowRight: ArrowRight, value, onInput }) => {
  const [middlewareIndex, updateIndex] = useState(0)
  const [scrollPosition, updateScrollPosition] = useState(0)
  const [availableScroll, setAvailableScroll] = useState(0)
  const carouselContainer = useRef({})
  const slidesContainer = useRef({})
  const transitionState = useMemo(() => ({ transform: `translateX(${-scrollPosition}px)` }), [scrollPosition])
  const { clientWidth } = carouselContainer.current
  const { scrollWidth, children: slides } = slidesContainer.current

  function handleChangeTab(index) {
    return () => {
      onInput(index)
    }
  }

  function handleScroll(positiveDirection) {
    return () => {
      if (positiveDirection) {
        const nextScroll = slides[middlewareIndex + 1].clientWidth + scrollPosition
        updateScrollPosition(availableScroll <= nextScroll ? availableScroll : nextScroll)
      } else {
        const scrollPrev = scrollPosition - slides[middlewareIndex - 1].clientWidth
        updateScrollPosition(scrollPrev > 0 ? scrollPrev : 0)
      }
    }
  }

  function handleHorizontalScroll(e) {
    e.stopPropagation()
    const { deltaY } = e
    if ((middlewareIndex > 0 && deltaY < 0) || (middlewareIndex < slides.length - 1 && deltaY > 0)) {
      handleChangeTab(deltaY > 0 ? middlewareIndex + 1 : middlewareIndex - 1)()
    }
  }

  useEffect(() => {
    const nextAvailableScroll = slidesContainer.current.scrollWidth - carouselContainer.current.clientWidth
    if (scrollPosition > nextAvailableScroll) {
      updateScrollPosition(availableScroll)
    }
    if (nextAvailableScroll !== availableScroll) {
      setAvailableScroll(nextAvailableScroll)
    }
  })

  useEffect(() => {
    const positiveDirection = value > 0 && value >= middlewareIndex
    const { clientWidth } = carouselContainer.current
    const { children } = slidesContainer.current
    let res = 0
    let i = 0
    // todo children[i] при открытии приложения ундэфайнед
    for (i; i < value; i++) {
      res += children[i].clientWidth
    }
    if (positiveDirection) {
      res += children[i].clientWidth
    } else if (i !== 0) {
      res -= children[i - 1].clientWidth
    }
    const viewPortEndPosition = scrollPosition + clientWidth
    if (res < scrollPosition || res > viewPortEndPosition) {
      updateScrollPosition(positiveDirection ? res < availableScroll ? res : availableScroll : res)
    }
    updateIndex(value)
  }, [availableScroll, value])

  return (
    <div className="w-100 h-full flex-full-with flex overflow-hidden">
      {scrollPosition > 0 && clientWidth < scrollWidth && (
        <ArrowsContainer onClick={handleScroll(false)}>
          <ArrowLeft />
        </ArrowsContainer>
      )}
      <div
        className="w-100 h-full flex-full-with flex overflow-hidden"
        ref={carouselContainer}
      >
        <SlidesContainer
          className="flex flex-full-with"
          style={transitionState}
          ref={slidesContainer}
          onWheel={handleHorizontalScroll}
        >
          {children.map((s, index) => (
            <div
              key={index}
              className={`h-full ${index === middlewareIndex ? "active" : ""}`}
              onClick={handleChangeTab(index)}
            >
              {s}
            </div>
          ))}
        </SlidesContainer>
      </div>
      {availableScroll > 0 && scrollPosition < availableScroll && (
        <ArrowsContainer onClick={handleScroll(true)}>
          <ArrowRight />
        </ArrowsContainer>
      )}
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  arrowLeft: PropTypes.func,
  arrowRight: PropTypes.func,
  value: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
}

Carousel.defaultProps = {
  arrowLeft: arrowLeftIcon,
  arrowRight: arrowRightIcon,
}

export default Carousel
