const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({});

const File = mongoose.model("File", fileSchema);

module.exports = File;
