import React from "react"
import PropTypes from "prop-types"
import BsProgressbar from "@/Components/ProgressBars/BsProgressBar"
import useDeadlineProgressBar from "@/Core/Hooks/useDeadlineProgressBar"
import { ProgressBarContainer, ProgressBarTitle } from "./styles"

const BsDateProgressbar = ({ creationDate, deadlineDate }) => {
  const styles = useDeadlineProgressBar(creationDate, deadlineDate)
  return deadlineDate && (
  <ProgressBarContainer className="flex jc-fe items-center">
    <ProgressBarTitle className="color-grey p-r-13">
      Deadline
    </ProgressBarTitle>
    <div className="m-b-3">
      <div className="flex jc-fe fs-12 color-greyLight-6">
        {deadlineDate}
      </div>
      <BsProgressbar customStyles={styles} />
    </div>
  </ProgressBarContainer>
  )
}

BsDateProgressbar.propTypes = {
  creationDate: PropTypes.string.isRequired,
  deadlineDate: PropTypes.string.isRequired
}

export default BsDateProgressbar
