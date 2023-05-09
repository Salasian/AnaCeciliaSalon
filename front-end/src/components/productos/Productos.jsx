import React, { useState, useEffect } from "react";
import style from "./productos.module.css";
import axios from "axios";

export const Productos = () => {
  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    console.log(e.target.files[0].name);
    setFileData(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", fileData);

    try {
      const dirImage = await axios.post("http://localhost:3001/single", data);
      console.log(dirImage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {});

  return (
    <div className="d-flex container justify-content-center">
      {/*
      <div className={`col-2 ${style.productItem}`}>
        <div className={style.imagen}>
          <img
            className={style.productPicture}
            src="../../producto1.jpg"
            alt="imagen"
          />
        </div>
        <h3>Titulo</h3>
        <p>Descripción</p>
      </div>
  */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" />
        <input type="text" placeholder="Descripción" />
        <input type="file" onChange={fileChangeHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Productos;
