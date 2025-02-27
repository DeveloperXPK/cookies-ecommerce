const Caja = require("../models/Caja");

// Listar las cajas
async function listarCajas(req, res) {
    const cajas = await Caja.find(); // Se buscan todas las cajas en la base de datos
    res.json(cajas); // Se envían las cajas como respuesta
}

module.exports = {
    listarCajas,
};