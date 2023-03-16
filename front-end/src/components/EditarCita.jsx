import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useLocation } from "react-router-dom";

const EditarCita = () => {
  const location = useLocation();
  let id = location.state.id;

  const [input, setInput] = useState({
    telefono: "",
    hora: "",
    fecha: new Date(),
    precio: 0,
    cliente: "",
    servicios: "",
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

  function handleChange(event) {
    const { name, value } = event.target;

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
  }

  return (
    <div className="container">
      <section className="crud">
        <ul className="crud-list">
          <li>
            <h4>Cliente</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="cliente"
              value={input.cliente}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Inserte un Cliente existente"
            />
          </li>
          <li>
            <h4>Telefono</h4>
            <textarea
              onChange={handleChange}
              name="telefono"
              value={input.telefono}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Telefono"
            ></textarea>
          </li>

          <li>
            <h4>Fecha</h4>
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
            <textarea
              onChange={handleChange}
              name="precio"
              value={input.precio}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Precio"
            ></textarea>
          </li>
        </ul>

        <ul className="crud-list">
          <li>
            <h4>Servicio 1</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="servicio1"
              value={input.servicio1}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Servicio 1"
            ></textarea>
          </li>
          <li>
            <h4>Servicio 2</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="servicio2"
              value={input.servicio2}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Servicio 2"
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
              className="form-control no-resize"
              placeholder="Servicio 3"
            ></textarea>
          </li>
          <li>
            <h4>Precio 1</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="precio1"
              value={input.precio1}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Precio 1"
            ></textarea>
          </li>
          <li>
            <h4>Precio 2</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="precio2"
              value={input.precio2}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Precio 2"
            ></textarea>
          </li>
          <li>
            <h4>Precio 3</h4>
            <textarea
              type="text"
              onChange={handleChange}
              name="precio3"
              value={input.precio3}
              autoComplete="off"
              className="form-control no-resize"
              placeholder="Precio 3"
            ></textarea>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <button className="btn naranja" onClick={handleClick}>
              Aceptar
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default EditarCita;
