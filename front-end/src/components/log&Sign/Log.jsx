import React, { useState } from "react";
import style from "./loginandSignin.module.css";
import { Navigate } from "react-router-dom";

const Log = () => {
  const [input, setInput] = useState({
    mail: "",
    password: "",
  });

  const handleLogin = () => {
    if (camposVacios()) {
      //verificar credenciales
    } else {
      //campos vacíos
    }
  };

  function camposVacios() {
    if (input.mail && input.password) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <form className={style.formulario}>
        <h1>Login</h1>
        <div className={style.contenedor}>
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
          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="Login"
              className={style.button}
              onClick={handleLogin}
            />
          </div>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿No tienes una cuenta?{" "}
            <a className={style.link} href="registrarvista.html">
              Registrate
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Log;
