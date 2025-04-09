import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Stack,
  Typography
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Map } from '@/components'
import { useIntersection } from '../hooks'
import { NeighborInput } from './NeighborInput'

export const Page = () => {
  const {
    form: { control }
  } = useIntersection()
  return (
    <Stack spacing={2}>
      <Stack spacing={2} sx={{ width: '40%' }} justifyContent={'space-between'}>
        <Stack direction="row" justifyContent={'center'} width={'100%'}>
          <NeighborInput control={control} intersectionName="number1" branchName="branch1" />
        </Stack>
        <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
          <NeighborInput control={control} intersectionName="number2" branchName="branch2" />
          <NeighborInput control={control} intersectionName="number8" branchName="branch8" />
        </Stack>
        <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
          <NeighborInput control={control} intersectionName="number3" branchName="branch3" />
          <NeighborInput control={control} intersectionName="number7" branchName="branch7" />
        </Stack>
        <Stack direction="row" justifyContent={'space-between'} width={'100%'}>
          <NeighborInput control={control} intersectionName="number4" branchName="branch4" />
          <NeighborInput control={control} intersectionName="number6" branchName="branch6" />
        </Stack>
        <Stack direction="row" justifyContent={'center'} width={'100%'}>
          <NeighborInput control={control} intersectionName="number5" branchName="branch5" />
        </Stack>
      </Stack>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} id="panel1a-header">
          <Typography>地図を表示する 案1 アコーディオン</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Map />
          </Paper>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
