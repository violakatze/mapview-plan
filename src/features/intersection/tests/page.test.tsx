import { render, screen, waitFor } from '@testing-library/react'
import { Page } from '../components'

describe('page, tests', () => {
  test('初期表示', async () => {
    render(<Page />)

    const current = screen.getByLabelText('当該番号')
    await waitFor(() => expect(current).toBeValid())
    await waitFor(() => expect(current).toHaveValue(''))

    // TODO:
    // const crossCount = screen.getByLabelText('差路数')
    // await waitFor(() => expect(crossCount).toBeValid())
    // await waitFor(() => expect(crossCount).toHaveValue(2))
  })
})
