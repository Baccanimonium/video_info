import React, { useMemo } from "react"
import PropTypes from "prop-types"
import WithOpenContextMenu from "@/Core/RenderProps/WithOpenContextMenu"
import { ContextMenuForm } from "@/Components/Forms/StateFullForm"
import PreviewValueContextMenu from "@/Components/ContextMenu/PreviewValueContextMenu"

const ContextMenuValueEditor = ({
  children, fields, overlayForm, previewable, previewOverlayForm, id, onInput, value, label, rules, minSize,
  maxSize, title, ...props
}) => {
  const OpenEditForm = async ({ applyContextMenu }) => {
    const innerLabel = `${(Array.isArray(value) ? value.length > 0 : !!value) ? "Edit" : "Add"} ${label.toLowerCase()}`
    const normalizedFields = typeof fields === "function" ? fields() : fields
    await applyContextMenu([{
      component: overlayForm,
      onSubmit: ({ [id]: value }) => onInput(value, id),
      componentProps: {
        initPayload: { [id]: value },
        rules,
        fields: [{
          ...props,
          label: innerLabel,
          placeholder: innerLabel,
          ...normalizedFields,
          id,
        }]
      }
    }])
  }

  const openPreviewForm = ({ onUpdateContextMenu, applyContextMenu }) => applyContextMenu([{
    component: previewOverlayForm,
    componentProps: {
      ...props,
      text: value,
      textBtn: label,
      title,
      onEdit: onUpdateContextMenu
    }
  }])

  return (
    <WithOpenContextMenu
      settings={useMemo(() => ({ minSize, maxSize }), [maxSize, minSize])}
      onOpenContextMenu={value && previewable ? openPreviewForm : OpenEditForm}
      onUpdateContextMenu={OpenEditForm}
    >
      {children}
    </WithOpenContextMenu>
  )
}

ContextMenuValueEditor.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  overlayForm: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  previewOverlayForm: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.func]),
  onClose: PropTypes.func,
  onInput: PropTypes.func,
  minSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fields: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.bool, PropTypes.number, PropTypes.string]),
  previewable: PropTypes.bool,
  title: PropTypes.string,
  rules: PropTypes.object,
}

ContextMenuValueEditor.defaultProps = {
  id: "default",
  label: "",
  overlayForm: ContextMenuForm,
  previewOverlayForm: PreviewValueContextMenu,
  title: ""
}

export default ContextMenuValueEditor
