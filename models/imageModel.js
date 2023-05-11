const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    nombre: String,
    image: String,
  },
  { collection: "ImageDetalils" }
);

const Image = mongoose.model("ImageDetalils", imageSchema);

module.exports = Image;
