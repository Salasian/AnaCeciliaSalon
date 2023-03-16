import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Citas = () => {
  const navigate = useNavigate();

  const [citas, setCitas] = useState([
    {
      _id: "",
      telefono: "",
      hora: "",
      fecha: "",
      precio: 0,
      cliente: "",
      servicios: [],
    },
  ]);

  function handleEditar(id) {
    let link = `/citas/editar`;
    navigate(link, { state: { id: id } });
  }

  function handleBorrar(e) {
    e.preventDefault();
    let id = e.target.parentElement.id;
    axios.delete(`http://localhost:3001/cita/${id}`);
  }

  useEffect(() => {
    fetch("http://localhost:3001/cita")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCitas(jsonRes));
  }, [citas]);

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10 ">
        <div className="row">
          {citas.map((cita, index) => {
            const { telefono, hora, fecha, precio, cliente, servicios, _id } =
              cita;

            return (
              <div key={index} id={_id} className="col-4">
                <p>Cliente:{cliente}</p>
                <p>Telefono:{telefono}</p>
                <p>Hora:{hora}</p>
                <p>Fecha:{fecha.slice(0, 10)}</p>
                <p>Precio:{precio}</p>
                <p>Servicios:</p>
                {servicios.map((serv, index) => {
                  return <p key={index}>{`${serv.servicio} ${serv.precio}`}</p>;
                })}
                <button className="btn naranja" onClick={handleBorrar}>
                  Borrar
                </button>
                <button
                  className="btn naranja"
                  onClick={() => handleEditar(_id)}
                >
                  Editar
                </button>
              </div>
            );
          })}
        </div>
        <Link to="/citas/cita">Añadir Cita</Link>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default Citas;
