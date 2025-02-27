const express = require('express'); // Importar express para crear rutas
const routes = express.Router(); // Crear un manejador de rutas

// Importar los controladores de ordenes
const { seleccionarCaja, agregarGalleta, finalizarPedido } = require('../controllers/ordenes');

const { listarGalletas } = require('../controllers/galletas'); // Importar el controlador de galletas

const { listarCajas } = require('../controllers/cajas'); // Importar el controlador de cajas

// Ordenes
// Definir las rutas para las ordenes
routes.post('/seleccionar-caja', seleccionarCaja); // Seleccionar una caja para la orden
routes.post('/agregar-galleta', agregarGalleta); // Agregar una galleta a la orden
routes.post('/finalizar-pedido', finalizarPedido); // Finalizar el pedido

// Galletas
routes.get('/galletas', listarGalletas); // Listar las galletas


// Cajas
routes.get('/cajas', listarCajas); // Listar las cajas

module.exports = routes; // Exportar las rutas