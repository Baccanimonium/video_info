import React, {useCallback, useState} from "react";
import {basketTrash} from "@/Icons/basketTrash";
import {StyleIcon} from "@/Components/styleIcon";
import ButtonsForDelete from "@/Pages/NewTask/Components/ButtonsForDelete";
import {ThemedContextMenu} from "@/Components/ContextMenus";

const BufferComponent = ({onDelete, node: {id, title}}) => {
  const [contextMenuOpened, setContextMenuState] = useState(false)

  const toggleContextMenuState = useCallback(() => setContextMenuState(s => !s), [])

  return (
    <div className="flex items-center">
      <div key={id}>
        {title}
      </div>
      <div>
        <StyleIcon title="Удалить буфер" className="ml-1.5" onClick={toggleContextMenuState} icon={basketTrash}/>
        {contextMenuOpened && <ThemedContextMenu onClose={toggleContextMenuState} width={220}>
          <ButtonsForDelete onClose={toggleContextMenuState} onSubmit={() => {
            onDelete()
            toggleContextMenuState()
          }} title="Удалить буфер?"/>
        </ThemedContextMenu>}
      </div>
    </div>
  )
}

export default BufferComponent
