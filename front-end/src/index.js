import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
//En caso de no funcionar quitar "/client"
import App from "./App";
import AppContext from "./citasContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext>
    <App />
  </AppContext>
);
