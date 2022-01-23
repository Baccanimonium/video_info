import React, {useCallback, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {memoize} from "lodash/function";
import Leaf from "@/Components/TTTree/Leaf";
import MemoResolver from "@/Utils/MemoResolver";

const resolver = MemoResolver()

const Tree = (props) => {
  const refProps = useRef(props)
  refProps.current = props
  const {
    value, onInput, onDrag, childrenKey, valueKey, labelKey, checkAble, options, draggable, dropRule,
    defaultExpandAll
  } = props
  const [selectedNode, setSelectedNode] = useState("")
  const [dropState, setDropState] = useState(null)
  const handleInput = useCallback((leafValue, sequence) => {
    const lastIndex = sequence.splice(sequence.length - 1, 1)
    let nextVal = {...value}
    let workVal = nextVal
    sequence.forEach((i) => {
      const { [i]: updatedVal = {} } = workVal
      workVal[i] = {...updatedVal }
      workVal = workVal[i]
    })
    workVal[lastIndex] = leafValue
    onInput(nextVal)
  }, [value, onInput])


  const getLeafSelectedStatus = useCallback(memoize((children, selectionTree = {}) => {
   return children.every(({ [childrenKey]: nextChildren }, index) => {
      return nextChildren ? getLeafSelectedStatus(nextChildren, selectionTree[index]) : !!selectionTree[index]
    })

  }, resolver), [childrenKey])

  const handleSelectNode = useCallback((node) => {
    const { selectRule, onSelect, valueKey } = refProps.current
    if (selectRule(node, refProps.current)) {
      onSelect(node)
      setSelectedNode(node[valueKey])
    }

  }, [])

  const getSequence = useCallback((sequence) => sequence, [])

  return (
    <div>
      {options.map((item, index) => <Leaf
        draggable={draggable}
        key={item[valueKey]}
        value={value[index]}
        options={item}
        checkAble={checkAble}
        index={index}
        childrenKey={childrenKey}
        valueKey={valueKey}
        level={0}
        onInput={handleInput}
        onSelect={handleSelectNode}
        selectedNode={selectedNode}
        getSequence={getSequence}
        getLeafSelectedStatus={getLeafSelectedStatus}
        dropRule={dropRule}
        setDropState={setDropState}
        dropState={dropState}
        defaultExpandAll={defaultExpandAll}
      />
      )}
    </div>
  );
};

Tree.propTypes = {

};

Tree.defaultProps = {
  childrenKey: "children",
  valueKey: "id",
  labelKey: "title",
  value: {},
  onSelect: () => null,
  selectRule: (node, { childrenKey }) => !!node[childrenKey],
  dropRule: ({valueKey, parent: { [valueKey]: originParentKey}}, { parent: { [valueKey]: targetParentKey } = {} }) => {
    return originParentKey === targetParentKey
  }
};

export default Tree;