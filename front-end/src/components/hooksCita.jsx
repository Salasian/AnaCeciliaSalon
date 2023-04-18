import React from "react";
import axios from "axios";

export const useDashboardCitas = () => {
  //Get
  function handleCitas() {
    fetch("http://localhost:3001/cita").then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
  //Post
  function handlePost(newCita) {
    axios.post("http://localhost:3001/cita", newCita);
  }
  //Delete
  function handleBorrar(id) {
    axios.delete(`http://localhost:3001/cita/${id}`);
  }
  //Patch
  function handleEditar(id, newCita) {
    axios.patch(`http://localhost:3001/cita/${id}`, newCita);
  }

  return <div>useDashboardCitas</div>;
};

export default useDashboardCitas;
