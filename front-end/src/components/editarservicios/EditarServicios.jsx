import React, { useEffect, useState } from "react";
import style from "./editarservicios.module.css";
import { useSevicioContext } from "../../context/servicioContext";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const EditarServicios = () => {
  const location = useLocation();
  let id = location.state.id;
  const [input, setInput] = useState({
    nombre: "",
    costo: 10,
    descripcion: "",
  });
  const { servicios, editarServicio } = useSevicioContext();
  const [goToServicios, setGoToServicios] = useState(false);
  const [vacio, setVacio] = useState({
    estado: false,
    mensaje: "Hay campos vacíos",
  });

  function isVacios() {
    const { nombre, costo, descripcion } = input;
    console.log(nombre, costo, descripcion);
    if (nombre && costo && descripcion) {
      setVacio({ estado: false, mensaje: "" });
      return false;
    }
    setVacio({ estado: true, mensaje: "Hay campos vacíos" });
    return true;
  }

  async function handleClick() {
    if (!isVacios()) {
      console.log("editado");
      editarServicio(id, input);
      setGoToServicios(true);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3001/servicio/${id}`)
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

  if (goToServicios) return <Navigate to="/servicios" />;

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
            <h4>Descripción</h4>
            <input
              name="descripcion"
              value={input.descripcion}
              onChange={(e) =>
                setInput({ ...input, descripcion: e.target.value })
              }
              autoComplete="off"
              className="form-control"
              placeholder="Descripción"
            />
          </li>
          <li className="m-5">
            <h4>Precio</h4>
            <input
              type="text"
              placeholder="Costo"
              className={style.inputContainer}
              value={input.costo}
              onChange={(e) => setInput({ ...input, costo: e.target.value })}
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

export default EditarServicios;
