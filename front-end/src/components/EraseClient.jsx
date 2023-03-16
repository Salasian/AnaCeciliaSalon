import React, { useState } from "react";
import axios from "axios";
import "./main.css";

function EraseClient() {
  const [input, setInput] = useState({
    id: "",
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
    console.log(input.id);
    axios.delete(`http://localhost:3001/erase/${input.id}`);
  }

  return (
    <div className="container">
      <section className="crud">
        <ul className="crud-list">
          <li>
            <h4>ID</h4>
            <textarea
              onChange={handleChange}
              name="id"
              value={input.id}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Inserte un ID existente"
            ></textarea>
          </li>
        </ul>
      </section>
      <section className="pie-pagina">
        <ul className="pie-botones">
          <li>
            <button className="nav-btn aceptar" onClick={handleClick}>
              Aceptar
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default EraseClient;
