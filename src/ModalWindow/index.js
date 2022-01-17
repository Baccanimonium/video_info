import React, { useCallback, useMemo } from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import BsButton from "@/Components/BsButton"
import { close } from "@/Icons/close"
import Icon from "@/Components/Icon/index"

import { ModalContainer, DialogueBackground, DialogueContainer, CloseIconButton, Header, ButtonsContainer } from "./styles"

const IconClose = Icon(close)

const from = { opacity: 0 }
const to = { opacity: 1 }

const ModalWindow = ({
  children, dialogueParams: { title, cancelLabel, submitLabel, reverseButtonPosition }, loading, formValid, onClose,
  onSubmit, onCancel, onlyCancellable, offsetTop, width
}) => {
  const cancelHandler = !submitLabel && onSubmit ? onSubmit : (onCancel || onClose)
  const closeHandler = onlyCancellable ? cancelHandler : onClose
  const cancelButtonLabel = useMemo(() => cancelLabel || (submitLabel ? "cancel" : "ok"), [cancelLabel, submitLabel])
  const containerStyles = useMemo(() => ({ marginTop: offsetTop, width }), [offsetTop, width])
  return (
    <Spring
      from={from}
      to={to}
    >
      {style => (
        <ModalContainer style={style}>
          <DialogueBackground />
          <DialogueContainer style={containerStyles}>
            <CloseIconButton
              className="color-greyDarken"
              onClick={closeHandler}
              type="button"
            >
              <IconClose size="12" className="color-greyDarken" />
            </CloseIconButton>
            <Header className="fw700">
              { title }
            </Header>
            {children}
            <ButtonsContainer className="m-t-35" twoButtons={submitLabel}>
              {reverseButtonPosition
                ? (
                  <>
                    {submitLabel && (
                      <BsButton
                        className="btn grey-bg"
                        disabled={loading || !formValid}
                        loading={loading}
                        onClick={onSubmit}
                      >
                        {submitLabel}
                      </BsButton>
                    )}
                    <BsButton
                      className="btn golden"
                      disabled={loading}
                      loading={!submitLabel && loading}
                      onClick={cancelHandler}
                    >
                      {cancelButtonLabel}
                    </BsButton>
                  </>
                )
                : (
                  <>
                    <BsButton
                      className={`btn ${submitLabel ? "grey-bg" : "golden"}`}
                      disabled={loading}
                      loading={!submitLabel && loading}
                      onClick={cancelHandler}
                    >
                      {cancelButtonLabel}
                    </BsButton>

                    {submitLabel && (
                    <BsButton
                      className="btn golden"
                      disabled={loading || !formValid}
                      loading={loading}
                      onClick={onSubmit}
                    >
                      {submitLabel}
                    </BsButton>
                    )}
                  </>
                )}
            </ButtonsContainer>
          </DialogueContainer>
        </ModalContainer>
      )}
    </Spring>
  )
}

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  dialogueParams: PropTypes.object,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  offsetTop: PropTypes.string,
  width: PropTypes.string,
  loading: PropTypes.bool,
  onlyCancellable: PropTypes.bool,
  formValid: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
ModalWindow.defaultProps = {
  dialogueParams: {},
  offsetTop: "15vh",
  width: "440px",
  onlyCancellable: true,

}

export default ModalWindow
