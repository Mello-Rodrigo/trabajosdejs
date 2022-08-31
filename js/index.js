alert("Ingrese el producto que desee llevar, para salir aprete 0")
let seleccionarProductos = Number(prompt("1-buzo $3000 2-remera $1500 3-jeans $2500 4-zapatillas $6000")
let seleccionarCantidad;
let total = 0;
while (SeleccionarProductos != 0) {
    switch (SeleccionarProductos) {
        case "1":
            let SeleccionarCantidad = Number(prompt("El producto seleccionado es el buzo, indique la cantidad. Para salir aprete 0."))
            total += 3000
            break;
        case "2":
            let SeleccionarCantidad = Number(prompt("El producto seleccionado es la remera, indique la cantidad. Para salir aprete 0."))
            total += 1500
            break;
        case "3":
            let SeleccionarCantidad = Number(prompt("El producto seleccionado es el jeans, indique la cantidad. Para salir aprete 0."))
            total += 2500
            break;
        case "4":
            let SeleccionarCantidad = Number(prompt("El producto seleccionado son zapatillas, indique la cantidad. Para salir aprete 0."))
            total += 6000
            break;

        default:
            break;
    }
    let seleccionarProductos = Number(prompt("1-buzo $3000 2-remera $1500 3-jeans $2500 4-zapatillas $6000")
}

function suma("el total de la compra es de: " + total) {
    return "el total de la compra es de: " + total
}
