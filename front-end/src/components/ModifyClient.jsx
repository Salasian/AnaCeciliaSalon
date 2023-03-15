import React, { useState } from 'react';
import axios from 'axios';
import './main.css';

function ModifyClient() {
  const [input, setInput] = useState({
    id: '',
    nombre: '',
    pass: '',
    email: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newClient = {
      id: input.id,
      nombre: input.nombre,
      pass: input.pass,
      email: input.email,
    };
    axios.patch('http://localhost:3001/modify', newClient);
  }

  return (
    <div className='container'>
      <section className='crud'>
        <ul className='crud-list'>
          <li>
            <h4>ID</h4>
            <textarea
              onChange={handleChange}
              name='id'
              value={input.id}
              autoComplete='off'
              className='form-control no-resize'
              placeholder='Inserte un ID existente'
            ></textarea>
          </li>
          <li>
            <h4>Nombre</h4>
            <textarea
              onChange={handleChange}
              name='nombre'
              value={input.nombre}
              autoComplete='off'
              className='form-control no-resize'
              placeholder='Nombre'
            ></textarea>
          </li>
          <li>
            <h4>Contraseña</h4>
            <textarea
              onChange={handleChange}
              name='pass'
              value={input.pass}
              autoComplete='off'
              className='form-control no-resize'
              placeholder='Password'
            ></textarea>
          </li>
          <li>
            <h4>Email</h4>
            <textarea
              onChange={handleChange}
              name='email'
              value={input.email}
              autoComplete='off'
              className='form-control no-resize'
              placeholder='Email'
            ></textarea>
          </li>
        </ul>
      </section>
      <section className='pie-pagina'>
        <ul className='pie-botones'>
          <li>
            <button className='nav-btn aceptar' onClick={handleClick}>
              Aceptar
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ModifyClient;
