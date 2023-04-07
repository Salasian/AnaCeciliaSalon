import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import { useCitasContext } from "../citasContext";

const Citas = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { citas, fetchCitas } = useCitasContext();
  const toggleShow = () => setShow(!show);

  function handleEditar(id) {
    let link = `/citas/editar`;
    navigate(link, { state: { id: id } });
  }

  async function handleBorrar(id) {
    toggleShow();
    await axios.delete(`http://localhost:3001/cita/${id}`);
    await fetchCitas();
  }

  useEffect(() => {
    fetchCitas();
  }, []);

  return (
    <section>
      <h1 className="text-center">Citas</h1>
      <div className="d-flex justify-content-center">
        <div className="row border bg-light p-5 m-5">
          {citas.map((cita, index) => {
            const { hora, fecha, cliente, _id } = cita;
            return (
              <div
                key={index}
                id={_id}
                className="col-2 flex-fill border border-2 p-4 m-2"
              >
                <h3>{cliente}</h3>
                <p>Fecha y Hora:</p>
                <p>
                  {fecha.slice(0, 10)} {hora}
                </p>
                <div className="d-flex">
                  <button
                    className="btn naranja m-1"
                    onClick={() => handleBorrar(_id)}
                  >
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
          <Link className="btn naranja mt-5" to="/citas/cita">
            Añadir Cita
          </Link>
        </div>
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
