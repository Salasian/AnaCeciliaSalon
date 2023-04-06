import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cita from "./components/Cita";
import Citas from "./components/Citas";
import EditarCita from "./components/EditarCita";
import Log from "./components/Log";
import Signin from "./components/Signin";
import Servicios from "./components/Servicios";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/citas" element={<Citas />} />
        <Route path="/citas/cita" element={<Cita />} />
        <Route path="/citas/editar" element={<EditarCita />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
