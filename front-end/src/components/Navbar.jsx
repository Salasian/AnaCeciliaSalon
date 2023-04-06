import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="d-flex justify-content-between container mb-5 mt-3">
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
              <Link to="/" className="link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/citas" className="link">
                Citas
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="link">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/signin" className="btn naranja">
                Sign in
              </Link>
            </li>
            <li>
              <Link to="/login" className="btn naranja">
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
