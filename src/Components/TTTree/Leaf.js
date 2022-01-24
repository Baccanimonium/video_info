import React, {useCallback, useRef, useState} from 'react'
import PropTypes from 'prop-types';
import {LeafContainer} from "@/Components/TTTree/styles"
import Icon from "@/Components/Icon"
import BsCheckbox from "@/Components/Fields/BsCheckBox"
import { CircleMinus } from "./Icons/CircleMinus"
import { CirclePlus } from "./Icons/CirclePlus"
import { Dot } from "./Icons/Dot"
import Row from "@/Components/TTTree/Row"

const PlusIcon = Icon(CirclePlus)
const MinusIcon = Icon(CircleMinus)
const DotICon = Icon(Dot)

const Leaf = (props) => {
  const {
    childrenKey, valueKey, options, options: { title, [childrenKey]: children, [valueKey]: leafVal }, level,
    onInput, index, value, defaultExpandAll, getLeafSelectedStatus, onSelect, selectedNode, draggable,
    checkAble, getSequence, dropRule, setDropState, dropState
  } = props

  const refProps = useRef(props)
  refProps.current = props

  const [borderState, setBorderState] = useState("")
  const [expanded, setExpanded] = useState(defaultExpandAll)

  const ComponentIcon = children ? expanded ? MinusIcon : PlusIcon : DotICon

  const toggleOpen = useCallback(() => setExpanded(v => !v), [])
  
  const handleInput = useCallback((value, sequence = []) => {
    sequence.unshift(index)
    onInput(value, sequence)

  }, [onInput, index])

  const checkBoxInput = useCallback((value) => {
    if (children) {
      const nextValue = {}
      const stack = [[options, []]]
      if (value) {
        for (let i = 0; i < stack.length; i++) {
          const [item, stackSequence] = stack[i];
          const {[childrenKey]: stackChildren} = item
          if (stackChildren) {
            stackChildren.forEach((item, index) => {
              stack.push([item, [...stackSequence, index]])
            })
          } else {
            let workVal = nextValue
            const lastIndex = stackSequence.splice(stackSequence.length - 1, 1)
            stackSequence.forEach((v) => {
              workVal = workVal[v]
            })
            workVal[lastIndex] = item[valueKey]
          }
        }
      }
      handleInput(nextValue)
    } else {
      handleInput(value ? leafVal : "")
    }
  }, [children, handleInput, childrenKey, options, valueKey, leafVal])

  const selectNode = useCallback(() => onSelect(options), [options])

  const onDragStart = useCallback(() => {
    const { getSequence, setDropState } = refProps.current
    setDropState({ node: refProps.current, sequence: getSequence() })
  }, [])

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

  return (
    <LeafContainer level={level} >
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
          value={children ? getLeafSelectedStatus(children, value) : !!value}
        />}
        <Row
          title={title}
          onClick={selectNode}
          selected={leafVal === selectedNode}
          borderState={borderState}
          draggable={draggable}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      </div>
      <div>
        {expanded && children && children.map((item, index) => <Leaf
          getSequence={handleGetSequence}
          dropRule={dropRule}
          draggable={draggable}
          key={item[valueKey]}
          options={item}
          checkAble={checkAble}
          index={index}
          level={level + 1}
          onInput={handleInput}
          value={value ? value[index] : null}
          getLeafSelectedStatus={getLeafSelectedStatus}
          onSelect={onSelect}
          selectedNode={selectedNode}
          parent={options}
          setDropState={setDropState}
          dropState={dropState}
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