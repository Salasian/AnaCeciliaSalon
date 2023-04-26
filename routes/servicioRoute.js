const express = require("express");
const router = express.Router();
const Servicio = require("../models/servicioModel");

router.route("/").get(async (req, res) => {
  await Servicio.find().then((foundServicios) => {
    res.json(foundServicios);
  });
});

router.route("/").post((req, res) => {
  const { costo, descripcion, nombre } = req.body;

  const newServicio = new Servicio({
    costo,
    descripcion,
    nombre,
  });
  console.log(newServicio);
  newServicio.save();
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const borrado = await Servicio.findByIdAndDelete(id);
    res.json(borrado);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").patch(async (req, res) => {
  const id = req.params.id;
  const { costo, descripcion, nombre } = req.body;

  try {
    let servicio = await Servicio.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          costo: costo,
          descripcion: descripcion,
          nombre: nombre,
        },
      }
    );
    console.log(servicio);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    let servicio = await Servicio.findById(id);
    res.json(servicio);
    console.log(servicio);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
