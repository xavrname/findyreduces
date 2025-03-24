const productos = [
    { nombre: "Laptop", precio: 2504 },
    { nombre: "Mouse", precio: 12 },
    { nombre: "Teclado", precio: 40 },
    { nombre: "Monitor", precio: 400 },
    { nombre: "Auriculares", precio: 85 }
];

const buscarProducto = (nombreProducto) => {
    return productos.find(producto => producto.nombre === nombreProducto);
};

const productoEncontrado = buscarProducto("Teclado");
console.log("Producto encontrado:", productoEncontrado);

const totalCompra = productos.reduce((total, producto) => total + producto.precio, 0);

console.log("Total de la compra:", totalCompra);