import React, { useState } from "react";
import style from "./loginandSignin.module.css";
import { useClienteContext } from "../../context/clienteContext";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const { agregarClientes } = useClienteContext();
  const [goToCitas, setGoToCitas] = useState(false);
  const [error, setError] = useState({ incognita: false, mensaje: "" });
  const [input, setInput] = useState({
    nombre: "",
    mail: "",
    password: "",
    passwordConfirm: "",
  });

  const handleRegistrar = () => {
    if (camposVacios()) {
      setError({ incognita: true, mensaje: "Hay campos vacíos" });
    } else {
      if (isValidEmail(input.mail)) {
        if (input.password.length > 7) {
          if (input.password === input.passwordConfirm) {
            agregarClientes(input);
            setGoToCitas(true);
          } else {
            setError({
              incognita: true,
              mensaje: "Las contraseñas no coinciden",
            });
          }
        } else {
          setError({
            incognita: true,
            mensaje: "La contraseña tiene que contener mínimo 8 caracteres",
          });
        }
      } else {
        setError({ incognita: true, mensaje: "Email inválido" });
      }
    }
  };

  function camposVacios() {
    if (input.mail && input.nombre && input.password && input.passwordConfirm) {
      return false;
    }
    return true;
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  if (goToCitas) return <Navigate to="/login" />;

  return (
    <div>
      <div className={style.formulario}>
        <h1>Registrate</h1>
        <p className={style.subtext}>
          Registrate con nosotros para birndarte una mejor atencion y puedas
          tener una mejor atención con nosotros en Ana Cecila Salon
        </p>
        <div className={style.contenedor}>
          <div className={style.inputContenedor}>
            <input
              type="text"
              placeholder="Nombre Completo"
              name="nombre"
              onChange={(e) => setInput({ ...input, nombre: e.target.value })}
            />
          </div>
          <div className={style.inputContenedor}>
            <input
              type="text"
              placeholder="Correo Electronico"
              name="mail"
              onChange={(e) => setInput({ ...input, mail: e.target.value })}
            />
          </div>
          <div className={style.inputContenedor}>
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div className={style.inputContenedor}>
            <input
              type="password"
              placeholder="Confirme contraseña"
              name="passwordConfirm"
              onChange={(e) =>
                setInput({ ...input, passwordConfirm: e.target.value })
              }
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Registrate"
              className={style.button}
              onClick={handleRegistrar}
            />
          </div>
          <p
            className={`${
              error.incognita ? `${style.red}` : `${style.hidden}`
            } `}
          >
            {error.mensaje}
          </p>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a className={style.link} href="/login">
              Iniciar Sesion
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
