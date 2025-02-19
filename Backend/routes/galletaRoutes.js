const express = require("express");
const router = express.Router();
const Galleta = require("../models/Galleta");

router.get("/", async (req, res) => {
  const galletas = await Galleta.find();
  res.json(galletas);
});

module.exports = router;
