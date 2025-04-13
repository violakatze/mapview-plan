import { Navigate, Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components'
import { Page, SubPage } from './components'

export const IntersectionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Page />} />
        <Route path="subpage" element={<SubPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
