const { ObjectId } = require("bson");
const express = require("express");
const router = express.Router();
const Cita = require("../models/citaModel");

router.route("/").post((req, res) => {
  const hora = req.body.hora;
  const precio = req.body.precio;
  const fecha = req.body.fecha;
  const servicios = req.body.servicios;
  const cliente = req.body.cliente;
  const telefono = req.body.telefono;
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
  console.log(id);
  try {
    const borrado = await Cita.findByIdAndDelete(id);
    console.log(borrado);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").patch(async (req, res) => {
  const id = req.params.id;
  const hora = req.body.nombre;
  const precio = req.body.pass;
  const fecha = req.body.email;
  const servicio = req.body.servicio;
  const cliente = req.body.cliente;
  const telefono = req.body.telefono;

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
