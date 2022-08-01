import React, { useCallback } from "react"
import PropTypes from "prop-types"
import Icon from "@/Components/Icon/index"
import { refreshPassGen } from "@/Icons/refreshPassGen"
import { newApiService } from "@/api"
import { URL_GENERATE_PASS } from "@/APIList"

const RefreshPassGenIcon = Icon(refreshPassGen)

export default (OriginalComponent) => {
  const GeneratePassComponent = ({ onInput, ...props }) => {
    const generatePassword = useCallback(async () => {
      const passGen = await newApiService.get(URL_GENERATE_PASS)
      onInput(passGen, "NEW_PASSWORD_1")
      onInput(passGen, "NEW_PASSWORD_2")
    }, [onInput])
    return (
      <button
        className="flex items-center"
        type="button"
        onClick={generatePassword}
      >
        <OriginalComponent
          {...props}
          className="flex align-content-start fw700 color-lightGold"
        />
        <RefreshPassGenIcon className="m-l-10" />
      </button>
    )
  }

  GeneratePassComponent.propTypes = {
    onInput: PropTypes.func.isRequired,
  }
  return GeneratePassComponent
}
