import React from "react";
import "./loginandSignin.css";

const Log = () => {
  return (
    <div>
      <form className="formulario">
        <h1>Login</h1>
        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-envelope icon"></i>
            <input type="text" placeholder="Correo Electronico" />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" value="Login" className="button" />
          </div>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿No tienes una cuenta?{" "}
            <a className="link" href="registrarvista.html">
              Registrate{" "}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Log;
