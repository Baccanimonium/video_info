import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {ButtonsContainer, Button} from "../../../../../Components/ButtonsTabBar/style";
import {StatisticLabel, AttributeLabel, DemographicLabel, statistics, attributes} from '../constants'
import DemographicTree from "./DemographicTree";
import Tree from '@/Components/Tree';

const attributesButtons = [
  {
    id: 1,
    label: StatisticLabel,

  },
  {
    id: 2,
    label: AttributeLabel
  },
  {
    id: 3,
    label: DemographicLabel
  }
]

const DictionaryComponents = {
  [StatisticLabel]: (props) => <Tree
    {...props}
    returnObjects
    labelKey="title"
    valueKey="id"
    options={statistics}
    checkAble
  />,
  [AttributeLabel]: (props) => <Tree
    {...props}
    returnObjects
    labelKey="title"
    valueKey="id"
    options={attributes}
    checkAble
  />,
  [DemographicLabel]: DemographicTree
}

const Dictionaries = ({ reportState, setReportsState }) => {
  const [activeButton, setActiveButton] = useState(StatisticLabel)

  const openAttributes = useCallback((label) => () => setActiveButton(label), [setActiveButton])

  const DictionaryComponent = DictionaryComponents[activeButton]

  return (
    <div className="separator-left p-l-15 m-b-15">
      <ButtonsContainer>
        {attributesButtons.map(({id, label}) => (
          <Button
            className={`${label === activeButton ? 'current' : ''}`}
            onClick={openAttributes(label)}
            key={id}
          >
            {label}
          </Button>
        ))}
      </ButtonsContainer>
      {<DictionaryComponent
        value={reportState[activeButton]}
        onInput={setReportsState(activeButton)}
      />}
    </div>
  );
};

Dictionaries.propTypes = {};

export default Dictionaries;