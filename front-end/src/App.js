import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateClient from "./components/CreateClient";
import Clients from "./components/Clients";
import EraseClient from "./components/EraseClient";
import ModifyClient from "./components/ModifyClient";
import Cita from "./components/Cita";
import Citas from "./components/Citas";
import EditarCita from "./components/EditarCita";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/citas" element={<Citas />} />

        <Route path="/citas/cita" element={<Cita />} />
        <Route path="/citas/editar" element={<EditarCita />} />

        <Route path="/clients" element={<Clients />} />

        <Route path="/erase" element={<EraseClient />} />

        <Route path="/modify" element={<ModifyClient />} />

        <Route path="/create" element={<CreateClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
