import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {basketTrash} from "../../SelectionCriteria/Icons/basketTrash";
import { sigma } from "../Icons/sigmaIcon";
import {AttributeLabel} from "../constants";
import {BtnLink} from "./styles"
import {StyleIcon} from "@/Components/styleIcon"

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
      {sigmaState && (<span className="ml-1">(с подитогом)</span>)}
      <div className="ml-2">{
        root
          ? <BtnLink className="fs-12" onClick={HandleDelete}>Очистить выбор</BtnLink>
          : <StyleIcon icon={basketTrash} onClick={onDelete}/>
      }</div>
      {type === AttributeLabel && <StyleIcon active={sigmaState} icon={sigma} onClick={setSigma} className="ml-2"/>}
    </div>
  );
};

SelectedParamsRow.propTypes = {};

export default SelectedParamsRow;
