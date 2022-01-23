import React from 'react';
import PropTypes from 'prop-types';
import {LeafHeader} from "@/Components/TTTree/styles";

const Row = ({ title, onClick, selected, draggable, onDragStart, onDragEnd, borderState }) => {
  return (
    <LeafHeader
      className="fs-16" onClick={onClick} selected={selected}
      draggable={draggable}
      borderState={borderState}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {title}
    </LeafHeader>
  );
};

Row.propTypes = {

};

export default Row;