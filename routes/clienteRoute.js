const express = require("express");
const router = express.Router();
const Cliente = require("../models/clienteModel");

router.route("/").get((req, res) => {
  Cliente.find().then((foundedClientes) => res.json(foundedClientes));
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    let cliente = await Cliente.findById(id);
    res.json(cliente);
  } catch (error) {
    console.log(error);
  }
});

router.route("/").post((req, res) => {
  const { nombre, mail, password } = req.body;

  const newCliente = new Cliente({ nombre, mail, password });
  console.log(newCliente);
  newCliente.save();
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  try {
    const borrado = await Cliente.findByIdAndDelete(id);
    res.json(borrado);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").patch((req, res) => {
  const id = req.params.id;
  const { nombre, mail, password } = req.body;

  try {
    Cliente.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          nombre: nombre,
          mail: mail,
          password: password,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
