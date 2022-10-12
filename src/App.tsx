import { Suspense, lazy } from 'react';
import {
  Routes, Route, Navigate, BrowserRouter,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { store } from './store';
import { Header } from './components/Header';

const EpisodePage = lazy(async () => import('./pages/Episode'));
const ShowPage = lazy(async () => import('./pages/Show'));
const ShowSearchPage = lazy(async () => import('./pages/ShowSearch'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#b51d3b',
    },
    secondary: {
      main: '#fc5d1f',
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <Suspense fallback={<> </>}>
          <Header />
          <Routes>
            <Route path="/" element={<ShowSearchPage />} />
            <Route path="/show/:id" element={<ShowPage />} />
            <Route path="/episode/:id" element={<EpisodePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
