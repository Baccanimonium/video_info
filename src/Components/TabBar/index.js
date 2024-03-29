import React from "react"
import PropTypes from "prop-types"
import { TabBarContainer, TabButton, StyleRemoveIcon, AlertAndUserInfoContainer } from "./styles"
import Carousel from "@/component_ocean/Components/Carousel"
import UserInfo from "../UserInfo";

const TabBar = ({ tabs, currentTabIndex, onCloseTab, onChangeActiveTab, className, children }) => {
  const closeTabByIndex = (index) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    onCloseTab(index)
  }

  return (
    <TabBarContainer className={`flex flex-min-with pl-1.5 pr-2.5 w-full ${className}`}>
      <Carousel value={currentTabIndex} onInput={onChangeActiveTab}>
        {tabs.map((({ name, id }, i) => (
          <TabButton
            onClick={() => onChangeActiveTab(i)}
            key={id}
            type="button"
            active={currentTabIndex === i}
            className="flex items-center justify-between h-full capitalize font-bold"
            notLast={i !== tabs.length - 1}
          >
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
              <StyleRemoveIcon
                size="10"
                onClick={closeTabByIndex(i)}
              />
          </TabButton>
        )))}
      </Carousel>
      <AlertAndUserInfoContainer>
        <UserInfo />
      </AlertAndUserInfoContainer>
      {children}
    </TabBarContainer>
  )
}

TabBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  currentTabIndex: PropTypes.number.isRequired,
  onChangeActiveTab: PropTypes.func.isRequired,
  onCloseTab: PropTypes.func.isRequired,
  className: PropTypes.string
}

TabBar.defaultProps = {
  className: ""
};

export default React.memo(TabBar)
