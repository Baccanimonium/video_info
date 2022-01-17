import styled from "styled-components"

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 9999;
`

export const DialogueBackground = styled.div`
  position: absolute;
  height: calc(100% + 50px);
  background-color: #000;
  opacity: 0.2;
  width: 100%;
`

export const DialogueContainer = styled.div`
  border: 1px solid var(--color-grey-Light-4);
  background: var(--color-white);
  box-shadow: var(--shadow-3);
  z-index: 2;
  display: flex;
  margin-bottom: auto;
  padding: 20px;
  flex-direction: column;
  min-height: 250px;
  max-height: 75vh;
  overscroll-behavior: contain;
  position: relative;
  overflow: hidden;
`

export const CloseIconButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`

export const Header = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center
`
// TODO: проверить что по такому условию нормально отображаются кнопки
export const ButtonsContainer = styled.div`
  padding: 0 0 20px;
  ${props => props.twoButtons ? `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
  ` : "display: flex; justify-content: center;"}
  .btn {
    ${props => !props.twoButtons && "width: calc(50% - 5px);"}
  }
`
