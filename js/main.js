// Simulador de ecommerce para el sitio de Anabella Avena - Ilustradora Freelance.

//Libretas en venta y sus precios
const LIBRETADECHICASGAMER = "Libreta de Chicas Gamer, ";
const LIBCHICAGAMERPRECIO = 12.5;

const LIBRETASIXFANARTS = "Libreta de Six Fanarts, ";
const LIBSIXFANARTSPRECIO = 10.5;

const LIBRETALULUMARTINS = "Libreta de Lulu Martins, ";
const LIBLULUMARTINSPRECIO = 11;

const LIBRETACHRISTINEHUG = "Libreta de Christine Hug, ";
const LIBCHRISTINEHUGPRECIO = 12;

//Stickers en venta y sus precios
const STICKERSDESIRENAS = "Stickers de Sirenas, ";
const STISIRENAPRECIO = 3.50;

const STICKERSDECHICAS = "Stickers de Chicas, ";
const STICHICASPRECIO = 3.0;

const STICKERSDEHALLOWEEN = "Stickers de Halloween, ";
const STIHALLOWEENPRECIO = 2.75;

const STICKERSDEANIMALES = "Stickers de Animales, ";
const STIANIMALESPRECIO = 3.5;

//Posters en venta y sus precios
const POSTERNOCHEVERANO = "Poster de Una Noche de Verano, ";
const POSTNOCHEVERANOPRECIO = 5.75;

const POSTERAMANTESMARIPOSA = "Poster de Amantes Mariposa, ";
const POSTAMANTESPRECIO = 6.0;

const POSTERSANVALENTIN = "Poster de San Valentín Espacial, ";
const POSTSANVALPRECIO = 5.0;

const POSTERDEGATOS = "Poster de Gatos, ";
const POSTGATOSPRECIO = 5.50;

//Variables Generales
let precio = 0;
let precioParseado;
let sumaPrecio = 0;
let listaCompra = "";
let cantidadItems = 0;
const IVA = 1.21;
let precioMasIva = 0;

function MenuTienda() {
    let menuOpcion = prompt("--- Simulador eCommerce --- \n--- Anabella Avena - Ilustradora Freelance ---\nBienvenido/a al simulador de tienda, aquí podrás ver mi catálogo de items en venta.\nPor favor elige una opción:\n1- Libretas\n2-Stickers\n3-Posters\n4-Ir al carrito de compras\n5-Salir ");
    let menuOpcionParseado = parseInt(menuOpcion);
    console.log(menuOpcionParseado);
    if (menuOpcionParseado >= 1 && menuOpcionParseado <= 6) {
        switch (menuOpcionParseado) {
            case 1:
                alert("Ha entrado en el menú libretas...");
                MenuLibretas();
                break;
            case 2:
                alert("Ha entrado en el menú Stikers");
                MenuStickers();
                break;
            case 3:
                alert("Ha entrado en el menú Posters");
                MenuPosters();
                break;
            case 4:
                alert("Accediendo al Carrito de Compras");
                MenuCarrito();
                break;
            case 5:
                ExitProgram();
                break;
        }
    } else {
        alert("Por favor elija una opción del 1 al 5 \n \n volvamos a intentarlo.");
        MenuTienda();
    }
}

MenuTienda();

