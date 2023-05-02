import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cita from "./components/cita/Cita.tsx";
import Citas from "./components/citas/Citas";
import EditarCita from "./components/editarCita/EditarCita";
import Log from "./components/log&Sign/Log";
import Signin from "./components/log&Sign/Signin";
import Servicios from "./components/servicios/Servicios";
import { default as ServicioContext } from "./context/servicioContext";
import { default as ClienteContext } from "./context/clienteContext";
import EditarServicios from "./components/editarservicios/EditarServicios";
import Clientes from "./components/clientes/Clientes";
import EditarCliente from "./components/editarcliente/EditarCliente";
import Inicio from "./components/inicio/Inicio";
import Productos from "./components/productos/Productos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Inicio>

            </Inicio>
          }
        />
        <Route
          path="/citas"
          element={
            <ServicioContext>
              <Citas />
            </ServicioContext>
          }
        />
        <Route
          path="/citas/cita"
          element={
            <ServicioContext>
              <Cita />
            </ServicioContext>
          }
        />
        <Route path="/citas/editar" element={<EditarCita />} />

        <Route
          path="/productos"
          element={
              <Productos />
          }
        />
        <Route
          path="/servicios"
          element={
            <ServicioContext>
              <Servicios />
            </ServicioContext>
          }
        />

        <Route
          path="/servicios/editar"
          element={
            <ServicioContext>
              <EditarServicios />
            </ServicioContext>
          }
        />
        <Route
          path="/clientes"
          element={
            <ClienteContext>
              <Clientes />
            </ClienteContext>
          }
        />
        <Route
          path="/clientes/editar"
          element={
            <ClienteContext>
              <EditarCliente />
            </ClienteContext>
          }
        />

        <Route
          path="/signin"
          element={
            <ClienteContext>
              <Signin />
            </ClienteContext>
          }
        />
        <Route
          path="/login"
          element={
            <ClienteContext>
              <Log />
            </ClienteContext>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
