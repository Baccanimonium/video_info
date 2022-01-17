import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { WS_URL } from "@/constants"
import PropTypes from "prop-types"
import { useRecoilState, useRecoilValue } from "recoil"
import { tokenAtom, userStateSelector } from "@/Store/userObject"
import useOpenModalWindow from "@/Core/Hooks/useOpenModalWindow"
import { setSocketInstance } from "@/Core/Socket/index"
import { reCalcItemSubNotifications, userNotifications } from "@/Store/userNotifications"
import { chatMessages, updateMessages, getChatState } from "@/Store/chatMessages"
import PureUpdateArrayItems from "@/Utils/Arrays/PureUpdateArrayItems"

const Socket = ({ updateTabHandler }) => {
  const openModalWindow = useOpenModalWindow()
  const [token, setToken] = useRecoilState(tokenAtom)
  const [messages, setNewMessages] = useRecoilState(chatMessages)
  const refChatMessages = useRef({})
  useEffect(() => {
    refChatMessages.current = messages
  }, [messages])

  const userState = useRecoilValue(userStateSelector)

  const [notification, setNotification] = useRecoilState(userNotifications)
  const refNotification = useRef({})
  useEffect(() => {
    refNotification.current = notification
  }, [notification])

  const refSocketState = useRef({ reconnectionAttempt: 0 })
  const [needToCreateSocket, setCreateSocketFlag] = useState(true)
  const [Socket, setSocket] = useState()
  const refSocket = useRef({})
  const onDisconnect = useCallback(() => {
    openModalWindow({
      dialogueParams: {
        cancelLabel: "OK",
        title: "Server has closed the connection"
      },
      message: "Need to re-enter your username and password"
    })
    setToken(undefined)
  }, [openModalWindow, setToken])

  const onClose = useCallback(() => {
    const { reconnectionAttempt } = refSocketState.current
    if (reconnectionAttempt < 3) {
      refSocketState.current.reconnectionAttempt += 1
      setCreateSocketFlag(true)
      refSocketState.current.reconnectInterval = setInterval(() => {
        // дожидаемся коннекта от сокета, если статус 0 - устанавливается соеденение и отключения апплай таймера
        if (refSocket.current.readyState > 0) {
          try {
            if (refSocketState.current.reconnectionAttempt < 3) {
              refSocketState.current.reconnectionAttempt += 1
              setCreateSocketFlag(true)
            } else {
              throw new Error("socket reconnection limit has reached")
            }
          } catch (e) {
            // убиваем стейт сокета, т.к. кол-во попыток исчерпанно
            onDisconnect()
          }
        }
      }, 15000)
    } else {
      onDisconnect()
    }
  }, [onDisconnect])

  const onConnect = useCallback(() => {
    clearTimeout(refSocketState.current.onConnectTimer)
    refSocketState.current.onConnectTimer = setTimeout(() => {
      clearInterval(refSocketState.current.reconnectInterval)
      refSocketState.current.reconnectionAttempt = 0
    }, 15000)
  }, [])

  const addNotification = useCallback((insertFunction) => (notification) => {
    const newNotifications = new Map(refNotification.current)
    const { ID_OBJ_OBJ, ID_OBJECT } = notification
    const nId = ID_OBJ_OBJ || ID_OBJECT
    newNotifications.set(nId, insertFunction(newNotifications.get(nId) || [], notification))
    setNotification(newNotifications)
  }, [setNotification])

  const addChatNotification = useMemo(
    () => addNotification((state, { ID_CHANEL, ID_ENTITY, MP_NAME, CHANEL, DATE_MESSAGE }) => {
      const newChanel = {
        DATE: DATE_MESSAGE,
        ID: ID_CHANEL,
        MSG_AMOUNT: 1,
        SYS_NAME: CHANEL
      }
      const notificationIndex = state.findIndex(item => item.ID === ID_ENTITY)
      if (notificationIndex >= 0) {
        const { CHANELS, ...notification } = state[notificationIndex]
        const messageIndex = CHANELS.findIndex(({ SYS_NAME }) => SYS_NAME === CHANEL)
        return PureUpdateArrayItems(state, notificationIndex, reCalcItemSubNotifications({
          ...notification,
          CHANELS: messageIndex >= 0
            ? PureUpdateArrayItems(CHANELS, messageIndex, {
              ...CHANELS[messageIndex],
              DATE: DATE_MESSAGE,
              MSG_AMOUNT: CHANELS[messageIndex].MSG_AMOUNT + 1
            }) : [newChanel]
        }))
      }
      return [
        reCalcItemSubNotifications({
          ALERTS: [],
          CHANELS: [newChanel],
          DATE: DATE_MESSAGE,
          ID: ID_ENTITY,
          SYS_NAME: MP_NAME
        }),
        ...state
      ]

    // return state
    }), [addNotification]
  )

  const addAlertNotification = useMemo(
    () => addNotification((state, { ENTITY_OBJ, ENTITY_NAME, DATE_STATUS, MESSAGE, ID, ICON, PRACTICE_ID }) => {
      const newAlert = {
        DATE: DATE_STATUS,
        ID,
        ICON,
        PRACTICE_ID,
        MSG_AMOUNT: 1,
        SYS_NAME: MESSAGE
      }
      const notificationIndex = state.findIndex(item => item.ID === ENTITY_OBJ)
      if (notificationIndex >= 0) {
        return PureUpdateArrayItems(state, notificationIndex, reCalcItemSubNotifications({
          ...state[notificationIndex], ALERTS: [newAlert, ...state[notificationIndex].ALERTS]
        }))
      }
      return [
        reCalcItemSubNotifications({
          ALERTS: [newAlert],
          CHANELS: [],
          DATE: DATE_STATUS,
          ID: ENTITY_OBJ,
          SYS_NAME: ENTITY_NAME
        }),
        ...state
      ]
    }), [addNotification]
  )

  const onMessage = useCallback((event) => {
    const data = JSON.parse(event.data)
    data.forEach(message => {
      const { TYPE, EVENT_TYPE } = message
      if (TYPE === "Push") {
        if (EVENT_TYPE === "Entity updated") {
          updateTabHandler(message)
        } else if (EVENT_TYPE === "Status updated") {
          updateTabHandler(message, true)
          updateTabHandler({ ...message, ID_OBJ_OBJ: 443 }, true) // всегда апдейтим список версий при изменении статуса
          if (message.ID_USER_FROM !== userState.ID) {
            addAlertNotification(message)
          }
        }
      } else if (TYPE === "Chat") {
        // добавляем сообщения
        setNewMessages(updateMessages(message)(refChatMessages.current, {
          messages: [...getChatState(message, refChatMessages.current).messages, message],
          quantityMessage: getChatState(message, refChatMessages.current).messages.length + 1
        }))
        if (message.ID_USER_FROM !== userState.ID) {
          // добавляем алерт
          addChatNotification(message)
        }
      }
    })
  }, [addAlertNotification, addChatNotification, setNewMessages, updateTabHandler, userState.ID])

  const createSocket = useCallback((token) => {
    const Socket = new WebSocket(`${WS_URL}${token.substr(0, 100)}`)
    Socket.onopen = onConnect
    Socket.onerror = (e) => console.error(`WebSocket Error: ${e}`)
    Socket.onclose = onClose
    Socket.onmessage = onMessage
    setSocket(Socket)
    setSocketInstance(Socket)
  }, [onClose, onConnect, onMessage])

  useEffect(() => {
    if (needToCreateSocket) {
      createSocket(token)
      setCreateSocketFlag(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needToCreateSocket])
  // удаляем сокет при выходе из компонента
  useEffect(() => () => {
    if (Socket) {
      delete Socket.onclose
      Socket.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

Socket.propTypes = {
  updateTabHandler: PropTypes.func.isRequired,
}

export default Socket
