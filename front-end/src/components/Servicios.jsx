import React, { useEffect, useState } from "react";
import "./servicios.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Servicios = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [servicios, setServicios] = useState([
    {
      _id: "",
      costo: 0,
      descripcion: "",
      nombre: "",
    },
  ]);

  const toggleShow = () => setShow(!show);

  function handleEditar(id) {
    let link = `/servicios/editar`;
    navigate(link, { state: { id: id } });
  }

  async function handleBorrar(e) {
    e.preventDefault();
    toggleShow();
    let id = e.target.parentElement.parentElement.id;
    await axios.delete(`http://localhost:3001/cita/${id}`);
  }

  useEffect(() => {
    fetch("http://localhost:3001/cita")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setServicios(jsonRes));
  }, [servicios]);

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-4">
        <h2>Agregar nuevo servicio</h2>
        <h3>Nombre del servicio</h3>
        <div className="input-container">
          <input type="text" placeholder="Text" />
        </div>

        <h3>Caracteristicas del servicio</h3>
        <input
          type="text"
          placeholder="Text"
          className="description input-container"
        />
        <h3>Costo</h3>
        <input type="text" placeholder="Text" />
        <div className="d-flex justify-content-center pt-5">
          <button className="button-crear">Crear servicio</button>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="col-4">
        <h2>Lista de servicios</h2>
        <div className="services">
          <h3>Servicio 01</h3>
          <p>Descripcion</p>
          <div className="d-flex">
            <button className="button btn-services flex-fill">
              Modificar servicio
            </button>
            <button className="button btn-services flex-fill">
              Eliminar servicio
            </button>
          </div>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default Servicios;
