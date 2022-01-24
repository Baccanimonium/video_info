import React from 'react';
import PropTypes from 'prop-types';
import {LeafHeader, LeafTitle} from "@/Components/Tree/styles";

const Row = ({
   title, onClick, selected, draggable, onDragStart, onDragEnd, borderState, node, rowComponent: Component, parent,
  onInput, onDelete
}) => {
  return (
    <LeafHeader
      className="fs-16"
      onClick={onClick}
      draggable={draggable}
      borderState={borderState}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Component node={node} parent={parent} onInput={onInput} onDelete={onDelete}>
        <LeafTitle selected={selected}>
          {title}
        </LeafTitle>
      </Component>
    </LeafHeader>
  );
};

Row.propTypes = {

};

Row.defaultProps = {
  rowComponent: ({children, className, style }) => <div className={className} style={style}>{children}</div>
};

export default Row;
