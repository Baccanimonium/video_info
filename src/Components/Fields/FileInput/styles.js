import styled from "styled-components"
import Icon from "@/Components/Icon"
import { IconClose } from "@/Components/Icon/CommonIcons"
import { clip } from "./Icons/clip"

export const FileContainer = styled.div`
  --file-input-color: var(--color-grey-darken-0);
  --file-input-icon-color: var(--color-black-darken-1);
  ${props => props.isFileOverflowed && `
    --file-input-color: var(--color-light-gold-1);
    --file-input-icon-color: var(--color-grey-darken-0);
  `}
`

export const FileInputIconContainer = styled.div`
  height: 50px;
  width: 100%;
  max-width: 392px;
  background: var(--color-grey-Light-4);
  font-size: 12px;
  color: var(--file-input-color);
  box-shadow: var(--file-input-shadow);
  text-transform: none;
  font-family: var(--font-helvetica);
  font-weight: 400;
  position: relative;
  text-align: left;
  display: flex;
  align-items: center;
  transition-property: color, box-shadow;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
`
export const FileInputIcon = styled(Icon(clip))`
  color: var(--file-input-icon-color);
  transition: color 250ms ease-in-out;
  &:hover {
    --file-input-icon-color: var(--color-light-gold-1);
  }
`

export const PreviewItem = styled.div`
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
  color: var(--color-grey-darken-0);
  ${props => props.uploading && `
    background-color: var(--color-grey-Light-4);
  `}
  ${props => props.first && `
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  `}
  ${props => props.last && `
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  `}
`

export const PreviewItemInfo = styled.button`
  margin-left: 20px;
  overflow: hidden;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const PreviewItemInfoLabel = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${props => props.uploadFailes ? "var(--pink)" : "unset"}
`

export const RemoveButton = styled(IconClose)`
  display: flex;
  align-self: center;
  margin: 0.25rem 0.25rem 0.25rem auto;
  transition: color 250ms ease-in-out;
  &:hover {
    color: var(--color-black-darken-1);
  }
`
