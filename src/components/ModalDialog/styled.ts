import styled from 'styled-components/macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

const DialogOverlayContainer = styled(DialogOverlay)`
  & > [data-reach-dialog-content] {
    margin: 15% auto;
    width: var(--width, 40%);
    padding: 16px;
  }
`

const DialogContainer = styled(DialogContent)`
  border-radius: 8px;
  box-shadow: 0 8px 14px 4px rgba(0, 0, 0, 0.29);
`

const DialogHeader = styled.header`
  margin: -16px -16px 16px;
  padding: 16px;
  border-radius: 8px 8px 0 0;
  color: white;
  background-color: black;
`

const DialogTitle = styled.h1`
  font-size: 1.5rem;
`

const DialogBody = styled.div`
  margin-bottom: 16px;
`

const DialogFooter = styled.footer`
  text-align: right;
`

export {
  DialogOverlayContainer,
  DialogContainer,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
}
