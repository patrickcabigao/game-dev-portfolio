import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home.tsx';
import Games from './pages/Games.tsx';
import Logs from './pages/Logs.tsx';
import AboutMe from './pages/AboutMe.tsx';
import Contact from './pages/Contact.tsx';

export default function App(): React.ReactNode {
    return (
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/logs" element={<Logs/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
}