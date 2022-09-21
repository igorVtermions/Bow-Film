import {Link} from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

export function Navbar (){
    return(
        <nav id='navbar'>
            <div className='logo'>
                    <Link to="/">
                    <img src="../assents/Logo.png" alt="logo" />
                        <h3>Bow Film</h3> 
                    </Link>
            </div>
            <form>
                <input type= "text" placeholder='O que procura ?' />
                <button type='submit'><BiSearchAlt2></BiSearchAlt2></button>
            </form>
        </nav>
    )
}