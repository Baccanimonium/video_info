import React, { useCallback, useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { newApiService } from "@/api"
import { URL_MEDIA_MEDIASTATUS, URL_MEDIASTATUSES } from "@/APIList"
import useOpenModalWindow from "@/Core/Hooks/useOpenModalWindow"
import unwrapBackEndFormFieldsSchema from "@/Utils/unwrapBackEndFormFieldsSchema"

const GraphState = Symbol("statusState")
export const DocumentBusinessProcessButtons = React.createContext({})
const defaultObject = {}
const DocumentStatusesController = ({ document, onInput, children, changeStatusInterceptor }) => {
  const [idButtonInWork, setButtonInWork] = useState()
  const openModalWindow = useOpenModalWindow()
  const data = useMemo(() => {
    const { [GraphState]: { data = defaultObject } = {} } = document
    return data
  }, [document])

  const changeStatus = useCallback(async (ID_STATUS, FORM_DATA) => {
    try {
      // всегда перед сменой статус уведомляем родителя, по факту просим родителя сделать сейв
      await changeStatusInterceptor()
      await newApiService.put(URL_MEDIA_MEDIASTATUS, {
        ID_STATUS,
        ID_PREV_STATUS: document.ID_STATUS,
        param: false,
        PRACTICE: document.ID,
        ID: document.ID_BRIEF,
        FORM_DATA
      }, {
        errorMessage: "Произошла ошибка при обновлении медиаплана"
      })
    } catch (e) {
      console.log(e, "не удалось сменить статус")
    }
  }, [changeStatusInterceptor, document.ID, document.ID_BRIEF, document.ID_STATUS])

  const openModalBeforeChangeStatus = useCallback((STATUS_ONCLICK, { SYS_NAME, ITEMS, MESSAGE = SYS_NAME }) => new Promise(resolve => {
    openModalWindow({
      dialogueParams: {
        title: SYS_NAME,
        cancelLabel: "Send"
      },
      onSubmit: async v => {
        await changeStatus(STATUS_ONCLICK, v)
        resolve()
      },
      onCancel: resolve,
      ...ITEMS.length > 0
        ? {
          componentProps: {
            initPayload: { SYS_NAME },
            ...unwrapBackEndFormFieldsSchema(ITEMS)
          }
        }
        : { message: MESSAGE }
    })
  }), [changeStatus, openModalWindow])

  // загружаем данные для активного документа
  useEffect(() => {
    const { [GraphState]: graphState, ID_STATUS, ID, ID_BRIEF } = document
    if (ID_BRIEF
      && ((ID && !graphState) || (graphState && ID_STATUS !== graphState.ID_STATUS && !graphState.loading && !graphState.fetched))) {
      (async () => {
        try {
          onInput({
            ...document,
            [GraphState]: { ...graphState, loading: true }
          })
          onInput({
            ...document,
            [GraphState]: {
              ...graphState,
              loading: false,
              data: (await newApiService.get(URL_MEDIASTATUSES, {
                errorMessage: "error happened",
                params: {
                  id_brief: ID_BRIEF,
                  id_practices: ID,
                }
              }))[ID],
              fetched: true,
              ID_STATUS
            }
          })
        } catch (e) {
          onInput({
            ...document,
            [GraphState]: { ...graphState, loading: false, fetched: false }
          })
        }
      })()
    }
  }, [document, onInput])

  // на текущий момент данный контроллер работает только в медиапланах, событие в данном объекте должно вызываться сразу после загрузки
  useEffect(() => {
    if (data.mp_update && data.mp_update.STATUS_UPDATE) {
      changeStatus(data.mp_update.STATUS_UPDATE)
    }
  }, [changeStatus, data])

  const changeStatusHandler = useCallback(
    (POPUP, STATUS_ONCLICK, BTN_ID) => async () => {
      setButtonInWork(BTN_ID)
      await (POPUP ? openModalBeforeChangeStatus(STATUS_ONCLICK, POPUP) : changeStatus(STATUS_ONCLICK))
      setButtonInWork(undefined)
    },
    [changeStatus, openModalBeforeChangeStatus]
  )
  return (
    <DocumentBusinessProcessButtons.Provider
      value={useMemo(
        () => ({ buttons: data, onChangeStatus: changeStatusHandler, idButtonInWork }),
        [changeStatusHandler, data, idButtonInWork]
      )}
    >
      {children}
    </DocumentBusinessProcessButtons.Provider>
  )
}

DocumentStatusesController.propTypes = {
  onInput: PropTypes.func.isRequired,
  document: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  changeStatusInterceptor: PropTypes.func,
}

DocumentStatusesController.defaultProps = {
  changeStatusInterceptor: () => null
}

export default DocumentStatusesController
