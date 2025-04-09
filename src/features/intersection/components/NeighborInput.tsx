import { Control, Path } from 'react-hook-form'
import { Stack } from '@mui/material'
import { GroupBox, TextBox } from '@/components'
import { Intersection } from '../types'

export type NeighborInputProps = {
  branchName: Path<Intersection>
  intersectionName: Path<Intersection>
  control: Control<Intersection>
}

export const NeighborInput = (props: NeighborInputProps) => {
  const { branchName, intersectionName, control } = props

  return (
    <GroupBox density="compact" sx={{ width: '28ch' }}>
      <Stack direction="row" justifyContent={'space-between'} spacing={1}>
        <TextBox
          control={control}
          name={branchName}
          label="枝番"
          size="small"
          sx={{ width: '10ch' }}
        />
        <TextBox
          control={control}
          name={intersectionName}
          label="番号"
          size="small"
          sx={{ width: '15ch' }}
        />
      </Stack>
    </GroupBox>
  )
}
