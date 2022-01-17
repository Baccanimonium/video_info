import React from "react"
import PropTypes from "prop-types"
import useDeadlineProgressBar from "@/Core/Hooks/useDeadlineProgressBar"
import BsProgressbar from "@/Components/ProgressBars/BsProgressBar"
import DatePreview from "@/Components/Fields/InputContstuctor/PreviewFields/DatePreview"

const DeadlineDatePreview = ({ value, formPayload, creationKey, deadlineKey }) => (
  <div>
    <DatePreview value={value} />
    <BsProgressbar customStyles={useDeadlineProgressBar(formPayload[creationKey], formPayload[deadlineKey])} />
  </div>
)

DeadlineDatePreview.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  formPayload: PropTypes.object,
  creationKey: PropTypes.string,
  deadlineKey: PropTypes.string,
}

export default DeadlineDatePreview
