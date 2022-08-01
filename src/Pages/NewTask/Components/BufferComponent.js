import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu";
import React, {useCallback} from "react";
import {basketTrash} from "@/Icons/basketTrash";
import {StyleIcon} from "@/Components/styleIcon";
import ButtonsForDelete from "@/Pages/NewTask/Components/ButtonsForDelete";

const BufferComponent = ({onDelete, node: {id, title}}) => {
  const handleInitDelete = useCallback(({applyContextMenu, e}) => {
    e.stopPropagation()
    e.preventDefault()
    applyContextMenu([{
      component: ({onClose, title, onSubmit}) => {
        return <ButtonsForDelete title={title} onClose={onClose} onSubmit={onSubmit}/>
      },
      componentProps: {
        onSubmit: onDelete,
        title: "Удалить буфер?",
      }
    }])
  }, [onDelete])
  return (
    <div className="flex items-center">
      <div key={id}>
        {title}
      </div>
      <WithOpenContextMenu
        settings={{maxSize: "150", minSize: "150"}}
        onOpenContextMenu={handleInitDelete}
      >
        {(onOpenContextMenu) => (
          <StyleIcon title="Удалить буфер" className="m-l-5" onClick={onOpenContextMenu} icon={basketTrash}/>
        )}
      </WithOpenContextMenu>
    </div>
  )
}

export default BufferComponent
