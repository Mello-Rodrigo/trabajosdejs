let products = [];
let total = 0;
const carrito = [];

function add(product, price){
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}
function pay() {
    window.alert(products.join(",\n"))
}

const productos = [
    {nombre:"Buzo Nike Sportswear", precio: 5.000, img:"img/product-1.jpg"},
    {nombre:"Buzo Nike Air", precio: 7.000, img:"img/product-2.jpg"},
    {nombre:"Buzo con capucha Nike Sportswear Essentials", precio: 7.000, img:"img/product-3.jpg"},
    {nombre:"Campera Nike Sportswear Windrunner", precio: 15.000, img:"img/product-4.jpg"},
    {nombre:"Campera Nike Tech Fleece", precio: 10.000, img:"img/product-5.jpg"},
    {nombre:"Campera Nike Sportswear", precio: 8.000, img:"img/product-6.jpg"},
    {nombre:"Remera Nike Roja", precio: 4.000, img:"img/product-7.jpg"},
    {nombre:"Remera Nike Sportswear", precio: 4.000, img:"img/product-8.jpg"},
    {nombre:"Remera Nike Nsw Tee", precio: 4.000, img:"img/product-9.jpg"}
]

function findProd (id){
    let resultado = productos.find(prod => prod.id === id)
    console.log(resultado)
}

let contenedor = document.getElementById("contenedor")

function render(){
    productos.forEach(x => {
        const div = document.createElement("div");
        div.innerHTML = `<div>
                            <a href ="#resultado">
                                <img id=${x.nombre} src=${x.img} alt=${x.nombre}
                            </a>
                            <div>
                               <h3>${x.nombre}</h3>
                            </div>
                        </div>
     `;
    contenedor.appendChild(div);
    }
    )    
}







