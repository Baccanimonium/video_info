import React, {useCallback, useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {LeafContainer} from "@/Components/Tree/styles"
import Icon from "@/Components/Icon"
import BsCheckbox from "@/Components/Fields/BsCheckBox"
import { CircleMinus } from "./Icons/CircleMinus"
import { CirclePlus } from "./Icons/CirclePlus"
import { Dot } from "./Icons/Dot"
import Row from "@/Components/Tree/Row"

const PlusIcon = Icon(CirclePlus)
const MinusIcon = Icon(CircleMinus)
const DotICon = Icon(Dot)

const Leaf = (props) => {
  const {
    childrenKey, valueKey, options, options: { title, [childrenKey]: children, [valueKey]: leafVal }, level,
    onInput, index, defaultExpandAll, getLeafSelectedStatus, onSelect, selectedNode, draggable,
    checkAble, getSequence, dropRule, setDropState, dropState, rowComponent, parent, onUpdateOptions,
    onDeleteLeafOption, returnObjects
  } = props

  const refProps = useRef(props)
  refProps.current = props

  const [borderState, setBorderState] = useState("")
  const [expanded, setExpanded] = useState(defaultExpandAll)

  const ComponentIcon = children ? expanded ? MinusIcon : PlusIcon : DotICon

  const toggleOpen = useCallback(() => setExpanded(v => !v), [])

  const checkBoxInput = useCallback((value) => {
    if (children) {
      const nextValue = []
      const stack = [options]
      for (let i = 0; i < stack.length; i++) {
        const item = stack[i];

        const {[childrenKey]: stackChildren} = item
        if (stackChildren) {
          stackChildren.forEach((item) => {
            stack.push(item)
          })
        } else {
          nextValue.push([item[valueKey], returnObjects ? item : item[valueKey]])
        }
      }
      onInput(nextValue, value)
    } else {
      onInput( [[leafVal, returnObjects ? options : leafVal]], value)
    }
  }, [children, onInput, childrenKey, options, valueKey, leafVal, returnObjects])

  const onDragEnd = useCallback(() => {
    setBorderState("")
    setDropState(null)
  }, [])

  const onDrop = useCallback(() => {
    setBorderState("")
    setDropState(null)
  }, [options])

  const onDragOver = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
    const { dropRule, dropState: { node } } = refProps.current
    if (dropRule(node, refProps.current)) {
      const {nativeEvent: {y}, target} = event
      const {y: elementY, top, bottom} = target.getBoundingClientRect()
      const height = bottom - top

      setBorderState(height / (y - elementY) > 2 ? "top" : "bottom")
    }
  }, [])

  const onDragLeave = useCallback(() => {
    setBorderState("")
  }, [])

  const handleGetSequence = useCallback((sequence = []) => {
    sequence.unshift(index)
    return getSequence(sequence)
  }, [getSequence, index])

  const onUpdateLeafOption = useCallback((nextLeafValue) => {
    onUpdateOptions(nextLeafValue, index)
  }, [index, onUpdateOptions])

  const handleDeleteLeafOption = useCallback(() => {
    onDeleteLeafOption(index)
  }, [index, onDeleteLeafOption])


  const handleUpdateOptions = useCallback((nextLeafValue, childrenIndex) => {
    const { options, onUpdateOptions, index, childrenKey } =  refProps.current
    const nextOptions = {...options, [childrenKey]: [...options[childrenKey]]}
    nextOptions[childrenKey][childrenIndex] = nextLeafValue
    onUpdateOptions(nextOptions, index)
  }, [])

  const deleteLeaf = useCallback((childrenIndex) => {
    const { options, onUpdateOptions, index, childrenKey } =  refProps.current
    const nextOptions = {...options, [childrenKey]: [...options[childrenKey]]}
    nextOptions[childrenKey].splice(childrenIndex, 1)
    onUpdateOptions(nextOptions, index)
  }, [])

  const selectNode = useCallback(() => onSelect({node:options, sequence: handleGetSequence()}), [options, handleGetSequence])

  const onDragStart = useCallback(() => {
    const { setDropState } = refProps.current
    setDropState({ node: refProps.current, sequence: handleGetSequence() })
  }, [handleGetSequence])

  return (
    <LeafContainer level={level} selected={leafVal === selectedNode}>
      <div
        className="display-flex a-i-center"
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        <ComponentIcon onClick={toggleOpen} size={children ? 12 : 4} className="m-r-5"/>
        {checkAble && <BsCheckbox
          className="m-r-5"
          onInput={checkBoxInput}
          value={getLeafSelectedStatus(options)}
        />}
        <Row
          title={title}
          onClick={selectNode}
          selected={leafVal === selectedNode}
          borderState={borderState}
          draggable={draggable}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          node={options}
          parent={parent}
          rowComponent={rowComponent}
          onInput={onUpdateLeafOption}
          onDelete={handleDeleteLeafOption}
        />
      </div>
      <div>
        {expanded && children && children?.map((item, index) =>
          <Leaf
            returnObjects={returnObjects}
            getSequence={handleGetSequence}
            dropRule={dropRule}
            draggable={draggable}
            key={item[valueKey]}
            options={item}
            checkAble={checkAble}
            index={index}
            level={level + 1}
            onInput={onInput}
            getLeafSelectedStatus={getLeafSelectedStatus}
            onSelect={onSelect}
            selectedNode={selectedNode}
            parent={options}
            defaultExpandAll={defaultExpandAll}
            setDropState={setDropState}
            dropState={dropState}
            rowComponent={rowComponent}
            onUpdateOptions={handleUpdateOptions}
            onDeleteLeafOption={deleteLeaf}
          />)}
      </div>
    </LeafContainer>
  );
};

Leaf.propTypes = {

};

Leaf.defaultProps = {
  childrenKey: "children",
  valueKey: "id",
  labelKey: "title",
};

export default Leaf;
