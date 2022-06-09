import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu";
import {CardForCondition, StyleTrashIcon} from "@/Pages/Tab/Pages/SelectionCriteria/Components/styles";
import React, {useCallback} from "react";
import BsButton from "@/Components/BsButton";

const BufferComponent = ({onDelete, node: {id, title, type}, node}) => {
  const handleInitDelete = useCallback(({applyContextMenu, e}) => {
    e.stopPropagation()
    e.preventDefault()
    applyContextMenu([{
      component: ({onClose, title, onSubmit}) => {
        return <div className="display-flex a-i-center flex-column p-15">
          <div>{title}</div>
          <div className="display-flex a-i-center m-t-20 j-c-space-between w-100">
            <BsButton className="btn grey-bg" onClick={onSubmit}>Да</BsButton>
            <BsButton className="btn golden" onClick={onClose}>Нет</BsButton>
          </div>
        </div>
      },
      componentProps: {
        onSubmit: onDelete,
        title: "Удалить узел?",
      }
    }])
  }, [onDelete])
  return (
    <div>
      <div className="display-flex a-i-center">
        <div key={id}>
          {title}
        </div>
        <WithOpenContextMenu
          settings={{maxSize: "150", minSize: "150"}}
          onOpenContextMenu={handleInitDelete}
        >
          {(onOpenContextMenu) => (
            <StyleTrashIcon title="Удалить узел" className="m-l-5" onClick={onOpenContextMenu}/>
          )}
        </WithOpenContextMenu>
      </div>
    </div>
  )
}

export default BufferComponent
