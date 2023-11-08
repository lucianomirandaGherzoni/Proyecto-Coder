const productosBerlini = [
    { id: "1", nombre: "Sorrentinos", stock: 10, precio: 2000, img: "../img/sorrentinos.jpg", idCat:"1" },
    { id: "2", nombre: "Sorrentinos", stock: 10, precio: 2000, img: "../img/sorrentinos.jpg", idCat:"1" },
    { id: "3", nombre: "Sorrentinos", stock: 10, precio: 2000, img: "../img/sorrentinos.jpg", idCat:"1" },
    { id: "4", nombre: "Tallarines", stock: 10, precio: 1800, img: "../img/tallarines.jpg", idCat:"2" },
    { id: "5", nombre: "Tallarines", stock: 10, precio: 1800, img: "../img/tallarines.jpg", idCat:"2" },
    { id: "6", nombre: "Tallarines", stock: 10, precio: 1800, img: "../img/tallarines.jpg", idCat:"2" },
    { id: "7", nombre: "Tallarines", stock: 10, precio: 1800, img: "../img/tallarines.jpg", idCat:"2" },
    { id: "8", nombre: "Salsas", stock: 10, precio: 1000, img: "../img/salsa.jpg", idCat:"3" },
    { id: "9", nombre: "Salsas", stock: 10, precio: 1000, img: "../img/salsa.jpg", idCat:"3" },
    { id: "10", nombre: "Salsas", stock: 10, precio: 1000, img: "../img/salsa.jpg", idCat:"3" },
]

//funcion para obtener todos los productos
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productosBerlini);
        }, 500)
    })
}

//funcion para obtener un producto segun su ID | METODO FIND
export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productosBerlini.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
    
}
//funcion que retorna un array que filtrado por categoria | METODO FILTER
export const getProductosCategoria = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = productosBerlini.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 500)
    })
}