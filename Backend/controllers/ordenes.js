const Orden = require("../models/Orden");
const Caja = require("../models/Caja");

// Seleccionar una caja para la orden
async function seleccionarCaja(req, res) {
    const { cajaId } = req.body; // Se recibe el id de la caja
    const caja = await Caja.findById(cajaId); // Se busca la caja en la base de datos

    // Si la caja no existe, se envía un error
    if (!caja) return res.status(404).json({ error: "Caja no encontrada" });

    // Se crea una nueva orden con la caja seleccionada
    const nuevaOrden = new Orden({
        caja: cajaId, // Se asigna la caja a la orden
        galletas: [], // Se inicializa la orden sin galletas
    });

    await nuevaOrden.save(); // Se guarda la orden en la base de datos
    res.json(nuevaOrden); // Se envía la orden creada como respuesta
}

async function agregarGalleta(req, res) {
    const { ordenId, galletaId } = req.body;
    const orden = await Orden.findById(ordenId).populate("caja");

    if (!orden) return res.status(404).json({ error: "Orden no encontrada" });

    if (orden.galletas.length >= orden.caja.capacidad) {
        return res.status(400).json({
            error: "¡No puedes agregar más galletas de las que permite la caja!",
        });
    }

    orden.galletas.push(galletaId);
    await orden.save();
    res.json(orden);
}

async function finalizarPedido(req, res) {
    const { ordenId } = req.body;
    const orden = await Orden.findById(ordenId).populate("galletas");

    if (!orden) return res.status(404).json({ error: "Orden no encontrada" });

    res.json({ mensaje: "Pedido finalizado", orden });
}

module.exports = {
    seleccionarCaja,
    agregarGalleta,
    finalizarPedido
};