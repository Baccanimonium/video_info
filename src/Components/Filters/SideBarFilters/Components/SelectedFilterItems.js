import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { IconDragIndicator, TrashIcon } from "@/Components/Icon/CommonIcons"
import ScrollBar from "@/Components/ScrollBar"
import styled from "styled-components"
import WithMoveAbleItems from "@/Core/RenderProps/WithMoveAbleItems"
import DeleteContainer from "@/Components/DragAndDropStyle/DeleteContainer"
import RenderAutoScroll from "@/Core/RenderProps/RenderAutoScroll"

const SelectedElement = styled.div`
  margin-right: 5px;
`

const SelectedFilterItems = ({ value, labelKey, onInput, id }) => {
  const inputValue = useCallback((value) => {
    onInput(value, id)
  }, [id, onInput])
  return (
    <div className="flex fd-column h-full overflow-hidden">

      <WithMoveAbleItems
        value={value}
        onInput={inputValue}
      >
        {({
          value, onDragStart, onDragEnd, onDragEnter, onDropAndDelete, onDragOverDeleteContainer, isItemMoving
        }) => (
          <>
            <RenderAutoScroll>
              {({ refContainer, onStartScroll }) => (
                <ScrollBar
                  ref={refContainer}
                  className="flex flex-wrap h-full"
                >
                  {value.map(({ [labelKey]: label, suppressFilter }, index) => (
                    <SelectedElement
                      draggable={!suppressFilter}
                      type="button"
                      onDragEnter={onDragEnter(index)}
                      onDragStart={onDragStart(index)}
                      onDragEnd={onDragEnd}
                      onMouseDown={onStartScroll}
                      key={label}
                      className="cursor-grab no-user-select bg-color-blackDarken-1 p-l-10 p-r-10 p-t-5 p-b-5 m-b-5 flex items-center"
                    >
                      <IconDragIndicator
                        size="12"
                        className="no-pointer-events"
                      />
                      <span className="m-l-10 no-pointer-events">{label}</span>
                    </SelectedElement>
                  ))}
                </ScrollBar>
              )}
            </RenderAutoScroll>
            <DeleteContainer
              type="button"
              className="m-t-20 flex fw-300"
              isItemMoving={isItemMoving}
              onDrop={onDropAndDelete}
              onDragOver={onDragOverDeleteContainer}
            >
              <TrashIcon className="m-r-10" />
              <span>Drag&drop tag to delete</span>
            </DeleteContainer>
          </>
        )}
      </WithMoveAbleItems>
    </div>
  )
}

SelectedFilterItems.propTypes = {
  onInput: PropTypes.func.isRequired,
  id: PropTypes.string,
  value: PropTypes.array,
  labelKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

SelectedFilterItems.defaultProps = {
  value: []
}
export default SelectedFilterItems
