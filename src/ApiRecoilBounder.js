import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { tokenAtom } from "@/Store/userObject"
import { apiRecoilBound } from "@/api"
import useOpenModalWindow from "@/Core/Hooks/useOpenModalWindow"

const ApiRecoilBounder = () => {
  const openAlertWindow = useOpenModalWindow()
  const [token, setToken] = useRecoilState(tokenAtom)

  useEffect(() => {
    if (token) {
      apiRecoilBound.logout = () => setToken(undefined)
      apiRecoilBound.openAlertWindow = openAlertWindow
    }
    return () => {
      delete apiRecoilBound.logout
      delete apiRecoilBound.openAlertWindow
    }
  }, [openAlertWindow, setToken, token])

  return null
}

export default ApiRecoilBounder
