let products = [];
let total = 0;
const carrito = [];

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}
function pay() {
    window.alert(products.join(",\n"))
}

/*
const productos = [
    { nombre: "Buzo Nike Sportswear", precio: 5000, img: "img/product-1.jpg" },
    { nombre: "Buzo Nike Air", precio: 7000, img: "img/product-2.jpg" },
    { nombre: "Buzo con capucha Nike Sportswear Essentials", precio: 7.000, img: "img/product-3.jpg" },
    { nombre: "Campera Nike Sportswear Windrunner", precio: 15000, img: "img/product-4.jpg" },
    { nombre: "Campera Nike Tech Fleece", precio: 10000, img: "img/product-5.jpg" },
    { nombre: "Campera Nike Sportswear", precio: 8000, img: "img/product-6.jpg" },
    { nombre: "Remera Nike Roja", precio: 4000, img: "img/product-7.jpg" },
    { nombre: "Remera Nike Sportswear", precio: 4000, img: "img/product-8.jpg" },
    { nombre: "Remera Nike Nsw Tee", precio: 4000, img: "img/product-9.jpg" }
]
*/

class Productos {
    constructor(id, nombre, precio, img) {
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.img = img
    }
}

products.push(new Productos("1", "Buzo Nike Sportswear", 5000,"img/product-1.jpg" )),
products.push(new Productos("2", "Buzo Nike Air", 7000, "img/product-2.jpg")),
products.push(new Productos("3", "Buzo con capucha Nike Sportswear Essentials", 7000,"img/product-3.jpg" )),
products.push(new Productos("4", "Campera Nike Sportswear Windrunner", 15000,"img/product-4.jpg" )),
products.push(new Productos("5", "Campera Nike Tech Fleece", 10000,"img/product-5.jpg" )),
products.push(new Productos("6", "Campera Nike Sportswear", 8000,"img/product-6.jpg" )),
products.push(new Productos("7", "Remera Nike Roja", 4000, "img/product-7.jpg")),
products.push(new Productos("8", "Remera Nike Sportswear", 4000,"img/product-8.jpg" )),
products.push(new Productos("9", "Remera Nike Nsw Tee", 4000,"img/product-9.jpg" ))

[
{
    "id": 1,
    "name": "Buzo Nike Sportswear",
    "price": 5000,
    "image": "img/product-1.jpg",   
},
{
    "id": 2,
    "name": "Buzo Nike Air",
    "price": 7000,
    "image": "img/product-2.jpg",
},
{
    "id": 3,
    "name": "Buzo con capucha Nike Sportswear Essentials",
    "price": 7000,
    "image": "img/product-3.jpg",
},
{
    "id": 4,
    "name": "Campera Nike Sportswear Windrunner",
    "price": 15000,
    "image": "img/product-4.jpg", 
},
{
    "id": 5,
    "name": "Campera Nike Tech Fleece",
    "price": 10000,
    "image": "img/product-5.jpg", 
},
{
    "id": 6,
    "name": "Campera Nike Sportswear",
    "price": 8000,
    "image": "img/product-6.jpg", 
},
{
    "id": 7,
    "name": "Remera Nike Roja",
    "price": 4000,
    "image": "img/product-7.jpg", 
},
{
    "id": 8,
    "name": "Remera Nike Sportswear",
    "price": 4000,
    "image": "img/product-8.jpg", 
},
{
    "id": 9,
    "name": "Remera Nike Nsw Tee",
    "price": 4000,
    "image": "img/product-9.jpg", 
}
]

const mostrarErorr = ()=> {
    return `
    <div class="error">
        <h2>¡Hubo un problema!</h2>
        <p>No pudimos cargar la informacion de la tienda.</p>
        <p>Por favor, intenta en unos minutos nuevamente.</p>
    <div>`
}

function cargarServicios(array){
    const {id, name, price, image} = array
    return `
           <div class="card">
                <img class="img" src="${image}" alt="${name}">
                <h5>${id} . ${name} </h5>
                <h6>${price}</h6>
                <button class="learn  more" id="${id}" onclick=agregarAlCarrito
           </div>`
}

const cargarContenido = async ()=> {
    try{
        const response = await fetch(URL)
        const data = await response.json()
            services = data
            services.forEach(serv => contenidoHTML += cargarServicios(serv))
    } catch (errror){
        contenidoHTML += mostrarError()
    } finally {
        container.innerHTML = contenidoHTML
    }
}

cargarContenido()

const contenedor = document.getElementById("page-content")

/*function contenedor(productos){
    let resultado= contenedor.find (productos => productos)
    console.log(resultado)
    }
*/

const cardShop = (param) => {
    return ` <div class = "producto-container">
         <h3>${param.nombre}</h3>
         <img src=${param.img} alt=${param.nombre}>
         <button class="button-add" onclick="agregarAlcarrito(${param.id})">Agregar</button>
    </div>
    `;
}

function renderProductos(array) {
   contenedor.innerHTML = array.map(prod => cardShop(prod)).join("")
}

renderProductos(products)

const cartDiv = (param) => {
    return ` <div class = "producto-container">
         <h3>${param.nombre}</h3>
         <img src=${param.img} alt=${param.nombre}>
         <button class="button-add" onclick="agregarAlcarrito(${param.id})">Agregar</button>
    </div>
    `;
}

function renderCarrito(array, destino){
    destino.innerHTML = array.map(producto => cartDiv(producto)).join("")
}

function agregarAlcarrito(id) {
    let resultado = products.find(productos => productos.id == id)
    carrito.push(resultado)
    renderCarrito(carrito, carritoDiv)
}

const carritoDiv = document.querySelector("#carrito")

window.addEventListener("DOMContentLoaded", () => renderProductos(products));

LocaLStorage.setItem("carrito", JSON.stringify(carrito))


