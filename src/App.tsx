import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home.tsx';
import Games from './pages/Games.tsx';
import Logs from './pages/Logs.tsx';
import Contact from './pages/Contact.tsx';

const App = (): React.ReactNode =>  {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/logs" element={<Logs/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    );
}
export default App;