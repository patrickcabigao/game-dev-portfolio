import { Routes, Route } from 'react-router';
import './App.css';

import Home from './pages/Home.tsx';
import Logs from './pages/Logs.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';

import Games from './pages/Games.tsx';
import TwistedSpindustry from './pages/TwistedSpindustry.tsx';
import DarkSpark from './pages/DarkSpark.tsx';
import RobsterTheLobster from './pages/RobsterTheLobster.tsx';

const App = (): React.ReactNode => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/logs" element={<Logs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="/games" element={<Games/>}/>
            <Route path="/games/twisted-spindustry" element={<TwistedSpindustry/>}/>
            <Route path="/games/dark-spark" element={<DarkSpark/>}/>
            <Route path="/games/robster-the-lobster" element={<RobsterTheLobster/>}/>
        </Routes>
    );
}
export default App;