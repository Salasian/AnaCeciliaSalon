const mongoose = require("mongoose");

const servicioSchema = {
  descripcion: String,
  costo: Number,
  nombre: String,
};

const Servicio = mongoose.model("Servicio", servicioSchema);

module.exports = Servicio;
