import axios from "axios";
import { useContext, createContext, useState } from "react";

const ClientesContext = createContext();

export const useClienteContext = () => useContext(ClientesContext);

const AppContext = ({ children }) => {
  const [clientes, setClientes] = useState([
    {
      nombre: "",
      mail: "",
      password: "",
    },
  ]);

  const fetchClientes = async () => {
    try {
      let clientela = await axios.get("http://localhost:3001/cliente");
      setClientes(clientela);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarClientes = async (newCliente) => {
    try {
      await axios.post("http://localhost:3001/cliente", newCliente);
      await fetchClientes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ClientesContext.Provider value={{ clientes, agregarClientes }}>
      {children}
    </ClientesContext.Provider>
  );
};

export default AppContext;
