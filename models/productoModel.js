const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  titulo: String,
  descripcion: String,
  imagen: String,
});

const Producto = mongoose.model("Producto", productSchema);

module.exports = Producto;
