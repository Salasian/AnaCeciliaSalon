const express = require("express");
const router = express.Router();
const Cita = require("../models/citaModel");

router.route("/").post((req, res) => {
  const { hora, precio, fecha, servicios, cliente, telefono } = req.body;
  const newCita = new Cita({
    hora,
    precio,
    fecha,
    servicios,
    cliente,
    telefono,
  });

  console.log(newCita);

  newCita.save();
});

router.route("/").get((req, res) => {
  Cita.find().then((foundCitas) => res.json(foundCitas));
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const borrado = await Cita.findByIdAndDelete(id);
    res.json(borrado);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").patch(async (req, res) => {
  const id = req.params.id;
  const { hora, precio, fecha, servicio, cliente, telefono } = req.body;

  try {
    let cita = await Cita.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          hora: hora,
          precio: precio,
          fecha: fecha,
          servicio: servicio,
          cliente: cliente,
          telefono: telefono,
        },
      }
    );
    console.log(cita);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    let cita = await Cita.findById(id);
    res.json(cita);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
