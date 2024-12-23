// Controlador para manejar productos

// Simulamos una lista de productos
let productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 150 },
  ];
  
  // Función para obtener todos los productos
  exports.obtenerProductos = (req, res) => {
    res.json(productos);
  };
  
  // Función para crear un nuevo producto
  exports.crearProducto = (req, res) => {
    const nuevoProducto = req.body;
    nuevoProducto.id = productos.length + 1; // Asigna un ID único
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto); // Responde con el nuevo producto creado
  };
  