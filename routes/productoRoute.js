const express = require("express");
const router = express.Router();
const Producto = require("../models/productoModel");

router.route("/").get(async (req, res) => {
  try {
    const item = await Producto.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/").post(async (req, res) => {
  const { nombre, descripcion, titulo, base64 } = req.body;
  console.log(req.body);
  const producto = await Producto.create({
    nombre: nombre,
    descripcion: descripcion,
    titulo: titulo,
    imagen: base64,
  });
  producto.save();
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const borrado = await Producto.findByIdAndDelete(id);
    console.log(id, borrado);
    res.json(borrado);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
