import Icon from "@/component_ocean/Components/Icon"
import { close } from "@/Icons/close"
import { toggleIndicator } from "@/Icons/toggleIndicator"
import { dragIndicator } from "@/Icons/dragIndicator"
import { removeIcon } from "@/component_ocean/Icons/removeIcon"
import { apply } from "@/Icons/apply"
import { editIcon } from "@/Icons/editIcon"
import { basketTrash } from "@/Icons/basketTrash"

export const IconClose = (props) => <Icon {...props} icon={close} />
export const EditIcon = (props) => <Icon {...props} icon={editIcon} />
export const IconToggleIndicator = (props) => <Icon {...props} icon={toggleIndicator} />
export const IconDragIndicator = (props) => <Icon {...props} icon={dragIndicator} />
export const RemoveIcon = (props) => <Icon {...props} icon={removeIcon} />
export const ApplyIcon = (props) => <Icon {...props} icon={apply} />
export const TrashIcon = (props) => <Icon {...props} icon={basketTrash} />
