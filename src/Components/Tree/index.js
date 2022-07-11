import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
    defaultExpandAll, rowComponent, onUpdateOptions, style, className, returnObjects
  } = props

  const [selectedState, setSelectedState] = useState(new Map())
  const refValue = useRef([])

  useEffect(() => {
    if (value !== refValue.current) {
      setSelectedState(value.reduce(returnObjects
        ? (acc, item) => {
          acc.set(item[valueKey], item)
          return acc
        }
        : (acc, item) => {
          acc.set(item, item)
          return acc
        }, new Map()))
      refValue.current = value
    }
  }, [value])


  const [selectedNode, setSelectedNode] = useState("")
  const [dropState, setDropState] = useState(null)

  const handleInput = useCallback((values, insert) => {
    setSelectedState(prevSelectedState => {
      const nextMap = new Map(prevSelectedState)
      values.forEach(insert
        ? ([key, v]) => nextMap.set(key, v)
        : ([key]) => nextMap.delete(key))

      const nextValue = []
      for (const v of nextMap.values()) {
        nextValue.push(v)
      }
      refValue.current = nextValue
      onInput(nextValue)
      return nextMap
    })
  }, [onInput])


  const getLeafSelectedStatus = useMemo(() => memoize((item) => {
    return item[childrenKey] && item[childrenKey].length > 0
      ? item[childrenKey].every(c => getLeafSelectedStatus(c))
      : selectedState.has(item[valueKey])
  }, resolver), [selectedState, childrenKey])

  const handleSelectNode = useCallback((selectedState) => {
    const {selectRule, onSelect, valueKey} = refProps.current
    if (selectRule(selectedState.node, refProps.current)) {
      onSelect(selectedState)
      setSelectedNode(selectedState.node[valueKey])
    }

  }, [])

  const getSequence = useCallback((sequence) => sequence, [])

  const handleUpdateOptions = useCallback((nextLeafValue, childrenIndex) => {
    const {options, onUpdateOptions} = refProps.current = props
    const nextOptions = [...options]
    nextOptions[childrenIndex] = nextLeafValue
    onUpdateOptions(nextOptions)
  }, [])

  const deleteLeaf = useCallback((childrenIndex) => {
    const {options, onUpdateOptions, index} = refProps.current = props
    const nextOptions = [...options]
    nextOptions.splice(childrenIndex, 1)
    onUpdateOptions(nextOptions, index)
  }, [])

  return (
    <div style={style} className={className}>
      {options.map((item, index) =>
        <Leaf
          draggable={draggable}
          key={item[valueKey]}
          options={item}
          returnObjects={returnObjects}
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
  style: PropTypes.object,

};

Tree.defaultProps = {
  className: "",
  options: [],
  childrenKey: "children",
  valueKey: "id",
  labelKey: "title",
  value: [],
  onSelect: () => null,
  onUpdateOptions: () => null,
  selectRule: (node, {childrenKey}) => !!node[childrenKey],
  dropRule: ({valueKey, parent: {[valueKey]: originParentKey} = {}}, {parent: {[valueKey]: targetParentKey} = {}}) => {
    return originParentKey === targetParentKey
  },
  style: {},
};

export default Tree;
