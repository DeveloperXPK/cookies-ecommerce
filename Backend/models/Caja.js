const mongoose = require("mongoose");

const CajaSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  capacidad: { type: Number, required: true },
  precio: { type: Number, required: true },
});

module.exports = mongoose.model("Caja", CajaSchema);
