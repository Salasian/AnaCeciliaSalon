import React from "react";
import "./servicios.css";

const Servicios = () => {
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
