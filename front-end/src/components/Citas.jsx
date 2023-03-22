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
    <div className="row ">
      <div className="col-1"></div>
      <div className="col-10 bg-light">
        <div className="row border p-5">
          {citas.map((cita, index) => {
            const { hora, fecha, cliente, _id } = cita;
            return (
              <div
                key={index}
                id={_id}
                className="col-2 border border-2 m-4 p-4"
              >
                <h3>{cliente}</h3>
                <p>Fecha y Hora:</p>
                <p>
                  {fecha.slice(0, 10)} {hora}
                </p>
                <div className="d-flex">
                  <button className="btn naranja m-1" onClick={handleBorrar}>
                    Borrar
                  </button>
                  <button
                    className="btn naranja m-1"
                    onClick={() => handleEditar(_id)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            );
          })}
          <Link className="btn naranja" to="/citas/cita">
            Añadir Cita
          </Link>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default Citas;
