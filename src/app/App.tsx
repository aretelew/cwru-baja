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
  fontFamily: 'Montserrat, sans-serif',
  headings: {
    fontFamily: 'Rajdhani, sans-serif',
    fontWeight: '600'
  },
  colors: {
    dark: [
      '#ADADB0', // 0: Text on dark background (darker)
            '#8F9095', // 1 (darker)
            '#797B80', // 2 (darker)
            '#4A4D54', // 3 (darker)
            '#2A2C32', // 4 (darker)
            '#212228', // 5 (darker)
            '#1A1B20', // 6 (darker)
            '#121316', // 7 (darker)
            '#0D0E10', // 8 (darker)
            '#08090A'  // 9: App background (darker)
    ],
    red: [
      '#FFE0E0', // 0
      '#FFBABA', // 1
      '#FF9494', // 2
      '#FF6B6B', // 3
      '#FF5252', // 4
      '#FF3838', // 5
      '#FF1F1F', // 6
      '#E60000', // 7: Active state
      '#C00000', // 8
      '#9A0000'  // 9
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