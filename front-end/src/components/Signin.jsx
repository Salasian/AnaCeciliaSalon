import React from "react";
import "./loginandSignin.css";

const Signin = () => {
  return (
    <body>
      <form class="formulario">
        <h1>Registrate</h1>
        <p class="subtext">
          Registrate con nosotros para birndarte una mejor atencion y puedas
          tener una mejor atención con nosotros en Ana Cecila Salon
        </p>
        <div class="contenedor">
          <div class="input-contenedor">
            <i class="fas fa-user icon"></i>
            <input type="text" placeholder="Nombre Completo" />
          </div>

          <div class="input-contenedor">
            <i class="fas fa-envelope icon"></i>
            <input type="text" placeholder="Correo Electronico" />
          </div>

          <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
            <input type="password" placeholder="Contraseña" />
          </div>

          <div class="input-contenedor">
            <i class="fas fa-key icon"></i>
            <input type="password" placeholder="Confirme contraseña" />
          </div>
          <div className="d-flex justif-content-center">
            <input type="submit" value="Registrate" class="button" />
          </div>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta?
            <a class="link" href="/login">
              Iniciar Sesion
            </a>
          </p>
        </div>
      </form>
    </body>
  );
};

export default Signin;
