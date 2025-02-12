import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.tsx';
import Team from './pages/Team/Team.tsx';
import '@mantine/core/styles.css';

function App() {
    return (
        <MantineProvider defaultColorScheme='dark'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/team" element={<Team />} />
            </Routes>
        </MantineProvider>
    );
}

export default App;
