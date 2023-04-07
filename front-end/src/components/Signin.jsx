import React from "react";

const Signin = () => {
  return (
    <div>
      <form className="formulario">
        <h1>Registrate</h1>
        <p className="subtext">
          Registrate con nosotros para birndarte una mejor atencion y puedas
          tener una mejor atención con nosotros en Ana Cecila Salon
        </p>
        <div className="contenedor">
          <div className="input-contenedor">
            <i className="fas fa-user icon"></i>
            <input type="text" placeholder="Nombre Completo" />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-envelope icon"></i>
            <input type="text" placeholder="Correo Electronico" />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
            <input type="password" placeholder="Contraseña" />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-key icon"></i>
            <input type="password" placeholder="Confirme contraseña" />
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" value="Registrate" className="button" />
          </div>
          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de
            privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta?
            <a className="link" href="/login">
              Iniciar Sesion
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signin;
