import { Paper, Stack, Typography } from '@mui/material'
import { Map } from '@/components'

/**
 * MapView component
 */
export const MapView = () => {
  return (
    <Stack direction="row">
      <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column', width: '20%' }}>
        <Typography variant="overline">・必要な情報をこの欄に表示</Typography>
        <Typography variant="overline">・一画面につき最大1地図を想定</Typography>
        <Typography variant="overline">・地図クリック→ポップアップで必要事項選択</Typography>
        <Typography variant="overline">・ポップアップの選択結果はマーカー表示を想定</Typography>
      </Paper>
      <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column', width: '80%' }}>
        <Map />
      </Paper>
    </Stack>
  )
}
