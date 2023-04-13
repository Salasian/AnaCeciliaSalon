const mongoose = require("mongoose");

const clienteSchema = {
  nombre: String,
  mail: String,
  password: String,
};

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
