import React, { useState, useEffect } from "react";
import style from "./productos.module.css";
import axios from "axios";

export const Productos = () => {
  const [productos, setProductos] = useState([{}]);
  const [input, setInput] = useState({
    imagen: "",
    nombre: "",
    descripcion: "",
    titulo: "",
  });
  const [vacio, setVacio] = useState({
    estado: false,
    mensaje: "Hay campos vacíos",
  });

  function isVacios() {
    const { nombre, titulo, descripcion, imagen } = input;
    if (nombre && titulo && descripcion && imagen) {
      setVacio({ estado: false, mensaje: "" });
      return false;
    }
    setVacio({ estado: true, mensaje: "Hay campos vacíos" });
    return true;
  }

  function convert64(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setInput({
        ...input,
        imagen: reader.result,
        nombre: e.target.files[0].name,
      });
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }

  async function uploadImage() {
    console.log(input.descripcion, input.titulo);
    if (!isVacios()) {
      axios.post("http://localhost:3001/producto", {
        base64: input.imagen,
        nombre: input.nombre,
        descripcion: input.descripcion,
        titulo: input.titulo,
      });
    }
  }

  const handleBorrar = async (id) => {
    await axios.delete(`http://localhost:3001/producto/${id}`);
  };

  async function fetchProductos() {
    const results = await axios.get("http://localhost:3001/producto");
    setProductos(results.data);
  }

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div className="d-flex container ">
      <div className="row justify-content-center">
        <div className="col-7 ">
          {vacio.estado === true ? (
            <p className={`${style.rojo} text-center`}> {vacio.mensaje}</p>
          ) : (
            <i></i>
          )}
          <h3>Nombre del producto</h3>
          <input
            type="text"
            value={input.titulo}
            onChange={(e) => setInput({ ...input, titulo: e.target.value })}
            className={style.input}
          />
          <h3>Descripción del producto</h3>
          <input
            type="text"
            value={input.descripcion}
            onChange={(e) =>
              setInput({ ...input, descripcion: e.target.value })
            }
            className={style.input}
          />
          <input
            type="file"
            accept="image/*"
            className={style.input}
            onChange={(e) => convert64(e)}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          {input.imagen === "" || input.imagen == null ? (
            ""
          ) : (
            <div className={`p-3`}>
              <div className={`${style.productItem}`}>
                <div className={style.productImage}>
                  <img
                    className={style.productPicture}
                    src={input.imagen}
                    alt="imagen"
                  />
                </div>
              </div>
              <div className="d-flex">
                <button
                  className={`${style.button} ${style.btnServices} flex-fill`}
                  onClick={() => uploadImage()}
                >
                  Agregar producto
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-12">
          <div className="row">
            <h2 className="text-center">Lista de productos</h2>
            {productos.map((producto, index) => {
              const { _id, titulo, descripcion, imagen } = producto;
              return (
                <div
                  className={`col-4 ${style.services} p-3`}
                  key={index}
                  id={_id}
                >
                  <div className={` ${style.productItem}`}>
                    <div className={style.imagen}>
                      <img
                        className={style.productPicture}
                        src={imagen}
                        alt="imagen"
                      />
                    </div>
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                  </div>
                  <div className="d-flex">
                    <button
                      className={`${style.button} ${style.btnServices} flex-fill`}
                      onClick={() => handleBorrar(_id)}
                    >
                      Eliminar producto
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
