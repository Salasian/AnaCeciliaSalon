import React from "react";
import style from "./productos.module.css";

export const Productos = () => {
  return (
    <div className="d-flex container justify-content-center">
      <div className={`col-2 ${style.productItem}`}>
        <img
          className={style.productPicture}
          src="../../producto1.jpg"
          alt="imagen"
        />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={`col-2 ${style.productItem}`}>
        <img
          className={style.productPicture}
          src="../../producto2.jpg"
          alt="imagen"
        />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={`col-2 ${style.productItem}`}>
        <img
          className={style.productPicture}
          src="../../producto3.jpg"
          alt="imagen"
        />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={`col-2 ${style.productItem}`}>
        <img
          className={style.productPicture}
          src="../../producto4.jpg"
          alt="imagen"
        />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={`col-2 ${style.productItem}`}>
        <img
          className={style.productPicture}
          src="../../producto5.jpg"
          alt="imagen"
        />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={`col-2 ${style.productItem}`}>
        <img
          className={style.productPicture}
          src="../../producto5.jpg"
          alt="imagen"
        />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
    </div>
  );
};

export default Productos;
