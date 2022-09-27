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


class Productos {
    constructor(id, nombre, precio, img) {
        this.id = id
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.img = img
    }
}

products.push(new Productos("1", "Buzo Nike Sportswear", 5000,"img/product-1.jpg" )),
    (new Productos("2", "Buzo Nike Air", 7000, "img/product-2.jpg")),
    (new Productos("3", "Buzo con capucha Nike Sportswear Essentials", 7000,"img/product-3.jpg" )),
    (new Productos("4", "Campera Nike Sportswear Windrunner", 15000,"img/product-4.jpg" )),
    (new Productos("5", "Campera Nike Tech Fleece", 10000,"img/product-5.jpg" )),
    (new Productos("6", "Campera Nike Sportswear", 8000,"img/product-6.jpg" )),
    (new Productos("7", "Remera Nike Roja", 4000, "img/product-7.jpg")),
    (new Productos("8", "Remera Nike Sportswear", 4000,"img/product-8.jpg" )),
    (new Productos("9", "Remera Nike Nsw Tee", 4000,"img/product-9.jpg" ))

    console.log(products)
    products.push

const contenedor = document.getElementById("page-content")

/*function contenedor(productos){
    let resultado= contenedor.find (productos => productos)
    console.log(resultado)
    }
*/
function renderProductos(array) {
    array.forEach(producto => {
        contenedor.innerHTML += `
                  <div class = "producto-container">
                       <h3>${producto.nombre}</h3>
                       <img src=${producto.img} alt=${producto.nombre}>
                       <button class="button-add">Agregar</button>
                  </div>
                  `;
    }
    )
}

renderProductos(productos)

function agregarAlcarrito(id) {
    let resultado = productos.find(productos => productos.id == id)
    console.log(resultado)
    console.log(carrito)
}

