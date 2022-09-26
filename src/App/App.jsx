import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar'
import '../Styles/responsive.css'


export function App() {
    return (
        <div className='app-container'>
            <Navbar />
            <Outlet />
        </div>
    )
}