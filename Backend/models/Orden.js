const mongoose = require("mongoose");

const OrdenSchema = new mongoose.Schema({
  caja: { type: mongoose.Schema.Types.ObjectId, ref: "Caja", required: true },
  galletas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Galleta" }],
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Orden", OrdenSchema);
