// Simulador eCommerce para Anabella Avena - Ilustradora Freelance

let cantidadProductos = 0;
const listaDeCompras = [];
let precioSinIva = 0;
let nombre = "";
let apellido = "";
const iva = 1.21;


//Constructor de Productos
class Producto {
    constructor(nombre, precio, stockDisponible) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stockDisponible;
        this.stockDisponible = parseInt(stockDisponible);

    }
    añadir(cantidad) {
        if (this.stock > 0) {
            cantidad = parseInt(prompt("Cuanto/as " + this.nombre + " deseas añadir al carrito?\nStock disponible: " + this.stock));
            let subtotal = cantidad * this.precio;
            if (this.stock >= cantidad) {
                if (cantidad >= 1) {
                    cantidadProductos = cantidadProductos + cantidad;
                    precioSinIva = precioSinIva + subtotal;
                    listaDeCompras.push(cantidad + "x " + this.nombre);
                    this.stock = this.stock - cantidad;
                    if (cantidad == 1) {
                        return alert(this.nombre + " ha sido añadido al carrito.");
                    } else {
                        return alert(cantidad + "x " + this.nombre + " han sido añadidos al carrito.");
                    }
                } else {
                    return alert("Atención: Debes escribir un numero entero mayor a 1.");
                }
            } else {
                return alert("Atención: Stock insuficiente para cumplir la demanda, puedes pedir " + this.stock + " unidades o menos.");
            }
        } else {
            return alert("Al parecer nos hemos quedado sin stock, por favor intenta mas tarde.");
        }
    }
}

//Catálogo de productos
//Libretas
const libretaChicasGamer = new Producto("Libreta de Chicas Gamer", 12.5, 10);
const libretaSixFanarts = new Producto("Libreta de Six Fanarts", 10.5, 15);
const libretaLuluMartins = new Producto("Libreta de Lulu Martins", 11.0, 6);
const libretaChristineHug = new Producto("Libreta de Christine Hug", 12.0, 8);


//Stickers
const stickerSirenas = new Producto("Stickers de Sirenas", 3.50, 6);
const stickerChicas = new Producto("Stickers de Chicas", 3.0, 7);
const stickerHalloween = new Producto("Stickers de Halloween", 2.75, 10);
const stickerAnimales = new Producto("Stickers de Animales", 3.5, 10);

//Posters
const posterNocheVerano = new Producto("Poster de una Noche de Verano", 5.75, 6);
const posterAmantesMariposa = new Producto("Poster de Amantes Mariposa", 6.0, 8);
const posterDeSanValentin = new Producto("Poster de San Valentín espacial", 5.0, 10);
const posterDeGatos = new Producto("Poster de Gatos", 5.50, 7);

//A partir de aquí comienza el menú...

nombre = prompt("Por favor Introduzca su nombre de pila. (su apellido se lo preguntaremos luego).");
apellido = prompt("Por favor introduzca su apellido.");

MENUPRINCIPAL();

function MENUPRINCIPAL() {
    let menuOpcion = parseInt(prompt("--- Simulador eCommerce --- \n--- Anabella Avena - Ilustradora Freelance ---\nBienvenido/a al simulador de tienda, aquí podrás ver mi catálogo de items en venta.\nPor favor elige una opción:\n1-Libretas\n2-Stickers\n3-Posters\n4-Ir al carrito de compras\n5-Salir "));
    if (menuOpcion >= 1 && menuOpcion <= 5) {
        switch (menuOpcion) {
            case 1:
                alert("Ha entrado en el menú libretas...");
                MENULIBRETAS();
                break;
            case 2:
                alert("Ha entrado en el menú Stikers");
                MENUSTICKERS();
                break;
            case 3:
                alert("Ha entrado en el menú Posters");
                MENUPOSTERS();
                break;
            case 4:
                alert("Accediendo al Carrito de Compras");
                MENUCARRITO();
                break;
            case 5:
                EXITPROGRAM();
                break;
        }
    } else {
        alert("Por favor elija una opción del 1 al 5 \n \n volvamos a intentarlo.");
        MENUPRINCIPAL();
    }
}

