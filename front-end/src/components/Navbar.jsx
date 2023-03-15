import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar bg-dark container'>
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
    </nav>
  );
}

export default Navbar;
