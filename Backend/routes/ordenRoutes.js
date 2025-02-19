const express = require("express");
const router = express.Router();
const Orden = require("../models/Orden");
const Caja = require("../models/Caja");

router.post("/seleccionar-caja", async (req, res) => {
  const { cajaId } = req.body;
  const caja = await Caja.findById(cajaId);

  if (!caja) return res.status(404).json({ error: "Caja no encontrada" });

  const nuevaOrden = new Orden({
    caja: cajaId,
    galletas: [],
    total: caja.precio,
  });

  await nuevaOrden.save();
  res.json(nuevaOrden);
});

router.post("/agregar-galleta", async (req, res) => {
  const { ordenId, galletaId } = req.body;
  const orden = await Orden.findById(ordenId).populate("caja");

  if (!orden) return res.status(404).json({ error: "Orden no encontrada" });

  if (orden.galletas.length >= orden.caja.capacidad) {
    return res
      .status(400)
      .json({
        error: "¡No puedes agregar más galletas de las que permite la caja!",
      });
  }

  orden.galletas.push(galletaId);
  await orden.save();
  res.json(orden);
});

router.post("/finalizar-pedido", async (req, res) => {
  const { ordenId } = req.body;
  const orden = await Orden.findById(ordenId).populate("galletas");

  if (!orden) return res.status(404).json({ error: "Orden no encontrada" });

  res.json({ mensaje: "Pedido finalizado", orden });
});

module.exports = router;
