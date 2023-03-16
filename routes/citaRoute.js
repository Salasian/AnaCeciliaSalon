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

router.route("/:id").delete((req, res) => {
  const id = req.params.id;
  Cita.deleteOne({ _id: ObjectId(id) });
});

router.route("/:id").patch((req, res) => {
  const id = req.params.id;
  const hora = req.body.nombre;
  const precio = req.body.pass;
  const fecha = req.body.email;
  const servicio = req.body.servicio;
  const cliente = req.body.cliente;
  const telefono = req.body.telefono;
  Cita.updateOne(
    { _id: ObjectId(id) },
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
});

module.exports = router;
