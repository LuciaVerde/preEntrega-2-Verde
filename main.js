// Función para pedir el nombre del usuario para luego dar la bienvenida
function pedirNombre() {
    let nombre = prompt('Ingresa tu nombre para comenzar.');
    while (!nombre) {
        nombre = prompt('Por favor, ingresa tu nombre');
    }
    return nombre;
}


let nombre = pedirNombre();
alert('Bienvenido a Muebles Ballena, ' + nombre);


// Array de productos
const productos = [
    { id: 1, nombre: 'Sillon', categoria: 'Asientos', precio: 450 },
    { id: 2, nombre: 'Mesa', categoria: 'Mesas', precio: 800 },
    { id: 3, nombre: 'Mesa ratona', categoria: 'Mesas', precio: 100 },
    { id: 4, nombre: 'Silla', categoria: 'Asientos', precio: 180 },
    { id: 5, nombre: 'Reposera', categoria: 'Asientos', precio: 250 },
    { id: 6, nombre: 'Almohadon', categoria: 'Decoracion', precio: 35 },
];


// Función para filtrar productos y mostrar los resultados al usuario
function filtrado() {
    let productoElegido = prompt('Ingrese el producto a buscar o escriba (terminar) para salir').toLowerCase();


    while (productoElegido !== 'terminar') {
        let encontrados = productos.filter((item) => item.nombre.toLowerCase().includes(productoElegido));


        if (encontrados.length > 0) {
            encontrados.forEach((producto) => {
                alert(`
                Id: ${producto.id}
                Nombre: ${producto.nombre}
                Categoría: ${producto.categoria}
                Precio: ${producto.precio}
            `);
            });
        } else {
            alert('No se encontraron productos con ese nombre.');
        }


        productoElegido = prompt('Ingrese el producto a buscar o escriba (terminar) para salir').toLowerCase();
    }


    alert('Gracias por su visita');
}

filtrado();






