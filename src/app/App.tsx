import * as React from 'react';
import { useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.tsx';
import '@mantine/core/styles.css';
import Car from "./pages/Car/Car2.tsx";
import { createTheme } from '@mantine/core';

const Team = React.lazy(() => import('./pages/Team/Team.tsx'));
const Support = React.lazy(() => import('./pages/Support/Support.tsx'));
const Competition = React.lazy(() => import('./pages/Competition/Competition.tsx'));
const Social = React.lazy(() => import('./pages/Social/Social.tsx'));

export const theme = createTheme({
  fontFamily: 'Rajdhani, sans-serif',
  headings: {
    fontWeight: '650'
  },
  colors: {
    dark: [
      '#ADADB0',
      '#8F9095',
      '#797B80',
      '#4A4D54',
      '#2A2C32',
      '#212228',
      '#1A1B20',
      '#121316',
      '#0D0E10',
      '#08090A'
    ],
    red: [
      '#FFE0E0',
      '#FFBABA',
      '#FF9494',
      '#FF6B6B',
      '#FF5252',
      '#FF3838',
      '#FF1F1F',
      '#E60000',
      '#C00000',
      '#9A0000'
    ]
  },
  primaryColor: 'red',
  primaryShade: 7
});

function App() {
  useEffect(() => {
    const preloadPages = () => {
      import('./pages/Team/Team.tsx');
      import('./pages/Support/Support.tsx');
      import('./pages/Competition/Competition.tsx');
      import('./pages/Social/Social.tsx');
    };
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(preloadPages);
    } else {
      setTimeout(preloadPages, 1000);
    }
  }, []);

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/car' element={<Car />} />
        <Route path='/competition' element={<Competition />} />
        <Route path='/support' element={<Support />} />
        <Route path='/social' element={<Social />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;