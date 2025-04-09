import { ElementType, ReactNode } from 'react'
import { Box, Breakpoint, Dialog, Paper, PaperProps } from '@mui/material'
import Draggable from 'react-draggable'
import { DialogTitle } from './DialogTitle'

export type DraggableDialogProps = {
  open: boolean
  onClose: () => void
  title: string
  icon?: ElementType
  children: ReactNode
  width?: Breakpoint
}

const PaperComponent = (props: PaperProps) => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

/**
 * DraggableDialog component
 */
export const DraggableDialog = (props: DraggableDialogProps) => {
  const { open, onClose, title, icon, children, width = 'md' } = props

  return (
    <Box>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth={width}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <Box>
          <DialogTitle title={title} icon={icon} isDraggable showCloseButton onClose={onClose} />
          {children}
        </Box>
      </Dialog>
    </Box>
  )
}
