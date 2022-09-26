import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import  logo  from '../assets/logo.png'
import '../Styles/responsive.css'
import './Navbar.css'

export function Navbar (){
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!search) return;

        navigate(`/search?q=${search}`, {replace: true});
        setSearch('');
    }


    return(
        <nav id='navbar'>
            <div id='logo'>
                    <Link to="/">
                    <img src={logo} alt="logo" />
                        <h3>Bow Film</h3> 
                    </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <input type= "text" placeholder='O que procura ?' onChange={(e)=> setSearch(e.target.value)} value={search}/>
                <button type='submit'><BiSearchAlt2/></button>
            </form>
        </nav>
    )
}