import { useContext, useMemo } from "react"
import { PermissionsContext } from "@/constants"

export default (config) => {
  const { CHILDRENS } = useContext(PermissionsContext)
  return useMemo(() => config.reduce((acc, item) => {
    if (!item.ID_ENTITY_OBJ) {
      acc.push(item)
    } else {
      const config = CHILDRENS.find(({ ID_ENTITY_OBJ }) => item.ID_ENTITY_OBJ === ID_ENTITY_OBJ)
      if (config) {
        const { ID_OBJ_OBJ, ID_SUBOBJ_OBJ, ACCESS_VALUE_OBJ = "" } = config
        acc.push({ ID_OBJ_OBJ, ID_SUBOBJ_OBJ, ...item, disabled: ACCESS_VALUE_OBJ[5] === "0" ? true : item.disabled })
      }
    }
    return acc
  }, []), [config, CHILDRENS])
}
