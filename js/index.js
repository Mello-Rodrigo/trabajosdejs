const carrito = []
const productos = [
    {nombre:"buzo"},
    {nombre:"remera"},
    {nombre:"jeans"},
    {nombre:"zapatillas"}
]

function findProd(param1){
    let resultado = productos.find(x => productos.nombre === param1);
    console.log(resultado)
}

findProd("remera")


alert("Ingrese el producto que desee llevar, para salir aprete 0")
let seleccionarProductos = Number(prompt("1-buzo $3000 2-remera $1500 3-jeans $2500 4-zapatillas $6000"))
let seleccionarCantidad;
let total = 0;
if(seleccionarProductos > 0 && seleccionarProductos < 5) {
    switch (SeleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("El producto seleccionado es el buzo, indique la cantidad. Para salir aprete 0."))
            total += 3000 * seleccionarCantidad;
            console.Log("el total es de" + total) 
            carrito.push("buzo")
            break;

        case 2:
            seleccionarCantidad = Number(prompt("El producto seleccionado es la remera, indique la cantidad. Para salir aprete 0."))
            total += 1500 * seleccionarCantidad;
            console.Log("el total es de" + total)
            carrito.push("remera")
            break;

        case 3:
            seleccionarCantidad = Number(prompt("El producto seleccionado es el jeans, indique la cantidad. Para salir aprete 0."))
            total += 2500 * seleccionarCantidad;
            console.Log("el total es de" + total)
            carrito.push("jeans")
            break;

        case 4:
            seleccionarCantidad = Number(prompt("El producto seleccionado son zapatillas, indique la cantidad. Para salir aprete 0."))
            total += 6000 * seleccionarCantidad;
            console.Log("el total es de" + total)
            carrito.push("zapatillas")
            break;
    }
}

function existeProducto(producto){

    const productoEncontrado = producto.find(element => element.trim().toLowerCase() === producto.trim().toLowerCase())

    if(productoEncontrado){
        return true
    } else{
        return false
    }
}

