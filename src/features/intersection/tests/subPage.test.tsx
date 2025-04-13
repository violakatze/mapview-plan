import { render, screen, waitFor } from '@testing-library/react'
import { SubPage } from '../components'

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: vi.fn()
}))

describe('subPage, tests', () => {
  test('初期表示', async () => {
    render(<SubPage />)

    const title = await waitFor(() => screen.getByText('地図表示'))
    expect(title).toBeInTheDocument()
    expect(title).toBeValid()

    const button = await waitFor(() => screen.getByText('戻る'))
    expect(button).toBeValid()
  })
})
