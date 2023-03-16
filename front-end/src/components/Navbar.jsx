import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    /*<nav className='navbar bg-dark container'>
      <h4>
        <Link to='/' className='link'>
          Home
        </Link>
      </h4>
      <h4>
        <Link to='/clients' className='link'>
          Clients
        </Link>
      </h4>
      <h4>
        <Link to='/create' className='link'>
          Create
        </Link>
      </h4>
      <h4>
        <Link to='/modify' className='link'>
          Actualizar
        </Link>
      </h4>
      <h4>
        <Link to='/erase' className='link'>
          Borrar
        </Link>
      </h4>
    </nav>*/
    <nav className="d-flex justify-content-between container mb-5">
      <div className="d-flex">
        <div className="logo"></div>
        <div className="pt-4 mx-3">
          <h2>Ana Cecilia Salon</h2>
        </div>
      </div>
      <div className="float-end"></div>
      <header className="header">
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#" className="btn">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="btn">
                Menu
              </a>
            </li>
            <li>
              <a href="loginvista.html" className="btn">
                Login
              </a>
            </li>
            <li>
              <a href="registrarvista.html" className="btn naranja">
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}

export default Navbar;
