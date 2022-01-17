import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ObjectPermissionContext, permissionIndexes, permissionsKeys } from "@/constants"

const withCheckPermissionAvailabilityBeforeRender = (Component) => {
  const PermissionChecker = ({ permissionKey, ...props }) => {
    const { [permissionIndexes[permissionKey]]: permission } = useContext(ObjectPermissionContext)
    return (!permissionKey || permission === "1") && <Component {...props} />
  }
  PermissionChecker.propTypes = {
    permissionKey: PropTypes.oneOf(permissionsKeys),
  }
  return PermissionChecker
}

export const DefaultPermissionAvailabilityChecker = withCheckPermissionAvailabilityBeforeRender("div")

export default withCheckPermissionAvailabilityBeforeRender
