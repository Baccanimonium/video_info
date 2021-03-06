import React from "react"
import PropTypes from "prop-types"
import { TabBarContainer, TabButton, StyleRemoveIcon, AlertAndUserInfoContainer } from "./styles"
import Carousel from "@/Components/Carousel"
import UserInfo from "../UserInfo";

const TabBar = ({ tabs, currentTabIndex, onCloseTab, onChangeActiveTab, className, children }) => {
  const closeTabById = (index) => (e) => {
    e.preventDefault()
    e.stopPropagation()
    onCloseTab(index)
  }

  return (
    <TabBarContainer className={`display-flex flex-min-with p-l-5 p-r-10 w-100 ${className}`}>
      <Carousel value={currentTabIndex} onInput={onChangeActiveTab}>
        {tabs.map((({ tabName, id }, i) => (
          <TabButton
            key={tabName}
            type="button"
            className="display-flex a-i-center j-c-space-between h-100 capitalize fw700"
            notLast={i !== tabs.length - 1}
          >
            <span className="overflow-hidden text-overflow-ellipsis no-white-space">{tabName}</span>
              <StyleRemoveIcon
                size="10"
                onClick={closeTabById(id)}
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
