import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  MenuItem,
  Stack,
  Typography
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { SelectList, TextBox } from '@/components'
import { useIntersection } from '../hooks'
import { DialogButton } from './DialogButton'
import { MapView } from './MapView'
import { NeighborInput } from './NeighborInput'

/**
 * Intersection Main Page Component
 */
export const Page = () => {
  const crossCountList = [1, 2, 3, 4, 5, 6, 7, 8]
  const {
    form: { control, handleSubmit }
  } = useIntersection()

  return (
    <Stack spacing={2}>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />} id="panel1a-header">
          <Typography>地図を表示する 案1 アコーディオン</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MapView />
        </AccordionDetails>
      </Accordion>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <TextBox
          control={control}
          name="current"
          label="当該番号"
          size="small"
          sx={{ width: '15ch' }}
        />
        <DialogButton />
      </Stack>
      <SelectList
        control={control}
        name="crossCount"
        label="差路数"
        size="small"
        sx={{ width: '15ch' }}
      >
        {crossCountList.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </SelectList>
      <Stack spacing={2} sx={styles.shapeStack} justifyContent={'space-between'}>
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
      <Stack direction="row" spacing={2} justifyContent="right" width={'100%'}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(model => console.log(`submit:${JSON.stringify(model)}`))}
        >
          登録
        </Button>
      </Stack>
    </Stack>
  )
}

const styles = {
  shapeStack: {
    width: { xs: '100%', md: '60%', lg: '50%', xl: '40%' },
    p: 1,
    border: '1px solid #ccc',
    borderRadius: 2
  }
}
