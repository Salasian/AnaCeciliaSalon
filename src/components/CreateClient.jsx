import React, { useState } from 'react';
import axios from 'axios';
import './main.css';

function CreateClient() {
  const [input, setInput] = useState({
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
      nombre: input.nombre,
      pass: input.pass,
      email: input.email,
    };
    axios.post('http://localhost:3001/create', newClient);
  }

  return (
    <div className='container'>
      <section className='crud'>
        <ul className='crud-list'>
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

export default CreateClient;
