import React, { useState } from "react"
import PropTypes from "prop-types"
import BsInput from "@/Components/Fields/BsInput"
import BsButton from "@/Components/BsButton"
import { IconClose } from "@/Components/Icon/CommonIcons"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"
import { useWatch } from "@/Utils/hooks/useWatch"
import PureUpdateArrayItems from "@/Utils/Arrays/PureUpdateArrayItems"

const MultipleInput = ({
  value, inputStyle, InputComponent, idKey, maxlength, placeholder, addButtonLabel,
  onInput, id
}) => {
  const [inputCount, editInputCount] = useState(1)
  const [inputMap, editInputMap] = useState([])
  const [tempData, editTempData] = useState(undefined)

  useWatch(value, (newValue, { length: prevLength = 0 } = {}) => {
    if (newValue !== tempData) {
      const { length } = value
      if (length > 0) {
        let nextInputCount = length - prevLength
        nextInputCount = nextInputCount > 0 ? nextInputCount : 1
        const tempMap = new Array(nextInputCount).fill(0)
        for (let i = 0; i < nextInputCount; i++) {
          tempMap[i] = 1
        }
        editInputCount(nextInputCount)
        editInputMap(tempMap)
      }
    }
    editTempData(undefined)
  })

  const emitValue = (value) => {
    editTempData(value)
    onInput(value, id)
  }

  const deleteInput = (index, virtualInput, i) => () => {
    editInputCount(inputCount - 1)
    if (!virtualInput) {
      editInputMap(PureDeleteItems(inputMap, i))
      emitValue(PureDeleteItems(value, index - 1))
    } else {
      editInputMap(PureDeleteItems(inputMap, index))
    }
    if (inputCount === 0) {
      editInputCount(1)
    }
  }

  const handleInput = (realIndex, virtualInput) => (valueField, id) => {
    const newArray = [...value]
    editInputMap(PureUpdateArrayItems(inputMap, id, 1))
    if (virtualInput && realIndex !== value.length) {
      newArray.splice(realIndex, 0, valueField)
    } else {
      newArray[realIndex] = valueField
    }
    emitValue(newArray)
  }

  const inputs = []
  let realIndex = 0
  let i = 0
  for (i; i < inputCount; i++) {
    let v
    let virtualInput = true
    const realInputIndex = realIndex
    if (inputMap[i] === 1) {
      virtualInput = false
      v = value[realIndex]
      realIndex++
    }
    inputs.push(
      <div
        key={i}
        className={`${i > 0 ? "p-t-10" : ""}`}
      >
        {i > 0 && (
        <button
          type="button"
          onClick={deleteInput(realIndex, virtualInput, i)}
          className="flex j-c-flex-end"
        >
          <IconClose size="8" className="p-b-5" />
        </button>
        )}
        <InputComponent
          id={i}
          value={v}
          idKey={idKey}
          maxLength={maxlength}
          placeholder={placeholder}
          onInput={handleInput(realInputIndex, virtualInput)}
        />
      </div>
    )
  }

  return (
    <div style={inputStyle}>
      {inputs}
      <BsButton
        onClick={() => editInputCount(inputCount + 1)}
        className="color-lightGold p-t-10"
        type="button"
      >
        {addButtonLabel}
      </BsButton>
    </div>
  )
}

MultipleInput.propTypes = {
  value: PropTypes.array,
  inputStyle: PropTypes.object,
  InputComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  idKey: PropTypes.string,
  maxlength: PropTypes.number,
  placeholder: PropTypes.string,
  addButtonLabel: PropTypes.string,
  onInput: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

MultipleInput.defaultProps = {
  maxlength: 500,
  addButtonLabel: "+ Add more",
  InputComponent: BsInput,
  value: []
}

export default MultipleInput
