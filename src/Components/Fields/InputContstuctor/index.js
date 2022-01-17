import React from "react"
import PropTypes from "prop-types"
import PencilEditor from "./EditButtons/PencilEditor"
import VerticalRender from "./LayoutHelpers/VerticalRender"
import DefaultPreview from "./PreviewFields/DefaultPreview"
import ContextMenuValueEditor from "./InputControllers/ContextMenuValueEditor"

const FieldConstructor = ({
  constructorProps: {
    layout: Layout = VerticalRender,
    preview: Preview = DefaultPreview,
    editor: Editor = ContextMenuValueEditor,
    editButton: EditButton = PencilEditor
  },
  noDataLabel,
  style,
  className,
  ...props
}) => {
  const { value } = props
  const editBtn = (
    <Editor {...props}>
      {(onEditValue) => (
        <EditButton {...props} onEditValue={onEditValue} />
      )}
    </Editor>
  )
  return (
    <Layout {...props} button={editBtn}>
      {(Array.isArray(value) ? value.length > 0 : value)
        ? <Preview {...props} style={style} className={className} />
        : <div className="color-greyDarken">{noDataLabel}</div>}
    </Layout>
  )
}

FieldConstructor.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.bool, PropTypes.number, PropTypes.string]),
  constructorProps: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  noDataLabel: PropTypes.string,
}
FieldConstructor.defaultProps = {
  constructorProps: {},
  noDataLabel: "no data"
}

export default FieldConstructor
