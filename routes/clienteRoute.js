const express = require("express");
const router = express.Router();
const Cliente = require("../models/clienteModel");

router.route("/").get((req, res) => {
  Cliente.find().then((foundedClientes) => res.json(foundedClientes));
});

router.route("/find/:id").get(async (req, res) => {
  const id = req.params.id;
  try {
    let cliente = await Cliente.findById(id);
    res.json(cliente);
  } catch (error) {
    console.log(error);
  }
});

router.route("/loger").get(async (req, res) => {
  console.log("entró a logger");
  const mail = req.query.mail;
  const password = req.query.password;
  console.log(req.query);
  try {
    let cliente = await Cliente.find({
      mail: mail,
      password: password,
    });

    if (cliente.length > 0) {
      console.log(cliente);
      res.status(200).json({ message: "Admitido", status: 200 });
    } else {
      res.status(404).send("Not found");
    }
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
    console.log(id, borrado);
    res.json(borrado);
  } catch (error) {
    console.log(error);
  }
});

router.route("/:id").patch(async (req, res) => {
  const id = req.params.id;
  const { nombre, mail, password } = req.body;
  try {
    let cliente = await Cliente.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          nombre: nombre,
          mail: mail,
          password: password,
        },
      }
    );
    console.log(cliente);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
