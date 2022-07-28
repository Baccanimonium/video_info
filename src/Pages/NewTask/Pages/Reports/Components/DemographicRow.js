import React from 'react';
import PropTypes from 'prop-types';
import {RowContainer} from "./styles";

const DemographicRow = ({ node: { folder, type, owner, lastUpdateDate, lastUpdater }, children, className}) => {
  return (
    <RowContainer className={className}>
      {children}
      <span>{folder}</span>
      <span>{type}</span>
      <span>{owner}</span>
      <span>{lastUpdateDate}</span>
      <span>{lastUpdater}</span>
    </RowContainer>
  );
};

DemographicRow.propTypes = {
  
};

export default DemographicRow;