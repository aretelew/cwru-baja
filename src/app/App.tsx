import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.tsx';
import '@mantine/core/styles.css';

function App() {
    return (
        <MantineProvider defaultColorScheme='dark'>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </MantineProvider>
    );
}

export default App
