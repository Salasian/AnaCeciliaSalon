import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import style from "./editar.module.css";

const EditarCita = () => {
  const location = useLocation();
  let id = location.state.id;
  const [goToCitas, setGoToCitas] = useState(false);
  const [fechaError, setFechaError] = useState({ estado: false, mensaje: "" });
  const [vacio, setVacio] = useState({
    estado: false,
    mensaje: "Hay campos vacíos",
  });
  const [input, setInput] = useState({
    telefono: "",
    hora: "",
    fecha: new Date(),
    precio: 0,
    cliente: "",
    servicio1: "",
    servicio2: "",
    servicio3: "",
    precio1: 0,
    precio2: 0,
    precio3: 0,
  });
  //DatePicker
  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 9 ? "text-success" : "text-error";
  };

  function isVacios() {
    const { telefono, cliente, fecha } = input;
    console.log(telefono, cliente, fecha);
    if (telefono && cliente && fecha) {
      setVacio({ estado: false, mensaje: "" });
      return false;
    }
    setVacio({ estado: true, mensaje: "Hay campos vacíos" });
    return true;
  }

  function isAtrasada(fechaCita) {
    const hoy = new Date();
    if (
      fechaCita.getMonth() === hoy.getMonth() &&
      fechaCita.getDay() === hoy.getDay() &&
      fechaCita.getFullYear() === hoy.getFullYear()
    ) {
      setFechaError({
        estado: true,
        mensaje: "No se pueden agendar fechas al día de hoy",
      });
      return true;
    } else if (fechaCita.getTime() <= hoy.getTime()) {
      setFechaError({
        estado: true,
        mensaje: "No se pueden agendar fechas atrasadas",
      });
      return true;
    }
    setFechaError({ estado: false, mensaje: "" });
    return false;
  }

  useEffect(() => {
    fetch(`http://localhost:3001/cita/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setInput(jsonRes);
      });
    // input.servicio1 = input.servicios[0].servicio;
    // input.servicio2 = input.servicios[1].servicio;
    // input.servicio3 = input.servicios[2].servicio;
    // input.precio1 = input.servicios[0].precio;
    // input.precio2 = input.servicios[1].precio;
    // input.precio3 = input.servicios[2].precio;
  }, [id]);

  if (goToCitas) return <Navigate to="/citas" />;

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(value);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    input.fecha = startDate;
    const atrasada = isAtrasada(input.fecha);
    const vacios = isVacios();
    if (!atrasada && !vacios) {
      const hora = `${input.fecha.getHours()}:${input.fecha.getMinutes()}`;
      //Dar el total por todos los servicios solicitados
      const precio = 0;
      var servicios = [];
      if (input.servicio1 && input.precio1) {
        servicios.push({ servicio: input.servicio1, precio: input.precio1 });
        if (input.servicio2 && input.precio2)
          servicios.push({ servicio: input.servicio2, precio: input.precio2 });
        if (input.servicio3 && input.precio3)
          servicios.push({ servicio: input.servicio3, precio: input.precio3 });
      }

      const newCita = {
        telefono: input.telefono,
        hora: hora,
        fecha: input.fecha,
        precio: precio,
        cliente: input.cliente,
        servicios: servicios,
      };
      axios.patch(`http://localhost:3001/cita/${id}`, newCita);
      setGoToCitas(true);
    }
  }

  return (
    <div className="container">
      <section className={style.crud}>
        {vacio.estado === true ? (
          <p className={`${style.rojo} text-center`}> {vacio.mensaje}</p>
        ) : (
          <i></i>
        )}
        <ul className={` d-flex justify-content-center ${style.crudList}`}>
          <li>
            <h4>Cliente</h4>
            <input
              type="text"
              onChange={handleChange}
              name="cliente"
              value={input.cliente}
              autoComplete="off"
              className="form-control"
              placeholder="Inserte un Cliente existente"
            />
          </li>
          <li>
            <h4>Telefono</h4>
            <input
              type="number"
              onChange={handleChange}
              name="telefono"
              value={input.telefono}
              autoComplete="off"
              className="form-control"
              placeholder="Telefono"
            />
          </li>

          <li>
            <h4>Fecha</h4>
            {fechaError.estado === true ? (
              <p className={`${style.rojo} text-center`}>
                {" "}
                {fechaError.mensaje}
              </p>
            ) : (
              <i></i>
            )}
            <DatePicker
              showTimeSelect
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                console.log(date);
              }}
              name="fecha"
              value={input.fecha}
              timeClassName={handleColor}
            />
          </li>
          <li>
            <h4>Precio</h4>
            <input
              onChange={handleChange}
              name="precio"
              value={input.precio}
              autoComplete="off"
              className="form-control"
              placeholder="Precio"
            />
          </li>
        </ul>
        <ul className={` d-flex justify-content-center ${style.crudList}`}>
          <li>
            <h4>Servicio 1</h4>
            <textarea
              onChange={handleChange}
              name="servicio1"
              value={input.servicio1}
              autoComplete="off"
              className="form-control"
              placeholder="Servicio 1"
            />
            <textarea
              type="text"
              onChange={handleChange}
              name="precio1"
              value={input.precio1}
              autoComplete="off"
              className="form-control"
              placeholder="Precio 1"
            />
          </li>
          <li>
            <h4>Servicio 2</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="servicio2"
              value={input.servicio2}
              autoComplete="off"
              className="form-control"
              placeholder="Servicio 2"
            ></textarea>
            <textarea
              type="text"
              onChange={handleChange}
              name="precio1"
              value={input.precio2}
              autoComplete="off"
              className="form-control"
              placeholder="Precio 2"
            ></textarea>
          </li>
          <li>
            <h4>Servicio 3</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="servicio3"
              value={input.servicio3}
              autoComplete="off"
              className="form-control"
              placeholder="Servicio 3"
            ></textarea>
            <textarea
              type="text"
              onChange={handleChange}
              name="precio1"
              value={input.precio3}
              autoComplete="off"
              className="form-control"
              placeholder="Precio 3"
            ></textarea>
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

export default EditarCita;
