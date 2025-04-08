import { Routes, Route } from 'react-router-dom'
import { IntersectionRoutes } from '@/features/intersection'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<IntersectionRoutes />} />
    </Routes>
  )
}
