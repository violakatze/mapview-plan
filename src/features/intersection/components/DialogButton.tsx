import { useState } from 'react'
import { Button, Stack } from '@mui/material'
import { DraggableDialog } from '@/components'
import { MapView } from './MapView'

export const DialogButton = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={styles.buttonContainer}
      >
        地図を表示する 案2 ポップアップ
      </Button>
      <DraggableDialog open={open} onClose={() => setOpen(false)} title="地図表示" width="xl">
        <Stack spacing={2} sx={{ width: '100%' }}>
          <MapView />
          <Stack direction="row" spacing={2} justifyContent="right" sx={{ p: 1 }}>
            <Button variant="contained" color="cancel" onClick={() => setOpen(false)}>
              閉じる
            </Button>
          </Stack>
        </Stack>
      </DraggableDialog>
    </>
  )
}

const styles = {
  buttonContainer: {
    width: { xs: '35ch' }
  }
}
