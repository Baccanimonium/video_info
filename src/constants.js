import React from "react"

export const FormContainerContext = React.createContext(document.body)
export const ScrollContainer = React.createContext(document.body)

export const PRESENT_DATE_FORMAT = "DD.MM.YYYY"
export const DEFAULT_DATE_FORMAT = "DD.MM.YYYY HH:mm"

export const RouteContext = React.createContext({ path: "/", onOpenNewTab: () => null })


export const REF_SERVICE_URL = "ref/"
