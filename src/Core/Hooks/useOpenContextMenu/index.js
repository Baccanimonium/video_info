import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu"
import { useCallback } from "react"

export default (config) => WithOpenContextMenu({
  ...config,
  children: useCallback((onOpenContextMenu, onUpdateContextMenu) => ([onOpenContextMenu, onUpdateContextMenu]), [])
})