function MENULIBRETAS() {
    let menuOpcion = parseInt(prompt("---Anabella Avena - Ilustradora Freelance---\n---Menú de libretas---\nPor favor elija una opción para agregar al carrito:\n1-Libreta de Chicas Gamer - Precio: $12.50- - Unidades disponibles: " + libretaChicasGamer.stock + "\n2-Libreta Six Fanarts - Precio: $10.50- - Unidades disponibles: " + libretaSixFanarts.stock + "\n3-Libreta Lulu Martins - Precio: $11.0- - Unidades disponibles: " + libretaLuluMartins.stock + "\n4-Libreta Christine Hug - Precio: $12.0- - Unidades disponibles: " + libretaChristineHug.stock + "\n5-Volver al menú anterior.\n \nNota: Los precios no incluyen i.v.a."));
    if (menuOpcion == 1) {
        libretaChicasGamer.añadir();
        MENULIBRETAS();
    } else if (menuOpcion == 2) {
        libretaSixFanarts.añadir();
        MENULIBRETAS();
    } else if (menuOpcion == 3) {
        libretaLuluMartins.añadir();
        MENULIBRETAS();
    } else if (menuOpcion == 4) {
        libretaChristineHug.añadir();
        MENULIBRETAS();
    } else if (menuOpcion == 5) {
        VOLVERALMENU();
    } else {
        alert("Por favor ingrese un número del 1 al 5.");
        MENULIBRETAS();
    }
}

function MENUSTICKERS() {
    let menuOpcion = parseInt(prompt("---Anabella Avena - Ilustradora Freelance---\n---Menú de Stickers---\nPor favor elija una opción para agregar al carrito:\n1-Stickers de Sirenas - Precio: $3.50- - Unidades disponibles: " + stickerSirenas.stock + "\n2-Stickers de Chicas - Precio: $3.0- - Unidades disponibles: " + stickerChicas.stock + "\n3-Stickers de Halloween - Precio: $2.75- - Unidades disponibles: " + stickerHalloween.stock + "\n4-Stickers de Animales - Precio: $3.5- - Unidades disponibles: " + stickerAnimales.stock + "\n5-Volver al menú anterior.\n \nNota: Los precios no incluyen i.v.a."));
    if (menuOpcion == 1) {
        stickerSirenas.añadir();
        MENUSTICKERS();
    } else if (menuOpcion == 2) {
        stickerChicas.añadir();
        MENUSTICKERS();
    } else if (menuOpcion == 3) {
        stickerHalloween();
        MENUSTICKERS();
    } else if (menuOpcion == 4) {
        stickerAnimales.añadir();
        MENUSTICKERS();
    } else if (menuOpcion == 5) {
        VOLVERALMENU();
    } else {
        alert("Por favor ingrese un número del 1 al 5.");
        MENUSTICKERS();
    }
}

function MENUPOSTERS() {
    let menuOpcion = parseInt(prompt("---Anabella Avena - Ilustradora Freelance---\n---Menú de Posters---\nPor favor elija una opción para agregar al carrito:\n1-Poster de Una Noche de Verano - Precio: $5.75- - Unidades disponibles: " + posterNocheVerano.stock + "\n2-Poster de Amantes Mariposa - Precio: $6.0- - Unidades disponibles: " + posterAmantesMariposa.stock + "\n3-Poster de San Valentin Espacial - Precio: $5.0- - Unidades disponibles: " + posterDeSanValentin.stock + "\n4-Poster de Gatos - Precio: $5.50- - Unidades disponibles: " + posterDeGatos.stock + "\n5-Volver al menú anterior.\n \nNota: Los precios no incluyen i.v.a."));
    if (menuOpcion == 1) {
        posterNocheVerano.añadir();
        MENUPOSTERS();
    } else if (menuOpcion == 2) {
        posterAmantesMariposa.añadir();
        MENUPOSTERS();
    } else if (menuOpcion == 3) {
        posterDeSanValentin.añadir();
        MENUPOSTERS();
    } else if (menuOpcion == 4) {
        posterDeGatos.añadir();
        MENUPOSTERS();
    } else if (menuOpcion == 5) {
        VOLVERALMENU();
    } else {
        alert("Por favor ingrese un número del 1 al 5.");
        MENUPOSTERS();
    }
}

