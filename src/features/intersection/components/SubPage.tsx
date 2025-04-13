import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { Map } from '@/components'

/**
 * SubPage component
 */
export const SubPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Typography variant="h6">地図表示</Typography>
        <Map />
        <Stack direction="row" spacing={2} justifyContent="right" sx={{ p: 1 }}>
          <Button variant="contained" color="cancel" onClick={() => navigate('/')}>
            戻る
          </Button>
        </Stack>
      </Stack>
    </>
  )
}
