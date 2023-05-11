import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useClienteContext } from "../../context/clienteContext";
import style from "./editarcliente.module.css";

const EditarCliente = () => {
  const location = useLocation();
  let id = location.state.id;
  const [input, setInput] = useState({
    nombre: "",
    password: "",
    mail: "",
  });
  const { editarCliente } = useClienteContext();
  const [goToClientes, setGoToClientes] = useState(false);
  const [vacio, setVacio] = useState({
    estado: false,
    mensaje: "Hay campos vacíos",
  });

  function isVacios() {
    const { nombre, mail, password } = input;
    console.log(nombre, mail, password);
    if (nombre && mail && password) {
      setVacio({ estado: false, mensaje: "" });
      return false;
    }
    setVacio({ estado: true, mensaje: "Hay campos vacíos" });
    return true;
  }

  async function handleClick() {
    if (!isVacios()) {
      editarCliente(id, input);
      setGoToClientes(true);
      setVacio(false);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3001/cliente/find/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        console.log(jsonRes);
        setInput(jsonRes);
      });
  }, []);

  if (goToClientes) return <Navigate to="/clientes" />;

  return (
    <div className="container">
      <section className={style.crud}>
        {vacio.estado === true ? (
          <p className={`${style.rojo} text-center`}> {vacio.mensaje}</p>
        ) : (
          <i></i>
        )}
        <ul className={` d-flex justify-content-center ${style.crudList}`}>
          <li className="m-5">
            <h4>Nombre</h4>
            <input
              type="text"
              name="nombre"
              value={input.nombre}
              onChange={(e) => setInput({ ...input, nombre: e.target.value })}
              autoComplete="off"
              className="form-control"
              placeholder="Nombre"
            />
          </li>
          <li className="m-5">
            <h4>Mail</h4>
            <input
              name="mail"
              value={input.mail}
              onChange={(e) => setInput({ ...input, mail: e.target.value })}
              autoComplete="off"
              className="form-control"
              placeholder="Descripción"
            />
          </li>
          <li className="m-5">
            <h4>Password</h4>
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </li>
        </ul>
      </section>
      <section>
        <ul className={`text-center ${style.crudList}`}>
          <li>
            <button className={`btn ${style.naranja}`} onClick={handleClick}>
              Aceptar
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EditarCliente;
