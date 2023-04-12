import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cita from "./components/cita/Cita";
import Citas from "./components/citas/Citas";
import EditarCita from "./components/editarCita/EditarCita";
import Log from "./components/Log";
import Signin from "./components/Signin";
import Servicios from "./components/servicios/Servicios";
import AppContext from "./servicioContext";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/citas" element={<Citas />} />
        <Route path="/citas/cita" element={<Cita />} />
        <Route path="/citas/editar" element={<EditarCita />} />

        <Route
          path="/servicios"
          element={
            <AppContext>
              <Servicios />
            </AppContext>
          }
        />

        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Log />} />
      </Routes>
    </Router>
  );
}

export default App;
