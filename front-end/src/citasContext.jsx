import axios from "axios";
import { createContext, useContext, useState } from "react";

const CitasContext = createContext();

export const useCitasContext = () => useContext(CitasContext);

const AppContext = ({ children }) => {
  const [citas, setCitas] = useState([
    {
      _id: "",
      telefono: "",
      hora: "",
      fecha: "",
      precio: 0,
      cliente: "",
      servicios: [],
    },
  ]);

  const fetchCitas = async () => {
    let citasTemp = await axios.get("http://localhost:3001/cita");
    setCitas(citasTemp.data);
  };

  return (
    <CitasContext.Provider value={{ citas, fetchCitas }}>
      {children}
    </CitasContext.Provider>
  );
};

export default AppContext;
