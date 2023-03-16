import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Cita() {
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

  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 9 ? "text-success" : "text-error";
  };

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
      cliente: "Ian Salas López",
      servicios: servicios,
    };
    console.log(newCita);
    axios.post("http://localhost:3001/cita", newCita);
  }

  return (
    <section className="container grey">
      <div className="row">
        <div className="col precioBg">
          <div className="precio">
            <h3>Precio</h3>
            <h1 onChange={handleChange} name="precio" value={input.precio}>
              $0.00
            </h1>
            <p className="sub">Pesos</p>
            <p style={{ color: "#999", fontSize: 25 }}>
              precio estimado del servicio
            </p>
          </div>
          <hr />
          <div className="ticket-list">
            <p>El servicio incluye lo siguiente</p>
            <p>Ejemplo</p>
            <p>Ejemplo</p>
            <p>Ejemplo</p>
            <p>Ejemplo</p>
            <p>Ejemplo</p>
            <p>Ejemplo</p>
          </div>
          <hr />
          <p>
            Si tienes alguna duda con tu servicio no dudes en conactarte con
            nosotros via redes sociales
          </p>
        </div>
        <div className="col">
          <h1>Apartado de citas</h1>
          <div className="row">
            <div className="col-8">
              <h5>Nombre del servicio</h5>
              <div className="input-container">
                <input
                  type="text"
                  name="servicio1"
                  value={input.servicio1}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="servicio2"
                  value={input.servicio2}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  name="servicio3"
                  value={input.servicio3}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-4">
              <h5>Num de sevicios</h5>
              <div className="input-container">
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="precio1"
                  value={input.precio1}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="precio2"
                  value={input.precio2}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="precio3"
                  value={input.precio3}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <p>Si quieres mas de tres servicios llama al numero * 644 187 4008</p>
          <h3>Número telefono</h3>
          <div className="input-container">
            <input
              type="text"
              name="telefono"
              value={input.telefono}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Fecha</h3>
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
          </div>
          <p>
            Una vez creada la cita podras cancelarla o modificarle siempre y
            cuando sea antes de su turno de cita
          </p>
          <input
            onChange={handleChange}
            type="submit"
            value="Confirmar Cita"
            className="button"
            onClick={handleClick}
          />
          <p>
            <a className="link" href="#">
              Necesitas ayuda?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cita;
