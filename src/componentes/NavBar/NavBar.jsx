import React from 'react'
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const logoBerlini = "../img/logo.png";
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body  navbar-color" data-bs-theme="dark">
                <div className="container-fluid navbar-boostrap">
                    <Link to="/"><img className='logo navbar-brand' src={logoBerlini} alt="logo berlini" /> </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/"> Inicio </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/"> Contacto </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <strong className="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </strong>
                                <ul className="dropdown-menu">

                                    <li><NavLink className="dropdown-item" to="categoria/1">Sorrentinos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="categoria/2">Tallarines</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="categoria/3">Salsas</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/"> Acerca de Nosotros </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
