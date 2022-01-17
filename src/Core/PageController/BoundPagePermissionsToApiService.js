import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { apiRecoilBound } from "@/api"

export default (Component) => {
  const BoundPagePermissionsToApiService = React.forwardRef((props, ref) => {
    const { pageRights: { ID_OBJ_OBJ, ID_SUBOBJ_OBJ } = {} } = props
    useEffect(() => {
      apiRecoilBound.params = { v_id_object: ID_OBJ_OBJ, v_id_sub_object: ID_SUBOBJ_OBJ }
    }, [ID_OBJ_OBJ, ID_SUBOBJ_OBJ])
    return (
      <Component
        ref={ref}
        {...props}
      />
    )
  })
  BoundPagePermissionsToApiService.propTypes = {
    pageRights: PropTypes.shape({
      ID_OBJ_OBJ: PropTypes.number,
      ID_SUBOBJ_OBJ: PropTypes.number,
    })
  }

  return BoundPagePermissionsToApiService
}
