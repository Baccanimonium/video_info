import React, { useCallback } from "react"
import PropTypes from "prop-types"
import TipsOverlayComponent from "@/Components/TipsHelp/TipsOverlayComponent"
import useOpenTip from "@/Core/Hooks/useOpenTip"
import { SwitchBlock, SwitchLabel, ContainerSwitch, Circle } from "./styles"

// TODO Разобраться со styleSwitch
const Switch = ({
  id, fieldLabel, appendix: { on, off }, value, showInactivity, stringOutput, onInput, className, style,
  tipsTextOn, tipsTitleOn, tipsTextOff, tipsTitleOff
}) => {
  const { event, showTips, closeTips } = useOpenTip()

  return (
    <SwitchBlock
      errorSwitch={stringOutput ? value !== stringOutput[0] : (showInactivity && !value)}
      onClick={useCallback(
        () => {
          onInput(stringOutput
            ? value === stringOutput[0] ? stringOutput[1] : stringOutput[0]
            : typeof value === "number"
              ? value === 1
                ? 0
                : 1
              : !value, id)
        },
        [id, onInput, stringOutput, value]
      )}
      className={className}
      style={style}
      onMouseEnter={showTips}
      onMouseLeave={closeTips}
    >
      <SwitchLabel>
        {fieldLabel && (
          <span className="m-r-10 capitalize">
            {fieldLabel}
          </span>
        )}
        <span className="m-r-10">{ stringOutput
          ? value === stringOutput[0] ? on : off
          : value ? on : off }
        </span>
      </SwitchLabel>
      <ContainerSwitch>
        <Circle activeSwitch={stringOutput
          ? value === stringOutput[0] : value}
        />
      </ContainerSwitch>
      <TipsOverlayComponent
        tipsText={stringOutput
          ? value === stringOutput[0] ? tipsTextOn : tipsTextOff
          : value ? tipsTextOn : tipsTextOff}
        tipsTitle={stringOutput
          ? value === stringOutput[0] ? tipsTitleOn : tipsTitleOff
          : value ? tipsTitleOn : tipsTitleOff}
        event={event}
      />
    </SwitchBlock>
  )
}

Switch.propTypes = {
  id: PropTypes.string,
  fieldLabel: PropTypes.string,
  appendix: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  showInactivity: PropTypes.bool,
  onInput: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  stringOutput: PropTypes.array,
  tipsTextOn: PropTypes.string,
  tipsTitleOn: PropTypes.string,
  tipsTextOff: PropTypes.string,
  tipsTitleOff: PropTypes.string,
}

Switch.defaultProps = {
  appendix: {
    on: "on",
    off: "off"
  },
  showInactivity: false,
  value: ""
}

export default Switch