function MenuLibretas() {

    let menuLibretas = prompt("---Anabella Avena - Ilustradora Freelance---\n---Menú de libretas---\nPor favor elija una opción para agregar al carrito:\n1-Libreta de Chicas Gamer - Precio: $12.50-\n2-Libreta Six Fanarts - Precio: $10.50-\n3-Libreta Lulu Martins - Precio: $11.0-\n4-Libreta Christine Hug - Precio: $12.0-\n5-Volver al menú anterior.\n \nNota: Los precios no incluyen i.v.a.");
    let menuLibretasParseado = parseInt(menuLibretas);
    if (menuLibretasParseado == 1) {
        alert("El item ha sido añadido al carrito de compras...");
        sumaPrecio = sumaPrecio + LIBCHICAGAMERPRECIO;
        cantidadItems = cantidadItems + 1;
        listaCompra = listaCompra + LIBRETADECHICASGAMER;
        MenuLibretas();
    } else {
        if (menuLibretasParseado == 2) {
            alert("El item ha sido añadido al carrito de compras...");
            sumaPrecio = sumaPrecio + LIBSIXFANARTSPRECIO;
            cantidadItems = cantidadItems + 1;
            listaCompra = listaCompra + LIBRETASIXFANARTS;
            MenuLibretas();
        } else {
            if (menuLibretasParseado == 3) {
                alert("El item ha sido añadido al carrito de compras...");
                sumaPrecio = sumaPrecio + LIBLULUMARTINSPRECIO;
                cantidadItems = cantidadItems + 1;
                listaCompra = listaCompra + LIBRETALULUMARTINS;
                MenuLibretas();
            } else {
                if (menuLibretasParseado == 4) {
                    alert("El item ha sido añadido al carrito de compras...");
                    sumaPrecio = sumaPrecio + LIBCHRISTINEHUGPRECIO;
                    cantidadItems = cantidadItems + 1;
                    listaCompra = listaCompra + LIBRETACHRISTINEHUG;
                    MenuLibretas();
                } else {
                    if (menuLibretasParseado == 5) {
                        VolverAlMenu();
                    } else {
                        alert("Por favor ingrese un número del 1 al 5");
                        MenuLibretas();
                    }
                }
            }
        }
    }
}

function MenuStickers() {
    let menuStickers = prompt("---Anabella Avena - Ilustradora Freelance---\n---Menú de Stickers---\nPor favor elija una opción para agregar al carrito:\n1-Stickers de Sirenas - Precio: $3.50-\n2-Stickers de Chicas - Precio: $3.0-\n3-Stickers de Halloween - Precio: $2.75-\n4-Stickers de Animales - Precio: $3.5-\n5-Volver al menú anterior.\n \nNota: Los precios no incluyen i.v.a.")
    let menuStickersParseado = parseInt(menuStickers);
    if (menuStickersParseado == 1) {
        alert("El item ha sido añadido al carrito de compras...");
        sumaPrecio = sumaPrecio + STISIRENAPRECIO;
        cantidadItems = cantidadItems + 1;
        listaCompra = listaCompra + STICKERSDESIRENAS;
        MenuStickers();
    } else {
        if (menuStickersParseado == 2) {
            alert("El item ha sido añadido al carrito de compras...");
            sumaPrecio = sumaPrecio + STICHICASPRECIO;
            cantidadItems = cantidadItems + 1;
            listaCompra = listaCompra + STICKERSDECHICAS;
            MenuStickers();
        } else {
            if (menuStickersParseado == 3) {
                alert("El item ha sido añadido al carrito de compras...");
                sumaPrecio = sumaPrecio + STIHALLOWEENPRECIO;
                cantidadItems = cantidadItems + 1;
                listaCompra = listaCompra + STICKERSDEHALLOWEEN;
                MenuStickers();
            } else {
                if (menuStickersParseado == 4) {
                    alert("El item ha sido añadido al carrito de compras...");
                    sumaPrecio = sumaPrecio + STIANIMALESPRECIO;
                    cantidadItems = cantidadItems + 1;
                    listaCompra = listaCompra + STICKERSDEANIMALES;
                    MenuStickers();
                } else {
                    if (menuStickersParseado == 5) {
                        VolverAlMenu();
                    } else {
                        alert("Por favor ingrese un número del 1 al 5");
                        MenuStickers();
                    }
                }
            }
        }
    }
}

