import { FC, ReactNode } from 'react'
import { DialogProps } from '@reach/dialog'
// eslint-disable-next-line import/named
import { CSSProperties } from 'styled-components'

import {
  DialogOverlayContainer,
  DialogContainer,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
} from './styled'

export interface IModalDialogProps extends DialogProps {
  title: string
  control: ReactNode

  width?: number
}

const ModalDialog: FC<IModalDialogProps> = ({
  title,
  children,
  control,
  isOpen,
  onDismiss,
  width,
  ...delegated
}) => {
  return (
    <DialogOverlayContainer
      style={{ '--width': width ? `${width}px` : '40%' } as CSSProperties}
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <DialogContainer {...delegated}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter>{control}</DialogFooter>
      </DialogContainer>
    </DialogOverlayContainer>
  )
}

export default ModalDialog
