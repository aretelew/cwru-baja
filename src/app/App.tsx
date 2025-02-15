import { MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.tsx';
import Team from './pages/Team/Team.tsx';
import '@mantine/core/styles.css';
import Car from "./pages/Car/Car.tsx";
import Support from "./pages/Support/Support.tsx";

function App() {
    return (
        <MantineProvider defaultColorScheme='dark'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/support" element={<Support />} />
            </Routes>
        </MantineProvider>
    );
}

export default App;