function MenuPosters() {
    let menuPosters = prompt("---Anabella Avena - Ilustradora Freelance---\n---Menú de Posters---\nPor favor elija una opción para agregar al carrito:\n1-Poster de Una Noche de Verano - Precio: $5.75-\n2-Poster de Amantes Mariposa - Precio: $6.0-\n3-Poster de San Valentin Espacial - Precio: $5.0-\n4-Poster de Gatos - Precio: $5.50-\n5-Volver al menú anterior.\n \nNota: Los precios no incluyen i.v.a.")
    let menuPostersParseado = parseInt(menuPosters);
    if (menuPostersParseado == 1) {
        alert("El item ha sido añadido al carrito de compras...");
        sumaPrecio = sumaPrecio + POSTNOCHEVERANOPRECIO;
        cantidadItems = cantidadItems + 1;
        listaCompra = listaCompra + POSTERNOCHEVERANO;
        MenuPosters();
    } else {
        if (menuPostersParseado == 2) {
            alert("El item ha sido añadido al carrito de compras...");
            sumaPrecio = sumaPrecio + POSTAMANTESPRECIO;
            cantidadItems = cantidadItems + 1;
            listaCompra = listaCompra + POSTERAMANTESMARIPOSA;
            MenuPosters();
        } else {
            if (menuPostersParseado == 3) {
                alert("El item ha sido añadido al carrito de compras...");
                sumaPrecio = sumaPrecio + POSTSANVALPRECIO;
                cantidadItems = cantidadItems + 1;
                listaCompra = listaCompra + POSTERSANVALENTIN;
                MenuPosters();
            } else {
                if (menuPostersParseado == 4) {
                    alert("El item ha sido añadido al carrito de compras...");
                    sumaPrecio = sumaPrecio + POSTGATOSPRECIO;
                    cantidadItems = cantidadItems + 1;
                    listaCompra = listaCompra + POSTERDEGATOS;
                    MenuPosters();
                } else {
                    if (menuPostersParseado == 5) {
                        VolverAlMenu();
                    } else {
                        alert("Por favor ingrese un número del 1 al 5");
                        MenuPosters();
                    }
                }
            }
        }
    }
}

function MenuCarrito() {
    do {
        let precioMasIva = sumaPrecio * IVA;
        let menuCarrito = prompt("---Anabella Avena - Ilustradora Freelance---\n---Carrito de Compras---\nRepasemos lo que has cargado en el carrito antes de confirmar...\nLa cantidad de Items son: " + cantidadItems + "\nUn resumen de los Items que pediste: " + listaCompra + "\nEl costo total (Incluyendo IVA) es de: $" + precioMasIva + "\nElige una opción:\n1-Pagar monto\n2-Volver atrás\n3-Cancelar compra");
        let menuCarritoParseado = parseInt(menuCarrito);
        if (menuCarritoParseado >= 1 && menuCarritoParseado <= 3) {
            switch (menuCarritoParseado) {
                case 1:
                    let pago = prompt("---Carrito de Compras---\nLa suma Total a pagar es de: $ " + precioMasIva + "\nPor favor ingrese el monto especificado arriba para acreditar pago...");
                    if (pago == precioMasIva) {
                        alert("---Carrito de Compras---\nEl pago de: $ " + precioMasIva + " se ha acreditado correctamente")
                        CierreDeCompra();
                    } else {
                        if (pago > precioMasIva) {
                            let vuelto = pago - precioMasIva;
                            alert("---Carrito de Compras---\nAl parecer nos has enviado mas dinero del que era necesario, por ello te reenviamos $" + vuelto + " como vuelto por tu compra.")
                            CierreDeCompra();
                        } else {
                            if (pago < precioMasIva && pago > 0) {
                                let pagoInsuficiente = precioMasIva - pago;
                                alert("---Carrito de Compras---\nVaya!, al parecer has pagado $" + pago + ". Lamentablemente te faltan $" + pagoInsuficiente + " para completar los $" + precioMasIva + " que se necesitan.\nTe devolvemos el dinero, Volvamos a completar la transacción.");
                                MenuCarrito();
                            } else {
                                if (pago <= 0) {
                                    alert("---Carrito de Compras---\nAtención, no puedes pagar ingresando números negativos\nIntentemos nuevamente.");
                                    MenuCarrito();
                                }
                            }
                        }
                    }
                    break;
                case 2:
                    MenuTienda();
                    break;
                case 3:
                    ExitProgram();
                    break;
            }
        }else{
            alert("Por favor ingrese un número del 1 al 3");
            MenuCarrito();
        }
    } while (pago == precioMasIva || menuCarritoParseado == 2 || menuCarritoParseado == 3) {
        ExitProgram();
    }
}

function VolverAlMenu() {
    alert("Volviendo al menú principal...");
    MenuTienda();
}

function CierreDeCompra() {
    prompt("---Carrito de Compras---\nPor favor introduzca a continuación un correo electrónico para poder enviarte los productos.")
    alert("---Carrito de Compras---\nMuchas gracias por su compra, su envío se está procesando")
    ExitProgram();
}

function ExitProgram() {
    alert("Está saliendo de la tienda, esperamos volver a verlo pronto.");
}