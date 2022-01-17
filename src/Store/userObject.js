import { atom, selector } from "recoil"
import history from "@/history"

export const TOKEN_KEY = "user-token"
const initToken = localStorage.getItem(TOKEN_KEY)

export const AuthRequest = () => "token"

export const tokenAtom = atom({ key: "token", default: history.location.pathname !== "/login" ? initToken : undefined })
