import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ScrollContainer } from "@/constants"
import { TipsOverlay } from "./styles"

const TipsOverlayComponent = ({ tipsText, tipsTitle, event, fieldRef }) => {
  const refContainer = useContext(ScrollContainer)

  return (
    <>
      {event && (tipsText || tipsTitle) && (
      <TipsOverlay
        className="color-blackDarken-1"
        refContainer={refContainer}
        refTargetParent={fieldRef}
        event={event}
      >
        {tipsTitle && (
          <div className="display-i-b">
            { tipsTitle }
          </div>
        )}
        <div>
          { tipsText }
        </div>
      </TipsOverlay>
      )}
    </>
  )
}

TipsOverlayComponent.propTypes = {
  tipsText: PropTypes.string,
  tipsTitle: PropTypes.string,
  fieldRef: PropTypes.instanceOf(Element),
  event: PropTypes.object,
}

export default TipsOverlayComponent
