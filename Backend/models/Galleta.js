const mongoose = require("mongoose");

const GalletaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
});

module.exports = mongoose.model("Galleta", GalletaSchema);
