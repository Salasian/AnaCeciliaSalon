const express = require("express");
const router = express.Router();
const Producto = require("../models/productoModel");

router.route("/").get(async (req, res) => {
  console.log("get items");
  try {
    const item = await Producto.find();
    res.status(200).json(item);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/").post(async (req, res) => {
  const producto = await Producto.create(req.body);
  producto.save();
  res.send(savedImage);
});

module.exports = router;
