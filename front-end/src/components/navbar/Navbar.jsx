import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

function Navbar() {
  return (
    <nav className="d-flex justify-content-between container mb-5 mt-3">
      <div className="d-flex">
        <div className={style.logo}></div>
        <div className="pt-4 mx-3">
          <h2>Ana Cecilia Salon</h2>
        </div>
      </div>
      <div className="float-end"></div>
      <header className={`header ${style.header}`}>
        <nav>
          <ul className={`btn ${style.navLinks}`}>
            <li>
              <Link to="/" className={style.link}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/citas" className={style.link}>
                Citas
              </Link>
            </li>
            <li>
              <Link to="/servicios" className={style.link}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/clientes" className={style.link}>
                Clientes
              </Link>
            </li>
            <li>
              <Link to="/signin" className={`btn ${style.naranja}`}>
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/login" className={`btn ${style.naranja}`}>
                Log in
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </nav>
  );
}

export default Navbar;
