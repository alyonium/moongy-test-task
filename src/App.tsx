import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const EpisodePage = lazy(async () => await import('./pages/Episode'))
const ShowPage = lazy(async () => await import('./pages/Show'))
const ShowSearchPage = lazy(async () => await import('./pages/ShowSearch'))

const App = () => (
  <Suspense fallback={<> </>}>
    <Routes>
      <Route path="/" element={<ShowSearchPage />} />
      <Route path="/show/:id" element={<ShowPage />} />
      <Route path="/episode/:id" element={<EpisodePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Suspense>
)

export default App
