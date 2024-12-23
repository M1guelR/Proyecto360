// Importa los módulos necesarios
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Define las rutas para productos
router.get('/', productoController.obtenerProductos);  // Obtener todos los productos
router.post('/', productoController.crearProducto);   // Crear un nuevo producto

// Exporta las rutas para ser usadas en `index.js`
module.exports = router;
