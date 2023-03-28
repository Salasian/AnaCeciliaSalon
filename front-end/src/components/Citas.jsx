import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";

const Citas = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
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
  const toggleShow = () => setShow(!show);

  function handleEditar(id) {
    let link = `/citas/editar`;
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
      .then((jsonRes) => setCitas(jsonRes));
  }, [citas]);

  return (
    <section>
      <h1 className="text-center">Citas</h1>
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
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Cita Borrada</strong>
          <strong className="toast"></strong>
        </Toast.Header>
        <Toast.Body>Borrada Exitosamente</Toast.Body>
      </Toast>
    </section>
  );
};

export default Citas;
