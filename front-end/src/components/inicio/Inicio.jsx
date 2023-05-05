import React from "react";
import style from "./inicio.module.css";

export const Inicio = () => {
  return (
    <div className="container">
      <div className="row">
        <article className={`col-sm-6 ${style.columna}`}>
          <h1>
            Bienvenidos al mejor salon de belleza con los mejores servicios
          </h1>
          <p>
            Ana Cecilia Salon es un salón de belleza que procura servicios de
            alta calidad hacia sus clientes sean de la mejor calidad y la mejor
            experiencia, entre los servicios se ofrecen:
          </p>
          <div className={`d-flex ${style.muestras} `}>
            <li>
              <img src="/cortes.jpg" alt="servicio" />
              <p className="text-center">Cortes y peinados</p>
            </li>
            <li>
              <img src="/maquillaje.jpg" alt="servicio" />
              <p className="text-center">Maquillajes</p>
            </li>
            <li>
              <img src="/tratamiento.jpg" alt="servicio" />
              <p className="text-center">Tratamientos capilares y más</p>
            </li>
          </div>
        </article>
        <div className="col-1"></div>
        <aside className={`col-4 d-flex flex-column ${style.menuContainer}`}>
          <div className={`d-flex flex-column ${style.sesion}`}>
            <h4>Registrate</h4>
            <p className="text-center">
              Si no tienes una cuenta registrada y deseas agendar servicios y
              ver los productos de la estética
            </p>
            <button>Crea cuenta</button>
            <section className={`d-flex ${style.separatorBox}`}>
              <div className={`col-5 flex-fill ${style.separator}`}></div>
              <div className={`col-1 text-center ${style.sesionText}`}>ó</div>
              <div className={`col-5 flex-fill ${style.separator}`}></div>
            </section>
            <h5>¿Ya tienes una cuenta?</h5>
            <button>Acceder</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Inicio;
