import './App.css';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar'

export function App() {
    return (
        <div className='boddyApp'>
            <Navbar />
            <Outlet />
        </div>
    )
}