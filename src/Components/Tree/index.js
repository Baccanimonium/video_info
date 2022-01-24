import React, {useCallback, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {memoize} from "lodash/function";
import Leaf from "@/Components/Tree/Leaf";
import MemoResolver from "@/Utils/MemoResolver";

const resolver = MemoResolver()

const Tree = (props) => {
  const refProps = useRef(props)
  refProps.current = props
  const {
    value, onInput, onDrag, childrenKey, valueKey, labelKey, checkAble, options, draggable, dropRule,
    defaultExpandAll, rowComponent, onUpdateOptions
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

  const handleSelectNode = useCallback((selectedState) => {
    const { selectRule, onSelect, valueKey } = refProps.current
    if (selectRule(selectedState.node, refProps.current)) {
      onSelect(selectedState)
      setSelectedNode(selectedState.node[valueKey])
    }

  }, [])

  const getSequence = useCallback((sequence) => sequence, [])

  const handleUpdateOptions = useCallback((nextLeafValue, childrenIndex) => {
    const { options, onUpdateOptions } =  refProps.current = props
    const nextOptions = [...options]
    nextOptions[childrenIndex] = nextLeafValue
    onUpdateOptions(nextOptions)
  }, [])

  const deleteLeaf = useCallback((childrenIndex) => {
    const { options, onUpdateOptions, index } =  refProps.current = props
    const nextOptions = [...options]
    nextOptions.splice(childrenIndex, 1)
    onUpdateOptions(nextOptions, index)
  }, [])

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
        rowComponent={rowComponent}
        onUpdateOptions={handleUpdateOptions}
        onDeleteLeafOption={deleteLeaf}
      />
      )}
    </div>
  );
};

Tree.propTypes = {

};

Tree.defaultProps = {
  options: [],
  childrenKey: "children",
  valueKey: "id",
  labelKey: "title",
  value: {},
  onSelect: () => null,
  onUpdateOptions: () => null,
  selectRule: (node, { childrenKey }) => !!node[childrenKey],
  dropRule: ({valueKey, parent: { [valueKey]: originParentKey } = {}}, { parent: { [valueKey]: targetParentKey } = {} }) => {
    return originParentKey === targetParentKey
  }
};

export default Tree;