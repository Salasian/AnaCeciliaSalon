import axios from "axios";
import { useContext, createContext, useState } from "react";

const ServiciosContext = createContext();

export const useSevicioContext = () => useContext(ServiciosContext);

const AppContext = ({ children }) => {
  const [refresh, setRefresh] = useState(true);
  const [servicios, setServicios] = useState([
    {
      costo: 0,
      descripcion: "",
      nombre: "",
    },
  ]);

  const fetchServicios = async () => {
    let serviciosTemp = await axios.get(`http://localhost:3001/servicio`);
    setServicios(serviciosTemp.data);
    setRefresh(true);
  };

  const agregarServicio = async (newServicio) => {
    await axios.post(`http://localhost:3001/servicio`, newServicio);
  };

  const borrarServicio = async (id) => {
    await axios.delete(`http://localhost:3001/servicio/${id}`);
  };

  const editarServicio = async (id, editedServicio) => {};

  return (
    <ServiciosContext.Provider
      value={{
        servicios,
        fetchServicios,
        agregarServicio,
        borrarServicio,
        editarServicio,
        setRefresh,
        refresh,
      }}
    >
      {children}
    </ServiciosContext.Provider>
  );
};

export default AppContext;
