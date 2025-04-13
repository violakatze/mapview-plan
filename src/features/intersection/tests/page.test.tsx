import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { Page } from '../components'
import * as hooks from '../hooks'
import * as types from '../types'

vi.mock('../hooks')
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn()
}))

describe('page, tests', () => {
  test('初期表示1', async () => {
    const values: types.Intersection = {
      current: '',
      crossCount: 1,
      branch1: undefined,
      number1: undefined,
      branch2: undefined,
      number2: undefined,
      branch3: undefined,
      number3: undefined,
      branch4: undefined,
      number4: undefined,
      branch5: undefined,
      number5: undefined,
      branch6: undefined,
      number6: undefined,
      branch7: undefined,
      number7: undefined,
      branch8: undefined,
      number8: undefined
    }

    vi.spyOn(types, 'getDefaultValues').mockReturnValueOnce(values)
    const form = renderHook(() => useForm<types.Intersection>({ values, defaultValues: values }))
      .result.current
    vi.spyOn(hooks, 'useIntersection').mockReturnValue({ form })

    render(<Page />)

    const current = await waitFor(() => screen.getByLabelText('当該番号'))
    expect(current).toBeValid()
    expect(current).toHaveValue('')

    const crossCount = await waitFor(() => screen.getByLabelText('差路数'))
    expect(crossCount).toBeValid()
    // expect(crossCount).toHaveValue(2) // SelectListの値は取得できないっぽい

    const branches = await waitFor(() => screen.getAllByLabelText('枝番'))
    expect(branches).toHaveLength(8)
    const branch1 = branches.find(item => item.getAttribute('name') === 'branch1')
    expect(branch1).toBeValid()
    expect(branch1).toHaveValue('')
    const branch2 = branches.find(item => item.getAttribute('name') === 'branch2')
    expect(branch2).toBeValid()
    expect(branch2).toHaveValue('')
    const branch3 = branches.find(item => item.getAttribute('name') === 'branch3')
    expect(branch3).toBeValid()
    expect(branch3).toHaveValue('')
    const branch4 = branches.find(item => item.getAttribute('name') === 'branch4')
    expect(branch4).toBeValid()
    expect(branch4).toHaveValue('')
    const branch5 = branches.find(item => item.getAttribute('name') === 'branch5')
    expect(branch5).toBeValid()
    expect(branch5).toHaveValue('')
    const branch6 = branches.find(item => item.getAttribute('name') === 'branch6')
    expect(branch6).toBeValid()
    expect(branch6).toHaveValue('')
    const branch7 = branches.find(item => item.getAttribute('name') === 'branch7')
    expect(branch7).toBeValid()
    expect(branch7).toHaveValue('')
    const branch8 = branches.find(item => item.getAttribute('name') === 'branch8')
    expect(branch8).toBeValid()
    expect(branch8).toHaveValue('')

    const numbers = await waitFor(() => screen.getAllByLabelText('番号'))
    expect(numbers).toHaveLength(8)
    const number1 = numbers.find(item => item.getAttribute('name') === 'number1')
    expect(number1).toBeValid()
    expect(number1).toHaveValue('')
    const number2 = numbers.find(item => item.getAttribute('name') === 'number2')
    expect(number2).toBeValid()
    expect(number2).toHaveValue('')
    const number3 = numbers.find(item => item.getAttribute('name') === 'number3')
    expect(number3).toBeValid()
    expect(number3).toHaveValue('')
    const number4 = numbers.find(item => item.getAttribute('name') === 'number4')
    expect(number4).toBeValid()
    expect(number4).toHaveValue('')
    const number5 = numbers.find(item => item.getAttribute('name') === 'number5')
    expect(number5).toBeValid()
    expect(number5).toHaveValue('')
    const number6 = numbers.find(item => item.getAttribute('name') === 'number6')
    expect(number6).toBeValid()
    expect(number6).toHaveValue('')
    const number7 = numbers.find(item => item.getAttribute('name') === 'number7')
    expect(number7).toBeValid()
    expect(number7).toHaveValue('')
    const number8 = numbers.find(item => item.getAttribute('name') === 'number8')
    expect(number8).toBeValid()
    expect(number8).toHaveValue('')

    const registerButton = screen.queryByText('登録')
    expect(registerButton).toBeEnabled()
    expect(registerButton).toHaveRole('button')
  })

  test('初期表示2', async () => {
    const values: types.Intersection = {
      current: '1234567890',
      crossCount: 2,
      branch1: '01',
      number1: 'number1',
      branch2: '02',
      number2: 'number2',
      branch3: '03',
      number3: 'number3',
      branch4: '04',
      number4: 'number4',
      branch5: '05',
      number5: 'number5',
      branch6: '06',
      number6: 'number6',
      branch7: '07',
      number7: 'number7',
      branch8: '08',
      number8: 'number8'
    }

    vi.spyOn(types, 'getDefaultValues').mockReturnValueOnce(values)
    const form = renderHook(() => useForm<types.Intersection>({ values, defaultValues: values }))
      .result.current
    vi.spyOn(hooks, 'useIntersection').mockReturnValue({ form })

    render(<Page />)

    const current = await waitFor(() => screen.getByLabelText('当該番号'))
    expect(current).toBeValid()
    expect(current).toHaveValue('1234567890')

    const crossCount = await waitFor(() => screen.getByLabelText('差路数'))
    expect(crossCount).toBeValid()
    // expect(crossCount).toHaveValue(2) // SelectListの値は取得できないっぽい

    const branches = await waitFor(() => screen.getAllByLabelText('枝番'))
    expect(branches).toHaveLength(8)
    const branch1 = branches.find(item => item.getAttribute('name') === 'branch1')
    expect(branch1).toBeValid()
    expect(branch1).toHaveValue('01')
    const branch2 = branches.find(item => item.getAttribute('name') === 'branch2')
    expect(branch2).toBeValid()
    expect(branch2).toHaveValue('02')
    const branch3 = branches.find(item => item.getAttribute('name') === 'branch3')
    expect(branch3).toBeValid()
    expect(branch3).toHaveValue('03')
    const branch4 = branches.find(item => item.getAttribute('name') === 'branch4')
    expect(branch4).toBeValid()
    expect(branch4).toHaveValue('04')
    const branch5 = branches.find(item => item.getAttribute('name') === 'branch5')
    expect(branch5).toBeValid()
    expect(branch5).toHaveValue('05')
    const branch6 = branches.find(item => item.getAttribute('name') === 'branch6')
    expect(branch6).toBeValid()
    expect(branch6).toHaveValue('06')
    const branch7 = branches.find(item => item.getAttribute('name') === 'branch7')
    expect(branch7).toBeValid()
    expect(branch7).toHaveValue('07')
    const branch8 = branches.find(item => item.getAttribute('name') === 'branch8')
    expect(branch8).toBeValid()
    expect(branch8).toHaveValue('08')

    const numbers = await waitFor(() => screen.getAllByLabelText('番号'))
    expect(numbers).toHaveLength(8)
    const number1 = numbers.find(item => item.getAttribute('name') === 'number1')
    expect(number1).toBeValid()
    expect(number1).toHaveValue('number1')
    const number2 = numbers.find(item => item.getAttribute('name') === 'number2')
    expect(number2).toBeValid()
    expect(number2).toHaveValue('number2')
    const number3 = numbers.find(item => item.getAttribute('name') === 'number3')
    expect(number3).toBeValid()
    expect(number3).toHaveValue('number3')
    const number4 = numbers.find(item => item.getAttribute('name') === 'number4')
    expect(number4).toBeValid()
    expect(number4).toHaveValue('number4')
    const number5 = numbers.find(item => item.getAttribute('name') === 'number5')
    expect(number5).toBeValid()
    expect(number5).toHaveValue('number5')
    const number6 = numbers.find(item => item.getAttribute('name') === 'number6')
    expect(number6).toBeValid()
    expect(number6).toHaveValue('number6')
    const number7 = numbers.find(item => item.getAttribute('name') === 'number7')
    expect(number7).toBeValid()
    expect(number7).toHaveValue('number7')
    const number8 = numbers.find(item => item.getAttribute('name') === 'number8')
    expect(number8).toBeValid()
    expect(number8).toHaveValue('number8')

    const registerButton = screen.queryByText('登録')
    expect(registerButton).toBeEnabled()
    expect(registerButton).toHaveRole('button')
  })
})
