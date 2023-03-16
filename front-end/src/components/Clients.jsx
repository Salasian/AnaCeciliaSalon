import React, { useEffect, useState } from "react";

function Clients() {
  const [clients, setClients] = useState([
    {
      nombre: "",
      pass: "",
      email: "",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3001/clients")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setClients(jsonRes));
  });

  return (
    <div className="container">
      <h1>Clients</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Passowrd</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{client.nombre}</td>
              <td>{client.pass}</td>
              <td>{client.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Clients;
