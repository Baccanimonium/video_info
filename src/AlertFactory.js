/* eslint-disable react/no-array-index-key,react/no-danger */
import React, { useCallback, useMemo, useState } from "react"
import PropTypes from "prop-types"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { alertsAtom } from "@/Store/alerts"
import { RenderPropStateFullForm } from "@/Core/Decorators/withStateFullForm"
import Form from "@/Components/Forms"
import ModalWindow from "@/Components/ModalWindow"
import PureDeleteItems from "@/Utils/Arrays/PureDeleteItems"

// eslint-disable-next-line react/prop-types
const MessageRender = ({ message }) => (
  <div
    className="ta-center m-b-30 word-break-all"
    dangerouslySetInnerHTML={{ __html: message }}
  />
)

const AlertContainer = ({
  message, dialogueParams, componentProps, onlyCancellable, onDelete,
  onSubmit, onCancel, component: Child = message ? MessageRender : Form, width
}) => {
  const [loading, setLoading] = useState(false)

  const requestWrapper = useCallback((method) => async (...args) => {
    try {
      setLoading(true)
      method(...args)
      onDelete()
    } catch (e) {
      console.log(e)
      const { response: { status } = {} } = e
      if (status === 416) onDelete()
    } finally {
      setLoading(false)
    }
  }, [onDelete])

  const cancelHandler = useMemo(
    () => onCancel ? requestWrapper(onCancel) : onDelete,
    [onCancel, onDelete, requestWrapper]
  )
  const submitHandler = useMemo(() => onSubmit ? requestWrapper(onSubmit) : undefined, [onSubmit, requestWrapper])
  return (
    <RenderPropStateFullForm {...componentProps} onSubmit={submitHandler}>
      {(formP) => {
        const { onSubmit, formValid } = formP
        return (
          <ModalWindow
            width={width}
            dialogueParams={dialogueParams}
            loading={loading}
            onSubmit={onSubmit}
            onClose={onDelete}
            formValid={formValid}
            onlyCancellable={onlyCancellable}
            onCancel={cancelHandler}
          >
            <Child {...formP} message={message} />
          </ModalWindow>
        )
      }}
    </RenderPropStateFullForm>

  )
}

AlertContainer.propTypes = {
  component: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

const Alerts = styled.div`
 position: fixed;
 z-index: 10000;
`

const AlertFactory = () => {
  const [modals, setModalsState] = useRecoilState(alertsAtom)
  const removeAlert = (i) => () => {
    setModalsState(PureDeleteItems(modals, i))
  }
  return (
    <Alerts>
      {modals.map((alert, i) => <AlertContainer {...alert} index={i} key={i} onDelete={removeAlert(i)} />)}
    </Alerts>
  )
}

AlertFactory.propTypes = {

}

export default AlertFactory
