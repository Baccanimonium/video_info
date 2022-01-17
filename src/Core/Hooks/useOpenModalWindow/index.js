import { useRecoilState } from "recoil"
import { alertsAtom } from "@/Store/alerts"
import { useCallback } from "react"

export default () => {
  const [modals, openModal] = useRecoilState(alertsAtom)

  return useCallback((object) => openModal([...modals, object]), [modals, openModal])
}
