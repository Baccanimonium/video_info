import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {basketTrash} from "../../SelectionCriteria/Icons/basketTrash";
import Icon from '../../../../../component_ocean/Components/Icon'
import { sigma } from "../Icons/sigmaIcon";
import {AttributeLabel} from "../constants";

const SelectedParamsRow = ({ node, node: {root, type, sigma: sigmaState}, children, onInput, onDelete}) => {

  const HandleDelete = useCallback((e) => {
    e.stopPropagation()
    onInput([])
  } , [onInput])

  const setSigma = useCallback((e) => {
    e.stopPropagation()
    onInput({...node, sigma: !node.sigma})
  } , [onInput, node])
  return (
    <div className="flex items-center">
      {children}
      <div className="ml-2">{
        root
          ? <button className="fs-12" onClick={HandleDelete}>Отчистить выбор</button>
          : <Icon icon={basketTrash} onClick={onDelete}/>
      }</div>
      {type === AttributeLabel && <Icon icon={sigma} onClick={setSigma} className="ml-2"/>}
      {sigmaState && "с подитогом"}
    </div>
  );
};

SelectedParamsRow.propTypes = {};

export default SelectedParamsRow;