import Icon from "@/component_ocean/Components/Icon"
import { close } from "@/Icons/close"
import { toggleIndicator } from "@/Icons/toggleIndicator"
import { dragIndicator } from "@/Icons/dragIndicator"
import { removeIcon } from "@/component_ocean/Icons/removeIcon"
import { apply } from "@/Icons/apply"
import { editIcon } from "@/Icons/editIcon"
import { basketTrash } from "@/Icons/basketTrash"

export const IconClose = () => <Icon icon={close} />
export const EditIcon = () => <Icon icon={editIcon} />
export const IconToggleIndicator = () => <Icon icon={toggleIndicator} />
export const IconDragIndicator = () => <Icon icon={dragIndicator} />
export const RemoveIcon = () => <Icon icon={removeIcon} />
export const ApplyIcon = () => <Icon icon={apply} />
export const TrashIcon = () => <Icon icon={basketTrash} />
