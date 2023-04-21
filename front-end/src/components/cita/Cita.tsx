import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
import { useCitasContext } from "../../context/citasContext";
import style from "./cita.module.css";
import { useSevicioContext } from "../../context/servicioContext";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";

function Cita() {
  const { servicios, fetchServicios } = useSevicioContext();
  const [goToCitas, setGoToCitas] = useState(false);
  const { agregarCita } = useCitasContext();
  const [vacio, setVacio] = useState({
    estado: false,
    mensaje: "Hay campos vacíos",
  });
  const [fechaError, setFechaError] = useState({ estado: false, mensaje: "" });
  interface IInput {
    telefono: string;
    hora: string;
    fecha: any;
    precio: string;
    cliente: string;
    servicio1: string | null;
    servicio2: string | null;
    servicio3: string | null;
    precio1: number;
    precio2: number;
    precio3: number;
  }
  const [input, setInput] = useState<IInput>({
    telefono: "",
    hora: "",
    fecha: new Date(),
    precio: "",
    cliente: "Ian Salas López",
    servicio1: "",
    servicio2: "",
    servicio3: "",
    precio1: 0,
    precio2: 0,
    precio3: 0,
  });

  const [startDate, setStartDate] = useState(new Date());

  if (goToCitas) {
    return <Navigate to="/citas" />;
  }

  fetchServicios();

  let handleColor = (time: Date) => {
    return time.getHours() > 9 ? "text-success" : "text-error";
  };

  function handleChange(event: any) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
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

  function isVacios() {
    const { telefono, cliente, fecha, servicio1, servicio2, servicio3 } = input;
    if (telefono && cliente && fecha && servicio1 && servicio2 && servicio3) {
      setVacio({ estado: false, mensaje: "" });
      return false;
    }
    setVacio({ estado: true, mensaje: "Hay campos vacíos" });
    return true;
  }

  function handleAnchor(anchor) {
    window.open(anchor, "_blank");
  }

  async function handleClick() {
    input.fecha = startDate;
    if (isAtrasada(input.fecha)) {
    } else if (!isVacios()) {
      const hora = `${input.fecha.getHours()}:${input.fecha.getMinutes()}`;
      var fixHora = hora;
      if (hora.length === 4) {
        fixHora = fixHora + "0";
      }
      //Dar el total por todos los servicios solicitados
      const precio = 0;
      var servicios: Array<{}> = [];
      if (input.servicio1 && input.precio1) {
        servicios.push({ servicio: input.servicio1, precio: input.precio1 });
        if (input.servicio2 && input.precio2)
          servicios.push({ servicio: input.servicio2, precio: input.precio2 });
        if (input.servicio3 && input.precio3)
          servicios.push({ servicio: input.servicio3, precio: input.precio3 });
      }

      const newCita = {
        telefono: input.telefono,
        hora: fixHora,
        fecha: input.fecha,
        precio: precio,
        cliente: input.cliente,
        servicios: servicios,
      };
      agregarCita(newCita);
      console.log("Agregado");
      setGoToCitas(true);
    }
  }

  return (
    <section className={`container ${style.grey}`}>
      <div className="row">
        <div className={`col ${style.precioBg}`}>
          <div className={style.precio}>
            <h3>Precio</h3>
            <h1>${input.precio}</h1>
            <p className={style.sub}>Pesos</p>
            <p style={{ color: "#999", fontSize: 25 }}>
              precio estimado del servicio
            </p>
          </div>
          <hr />
          <div className={style.ticketList}>
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
          <div className="d-flex">
            <img
              alt="insta"
              className={`m-2 ${style.instagram}`}
              onClick={() =>
                handleAnchor("https://www.instagram.com/analopezprince/")
              }
            ></img>
            <img
              alt="whatsapp"
              className={`m-2 ${style.whatsapp}`}
              onClick={() =>
                handleAnchor(
                  "https://api.whatsapp.com/send?phone=%2B526441150556&data=AWA88bt7V0mdjxZNRmka7Ov589e_FPj600jDzrkpOBTuIS1rKF7MkT1u3VgvbR0pVswcb1cbUX6WOdaZw-g5xfGRPrfUvpekYjyNJG3caTUiCeQqFumGzqtnk9OzAGjYTTpuJYZNSS-hrr62OetpxiNtFnc7rH5n4Z-0GLLuQ-POuUR5m3_frIQ2Uxopz6T53w_PqcOCIazJWo5uEYEyE_R0At3kKYfuoGfK1Fsa9KPSrW8PIUg-bmZBo3X_DUxl640KeFH_IYna3FtAuLXLxj01M8W4b1kdPIXY5tXQkrwtDXNndf4&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR0OhoncQNrxne6aEqvCfg7kiDubMJIlkEBEiO07zBgpUuarg6qA8zuYJ0M"
                )
              }
            ></img>
            <img
              alt="facebook"
              className={`m-2 ${style.facebook}`}
              onClick={() =>
                handleAnchor(
                  "https://www.facebook.com/profile.php?id=100047959665948"
                )
              }
            ></img>
          </div>
        </div>
        <div className="col">
          <h1>Apartado de citas</h1>
          <div className="row">
            <div className="col-8">
              <h5>
                Nombre del servicio
                {vacio.estado === true ? (
                  <p className={style.rojo}> {vacio.mensaje}</p>
                ) : (
                  <i></i>
                )}
              </h5>
              <div className={style.inputContainer}>
                <Autocomplete
                  options={servicios.map((servicio) => servicio.nombre)}
                  renderInput={(params) => (
                    <TextField {...params} label="Servicio" />
                  )}
                  onChange={(event, value: string | null, reason, details) =>
                    setInput({ ...input, servicio1: value })
                  }
                />
              </div>
              <div className={style.inputContainer}>
                <Autocomplete
                  options={servicios.map((servicio) => servicio.nombre)}
                  renderInput={(params) => (
                    <TextField {...params} label="Servicio" />
                  )}
                  onChange={(event, value: string | null, reason, details) =>
                    setInput({ ...input, servicio2: value })
                  }
                />
              </div>
              <div className={style.inputContainer}>
                <Autocomplete
                  options={servicios.map((servicio) => servicio.nombre)}
                  renderInput={(params) => (
                    <TextField {...params} label="Servicio" />
                  )}
                  onChange={(event, value: string | null, reason, details) =>
                    setInput({ ...input, servicio3: value })
                  }
                />
              </div>
            </div>
            <div className="col-4">
              <h5>Num de sevicios</h5>
              <div className={style.inputContainer}>
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="precio1"
                  value={input.precio1}
                  onChange={handleChange}
                  className="border"
                />
              </div>
              <div className={style.inputContainer}>
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="precio2"
                  value={input.precio2}
                  onChange={handleChange}
                  className="border"
                />
              </div>
              <div className={style.inputContainer}>
                <input
                  type="number"
                  min="0"
                  max="5"
                  name="precio3"
                  value={input.precio3}
                  onChange={handleChange}
                  className="border"
                />
              </div>
            </div>
          </div>
          <p>Si quieres mas de tres servicios llama al numero * 644 187 4008</p>
          <h3>Número telefono</h3>
          <div className={style.inputContainer}>
            <input
              type="number"
              name="telefono"
              value={input.telefono}
              onChange={handleChange}
              className="border"
            />
          </div>
          <div>
            <h3>Fecha</h3>
            {fechaError.estado === true ? (
              <i className={style.rojo}> {fechaError.mensaje}</i>
            ) : (
              <i></i>
            )}
            <DatePicker
              showTimeSelect
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              name="fecha"
              value={input.fecha}
              timeClassName={handleColor}
              className="border"
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
            className={style.button}
            onClick={handleClick}
          />
          <p>
            <a className={style.link} href="#">
              Necesitas ayuda?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cita;
