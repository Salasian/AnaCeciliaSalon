import React, { useState } from "react";
import style from "./loginandSignin.module.css";
import { Navigate } from "react-router-dom";
import { useClienteContext } from "../../context/clienteContext";

const Log = () => {
  const { encuentraCliente } = useClienteContext();
  const [goToCitas, setGoToCitas] = useState(false);
  const [error, setError] = useState({ incognita: false, mensaje: "" });
  const [input, setInput] = useState({
    mail: "",
    password: "",
  });

  const handleLogin = async () => {
    if (camposVacios()) {
      setError({ incognita: true, mensaje: "Hay campos vacíos" });
    } else {
      const admitido = await encuentraCliente(input.mail, input.password);
      if (admitido) {
        setGoToCitas(true);
      } else {
        setError({
          incognita: true,
          mensaje: "Nombre o Contraseña incorrectas",
        });
      }
    }
  };

  function camposVacios() {
    if (input.mail && input.password) {
      return false;
    }
    return true;
  }

  if (goToCitas) return <Navigate to="/" />;

  return (
    <div>
      <div className={style.formulario}>
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
            ¿No tienes una cuenta?{" "}
            <a className={style.link} href="registrarvista.html">
              Registrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Log;
