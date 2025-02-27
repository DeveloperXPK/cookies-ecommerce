const Galletas = require('../models/galletas');

async function listarGalletas(req, res) {
    const galletas = await Galletas.find();
    res.json(galletas);
}


module.exports = {
    listarGalletas,
};
