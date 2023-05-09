const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

app.use(cors());
app.use(express.json());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

mongoose.connect(
  "mongodb+srv://iansalas216755:salon@anaceciliasalon.ypjyi4f.mongodb.net/anacecilia",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload Success");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/cita", require("./routes/citaRoute"));

app.use("/servicio", require("./routes/servicioRoute"));

app.use("/cliente", require("./routes/clienteRoute"));

app.use("/producto", require("./routes/productoRoute"));

app.listen(3001, function () {
  console.log("Running on 3001");
});
