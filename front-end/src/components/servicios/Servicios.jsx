import React, { useEffect, useState } from "react";
import style from "./servicios.module.css";
import { useNavigate } from "react-router-dom";
import { useSevicioContext } from "../../context/servicioContext";

const Servicios = () => {
  const {
    servicios,
    refresh,
    agregarServicio,
    fetchServicios,
    borrarServicio,
    setRefresh,
  } = useSevicioContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({
    costo: 0,
    descripcion: "",
    nombre: "",
  });

  const toggleShow = () => setShow(!show);

  async function handleAgregar() {
    const newServicio = {
      costo: input.costo,
      descripcion: input.descripcion,
      nombre: input.nombre,
    };
    agregarServicio(newServicio);
    fetchServicios();
  }

  function handleEditar(id) {
    let link = `/servicios/editar`;
    navigate(link, { state: { id: id } });
  }

  async function handleBorrar(id) {
    toggleShow();
    borrarServicio(id);
  }

  useEffect(() => {
    if (refresh) {
      fetchServicios();
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-4">
        <h2>Agregar nuevo servicio</h2>
        <h3 className={style.label}>Nombre del servicio</h3>
        <div className={style.inputContainer}>
          <input
            type="text"
            placeholder="Nombre"
            value={input.nombre}
            onChange={(e) => setInput({ ...input, nombre: e.target.value })}
          />
        </div>

        <h3 className={style.label}>Descripcion del servicio</h3>
        <input
          type="text"
          placeholder="Descripcion"
          value={input.descripcion}
          className={`${style.inputContainer} ${style.description}`}
          onChange={(e) => setInput({ ...input, descripcion: e.target.value })}
        />
        <h3 className={style.label}>Costo</h3>
        <input
          type="text"
          placeholder="Costo"
          className={style.inputContainer}
          value={input.costo}
          onChange={(e) => setInput({ ...input, costo: e.target.value })}
        />
        <div className="d-flex justify-content-center pt-5">
          <button className={style.btnCrear} onClick={() => handleAgregar()}>
            Crear servicio
          </button>
        </div>
      </div>
      <div className="col-1"></div>
      <div className="col-4">
        <div className="row">
          <h2 className="text-center">Lista de servicios</h2>
          {servicios.map((servicio, index) => {
            const { _id, costo, nombre, descripcion } = servicio;
            return (
              <div
                className={`col-6 ${style.services} p-3`}
                key={index}
                id={_id}
              >
                <div className="d-flex justify-content-between">
                  <h4 className="text-center">{nombre}</h4>
                  <h5 className="text-center ">${costo}</h5>
                </div>
                <div className="row">
                  <p>{descripcion}</p>
                </div>
                <div className="d-flex">
                  <button
                    className={` button flex-fill ${style.button} ${style.btnServices}`}
                    onClick={() => handleEditar(_id)}
                  >
                    Modificar servicio
                  </button>
                  <button
                    className={`${style.button} ${style.btnServices} flex-fill`}
                    onClick={() => handleBorrar(_id)}
                  >
                    Eliminar servicio
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
};

export default Servicios;
