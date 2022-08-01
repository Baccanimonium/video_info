import React from "react"
import PropTypes from "prop-types"
import Icon from "@/Components/Icon/index"
import { close } from "@/Icons/close"

const CloseIcon = Icon(close)

const TagComponent = ({ client, prefix, closeTag }) => (
  <div
    className="fs-14 bg-color-blackDarken-1 relative p-t-5 p-b-5 p-r-15 p-l-15
     m-b-5 b-r-4 w-100 flex j-c-space-between items-center"
  >
    <div>
      <div className="color-greyDarken fs-10 l-h-12">
        {prefix}
      </div>
      <div className="color-white">
        {typeof client === "object" ? client.SYS_NAME : client}
      </div>
    </div>
    <CloseIcon
      size="13"
      className="color-greyDarken-1"
      onClick={closeTag}
    />
  </div>
)

TagComponent.propTypes = {
  client: PropTypes.object,
  prefix: PropTypes.string,
  closeTag: PropTypes.func
}

export default TagComponent
