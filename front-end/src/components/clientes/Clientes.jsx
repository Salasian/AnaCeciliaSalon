import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import { useCitasContext } from "../../context/citasContext";
import style from "./cliente.module.css";
import { useClienteContext } from "../../context/clienteContext";

const Clientes = () => {
  const { clientes, fetchClientes, borrarCliente } = useClienteContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  function handleEditar(id) {
    let link = `/clientes/editar`;
    navigate(link, { state: { id: id } });
  }

  async function handleBorrar(id) {
    toggleShow();
    borrarCliente(id);
    await fetchClientes();
  }

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <section>
      <h1 className="text-center">Clientes</h1>
      <div className="d-flex justify-content-center">
        <div className="row border bg-light p-5 m-5">
          {clientes.map((cliente, index) => {
            const { nombre, mail, password, _id } = cliente;
            return (
              <div
                key={index}
                id={_id}
                className="col-2 flex-fill text-center border border-2 p-4 m-2"
              >
                <h3>{nombre}</h3>
                <p>{mail}</p>
                <p>{password}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className={`btn m-1 ${style.naranja}`}
                    onClick={() => handleBorrar(_id)}
                  >
                    Borrar
                  </button>
                  <button
                    className={`btn m-1 ${style.naranja}`}
                    onClick={() => handleEditar(_id)}
                  >
                    Editar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="mr-auto">Cliente Borrada</strong>
          <strong className="toast"></strong>
        </Toast.Header>
        <Toast.Body>Borrada Exitosamente</Toast.Body>
      </Toast>
    </section>
  );
};

export default Clientes;
