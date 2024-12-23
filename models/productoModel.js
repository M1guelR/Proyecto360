// Este archivo es para un ejemplo con MongoDB (con Mongoose)
// Si usas SQL, no necesitas este archivo.

const mongoose = require('mongoose');

// Define el esquema de productos
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
});

// Crea el modelo basado en el esquema
const Producto = mongoose.model('Producto', productoSchema);

// Exporta el modelo para usarlo en el controlador
module.exports = Producto;
