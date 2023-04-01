console.log('Bienvenido a mi tienda aventurero!')    
let descuentoArmasTierra = 0.80 // Multiplicador a aplicar al precio de las armas de tierra (descuento del 20%)

// Definimos un objeto armatierra, con propiedades categoria de tipo string, y un precio de tipo numero
let armatierra = {
    categoria:"tierra",
    precio:500,
}


// Definimos una lista (array) de armas, incluyendo solo el arma de tierra
let listaArmas = [armatierra]

// Calcula el precio de un item
function calcularPrecioItem(item){ // Recibe como parametro un item (objeto) con categoria y precio
    let precioFinal = item.precio // Inicializa el precio final como el precio del item

    if (item.categoria === "tierra"){ // Si el item es de tierra, el precio final incluye un descuento
        precioFinal = precioFinal * descuentoArmasTierra
    }

    return precioFinal // Devolvemos el precio final
}

// Calcula la suma de los precios de todos los items de la tienda
function calcularPrecioTotalTienda(armas){ // Recibe como parametro una lista (array) de armas (objetos)
    let total = 0; // Inicializa el total en 0

    for(let item = 0; item<armas.length;item++){ // Con un loop "for" recorre todos los items de la lista (array) de armas
        total = total + calcularPrecioItem(armas[item]) // Para cada item, suma al total acumulado el precio del mismo, calculado por la funcion calcularPrecioItem
    }

    // Una vez finalizado el ciclo, devolvemos el total acumulado
    return total
}