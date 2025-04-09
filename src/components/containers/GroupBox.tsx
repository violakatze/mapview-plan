import { ElementType, ReactNode } from 'react'
import { Box, SvgIcon, SxProps, Theme, Typography } from '@mui/material'

export type GroupBoxProps = {
  title?: string
  headerComponent?: ReactNode
  children?: ReactNode
  icon?: ElementType
  sx?: SxProps<Theme>
  density?: 'compact' | 'standard'
}

/**
 * グループボックス
 */
export const GroupBox = (props: GroupBoxProps) => {
  const { title, headerComponent, children, icon, sx, density = 'standard' } = props

  /**
   * スタイル
   */
  const styles = {
    container: {
      border: '1px solid #c4c4c4',
      borderRadius: 1,
      pt: density === 'compact' ? 2 : 4,
      pb: 1,
      px: 1
    },
    headerContainer: {
      position: 'relative'
    },
    headerTitle: {
      position: 'absolute',
      py: 0,
      px: 1,
      top: density === 'compact' ? -26 : -42,
      backgroundColor: '#fff',
      borderRadius: 2
    },
    icon: {
      mr: 0.8
    }
  }

  return (
    <Box sx={{ ...styles.container, ...sx }}>
      {title && (
        <Box sx={styles.headerContainer}>
          <Box sx={styles.headerTitle}>
            <Typography variant="subtitle2">
              {icon && <SvgIcon component={icon} inheritViewBox sx={styles.icon} />}
              {title}
            </Typography>
          </Box>
          {headerComponent}
        </Box>
      )}

      {children}
    </Box>
  )
}
