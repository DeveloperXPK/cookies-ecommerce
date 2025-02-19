const express = require("express");
const router = express.Router();
const Caja = require("../models/Caja");

router.get("/", async (req, res) => {
  const cajas = await Caja.find();
  res.json(cajas);
});

module.exports = router;
