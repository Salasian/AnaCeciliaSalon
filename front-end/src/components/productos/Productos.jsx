import React from "react";
import style from "./productos.module.css";

export const Productos = () => {
  return (
    <div className={style.productGrid}>
      <div className={style.productItem}>
        <img src="product-1.jpg" alt="imagen" />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={style.productItem}>
        <img src="product-1.jpg" alt="imagen" />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={style.productItem}>
        <img src="product-1.jpg" alt="imagen" />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={style.productItem}>
        <img src="product-1.jpg" alt="imagen" />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
      <div className={style.productItem}>
        <img src="product-1.jpg" alt="imagen" />
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
    </div>
  );
};

export default Productos;
