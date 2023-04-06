import React from "react";
import "./loginandSignin.css";

const Log = () => {
  return (
    <div>
      <form class="formulario">
        <h1>Login</h1>
        <div class="contenedor">
          <div class="input-contenedor">
            <i class="fas fa-envelope icon"></i>
            <input type="text" placeholder="Correo Electronico" />
          </div>

          <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" value="Login" class="button" />
          </div>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿No tienes una cuenta?{" "}
            <a class="link" href="registrarvista.html">
              Registrate{" "}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Log;
