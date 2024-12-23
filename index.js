// Importa los módulos necesarios
const express = require('express');
const app = express();
const productRoutes = require('./routes/productoRoutes');

// Middleware para parsear el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Usa las rutas de productos
app.use('/productos', productRoutes);

// Configuración del puerto y el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
