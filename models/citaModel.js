const mongoose = require("mongoose");

const citaSchema = {
  hora: String,
  precio: Number,
  fecha: Date,
  servicios: Array,
  cliente: String,
  telefono: String,
};

const Cita = mongoose.model("Cita", citaSchema);

module.exports = Cita;
