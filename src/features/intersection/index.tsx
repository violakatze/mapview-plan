import { Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components'
import { Page } from './components'

export const IntersectionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Page />} />
      </Route>
    </Routes>
  )
}