function MENUCARRITO() {
    let pago;
    pago = parseFloat(pago);
    let precioConIva = precioSinIva * iva;
    let menuOpcion = 0;
    menuOpcion = prompt("---Anabella Avena - Ilustradora Freelance---\n---Carrito de Compras---\nRepasemos lo que has cargado en el carrito antes de confirmar...\nLa cantidad de Items son: " + cantidadProductos + "\nUn resumen de los Items que pediste:\n" + listaDeCompras.join(".\n")+"." + "\nEl costo total (Incluyendo IVA) es de: $" + (precioConIva.toFixed(2) + "-.") + "\nElige una opción:\n1-Pagar monto\n2-Volver atrás\n3-Cancelar compra");
    menuOpcion = parseInt(menuOpcion);
    if (menuOpcion >= 1 && menuOpcion <= 3) {
        switch (menuOpcion) {
            case 1:
                pago = prompt("---Carrito de Compras---\nLa suma Total a pagar es de: $ " + precioConIva.toFixed(2) + "\nPor favor ingrese el monto especificado arriba para acreditar pago...");
                if (pago == precioConIva.toFixed(2)) {
                    alert("---Carrito de Compras---\nEl pago de: $" + precioConIva.toFixed(2) + " se ha acreditado correctamente.")
                    CIERREDECOMPRA();
                } else if (pago > precioConIva) {
                    let vuelto = pago - precioConIva.toFixed(2);
                    alert("---Carrito de Compras---\nAl parecer nos has enviado mas dinero del que era necesario, por ello te reenviamos $" + vuelto + " como vuelto por tu compra.")
                    CIERREDECOMPRA();
                } else if (pago < precioConIva && pago > 0) {
                    let pagoInsuficiente = precioConIva.toFixed(2) - pago;
                    alert("---Carrito de Compras---\nVaya!, al parecer has pagado $" + pago + ". Lamentablemente te faltan $" + pagoInsuficiente + " para completar los $" + precioConIva + " que se necesitan.\nTe devolvemos el dinero, Volvamos a completar la transacción.");
                    MENUCARRITO();
                } else if (pago <= 0) {
                    alert("---Carrito de Compras---\nAtención, no puedes pagar ingresando números negativos\nIntentemos nuevamente.");
                    MENUCARRITO();
                }
                break;
            case 2:
                VOLVERALMENU();
                break;
            case 3:
                EXITPROGRAM();
                break;
        }
    } else {
        alert("Por favor ingrese un número del 1 al 3.");
        MENUCARRITO();
    }
}

function VOLVERALMENU() {
    alert("Volviendo al menú principal...");
    MENUPRINCIPAL();
}

function CIERREDECOMPRA() {
    prompt("---Carrito de Compras---\nPor favor introduzca a continuación un correo electrónico para poder enviarte los productos.");
    alert("---Carrito de Compras---\nMuchas gracias por su compra, " + nombre + ", su envío se está procesando.");
    alert("Su boleta de compra:\nFactura tipo C consumidor final\nAnabella Avena n°0001-000001\nNombre: " + nombre + "\nApellido: " + apellido + "\nItems comprados:\n" + listaDeCompras.join(".\n") +"."+"\nTotal monto: $" + (precioSinIva * iva.toFixed(1) + "-.\nMuchas gracias por su compra, esperamos verlo/a pronto."));
    EXITPROGRAM();
}

function EXITPROGRAM() {
    return alert("Está saliendo de la tienda, esperamos volver a verlo pronto.");
}

console.log("La cantidad de productos añadidos es de: ", cantidadProductos);
console.log("Los productos solicitados son: ", listaDeCompras.join(", ") + ".");
console.log("El precio sin iva es de: $", precioSinIva + "-.");
console.log("El precio total es de: $", (precioSinIva * iva.toFixed(2) + "-."));