import { Suspense, lazy } from 'react';
import {
  Routes, Route, Navigate, BrowserRouter,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from './store';

const EpisodePage = lazy(async () => import('./pages/Episode'));
const ShowPage = lazy(async () => import('./pages/Show'));
const ShowSearchPage = lazy(async () => import('./pages/ShowSearch'));

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <CssBaseline />
      <Suspense fallback={<> </>}>
        <Routes>
          <Route path="/" element={<ShowSearchPage />} />
          <Route path="/show/:id" element={<ShowPage />} />
          <Route path="/episode/:id" element={<EpisodePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Provider>
  </BrowserRouter>
);

export default App;
