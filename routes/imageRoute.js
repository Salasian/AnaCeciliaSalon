const express = require("express");
const router = express.Router();
const Images = require("../models/imageModel.js");

router.route("/upload").post(async (req, res) => {
  const { base64, nombre } = req.body;

  try {
    Images.create({ image: base64, nombre: nombre });
    console.log(nombre);
    res.send({ Status: "ok" });
  } catch (error) {
    res.send({ Status: "error", data: error });
  }
});

module.exports = router;
