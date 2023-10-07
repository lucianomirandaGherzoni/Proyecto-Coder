import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import "./NavBar.css";


const NavBar = () => {
    const logoBerlini = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxtDBRkBui1KpOihJwv8xH72Pudt9LKdNQrGmRjDT22te7AKjwcOz_mZlQtYeHAkxM18&usqp=CAU";
    return (
        <header>
            <img className='logo' src={logoBerlini} alt="logo berlini" /> {/*No pude poner la imagen del logo que esta en la carpeta img probe con = {./img/logo.png y con ../img/logo.png} */}
            <nav>
                <ul>
                    <li>inicio</li>
                    <li>Productos</li>   {/*Aca iria un dropdown con un <ul> y tres <li> con los items {Sorrentinos, Tallarines, Salsas} */}
                    <li>Sobre Nosotros</li>
                    <li>Contacto</li>
                    <li><CardWidget/></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar