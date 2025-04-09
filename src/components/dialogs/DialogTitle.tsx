import { ElementType } from 'react'
import {
  Box,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDaialogTitleProps,
  Divider,
  SvgIcon,
  IconButton
} from '@mui/material'
import { CloseIcon } from '@/components/icons'

export type DialogTitleProps = {
  title: string
  icon?: ElementType
  isDraggable?: boolean
  showCloseButton?: boolean
  onClose?: () => void
} & MuiDaialogTitleProps

/**
 * DialogTitle component
 */
export const DialogTitle = (props: DialogTitleProps) => {
  const { title, icon, isDraggable = false, showCloseButton = false, onClose, ...render } = props
  const cursor = isDraggable ? { cursor: 'move' } : undefined

  return (
    <>
      <MuiDialogTitle sx={{ ...styles.title, ...cursor }} {...render}>
        <Box sx={styles.row}>
          {icon && (
            <Box component="span" sx={styles.icon}>
              <SvgIcon component={icon} inheritViewBox sx={{ top: -4 }} />
            </Box>
          )}
          {title}
        </Box>
      </MuiDialogTitle>

      {showCloseButton && (
        <IconButton aria-label="close" onClick={onClose} sx={styles.closebutton}>
          <CloseIcon />
        </IconButton>
      )}

      <Divider />
    </>
  )
}

const styles = {
  icon: {
    mr: 1,
    position: 'relative',
    top: -1
  },
  title: {
    color: '#565656',
    fontSize: '110%',
    fontWeight: 'bolder',
    width: '100%',
    justifyContent: 'flex-left',
    pt: 2,
    pl: 1.5,
    pb: 0
  },
  row: {
    mb: 1
  },
  closebutton: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: 'darkgray'
  }
}
