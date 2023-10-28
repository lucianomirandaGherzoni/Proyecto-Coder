import CardWidget from '../CardWidget/CardWidget';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const logoBerlini = "../img/logo.png";
    return (
        <header>
          <Link to="/"><img className='logo' src={logoBerlini} alt="logo berlini" /> </Link>
            <nav>
                <ul>
                    <li><NavLink to="/"> Inicio </NavLink></li>
                    <li><NavLink to="categoria/1">Sorrentinos</NavLink></li>   {/*Aca iria un dropdown con un <ul> y tres <li> con los items {Sorrentinos, Tallarines, Salsas} */}
                    <li><NavLink to="categoria/2">Tallarines</NavLink></li>
                    <li><NavLink to= "categoria/3">Salsas</NavLink></li>
                    <li><CardWidget/></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar