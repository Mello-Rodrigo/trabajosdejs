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
            break;
    }
    let seleccionarProductos = Number(prompt("1-buzo $3000 2-remera $1500 3-jeans $2500 4-zapatillas $6000"))
}