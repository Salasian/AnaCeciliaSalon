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
      setClientes(clientela.data);
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

  const borrarCliente = async (id) => {
    try {
      const borrado = await axios.delete(`http://localhost:3001/cliente/${id}`);
      if (borrado.status === 200) return true;
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const editarCliente = async (id, editedCliente) => {
    await axios.patch(`http://localhost:3001/cliente/${id}`, editedCliente);
  };

  const encuentraCliente = async (mail, password) => {
    try {
      const encontrado = await axios.get(
        `http://localhost:3001/cliente/loger`,
        { params: { mail: mail, password: password } }
      );
      if (encontrado.status === 200) return true;
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <ClientesContext.Provider
      value={{
        clientes,
        fetchClientes,
        agregarClientes,
        encuentraCliente,
        borrarCliente,
        editarCliente,
      }}
    >
      {children}
    </ClientesContext.Provider>
  );
};

export default AppContext;
