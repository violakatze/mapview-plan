import { Routes, Route } from 'react-router-dom'
import { PageLayout } from '@/components'

export const IntersectionRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<></>} />
      </Route>
    </Routes>
  )
}
