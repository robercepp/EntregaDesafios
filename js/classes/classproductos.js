//Constructor de Productos.
class Producto {
    constructor(id, tipo, nombre, precio, stockDisponible) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stockDisponible;
        this.stockDisponible = parseInt(stockDisponible);
    }
}

// Creando Productos
//Libretas
const libretaChicasGamer = new Producto(0, "Libreta", "Libreta de Chicas Gamer", 12.5, 10);
const libretaSixFanarts = new Producto(1, "Libreta", "Libreta de Six Fanarts", 10.5, 15);
const libretaLuluMartins = new Producto(2, "Libreta", "Libreta de Lulu Martins", 11.0, 6);
const libretaChristineHug = new Producto(3, "Libreta", "Libreta de Christine Hug", 12.0, 8);

//Stickers
const stickerSirenas = new Producto(4, "Sticker", "Stickers de Sirenas", 3.50, 6);
const stickerChicas = new Producto(5, "Sticker", "Stickers de Chicas", 3.0, 7);
const stickerHalloween = new Producto(6, "Sticker", "Stickers de Halloween", 2.75, 10);
const stickerAnimales = new Producto(7, "Sticker", "Stickers de Animales", 3.5, 10);

//Posters
const posterNocheVerano = new Producto(8, "Poster", "Poster de una Noche de Verano", 5.75, 6);
const posterAmantesMariposa = new Producto(9, "Poster", "Poster de Amantes Mariposa", 6.0, 8);
const posterDeSanValentin = new Producto(10, "Poster", "Poster de San Valentín espacial", 5.0, 10);
const posterDeGatos = new Producto(11, "Poster", "Poster de Gatos", 5.50, 7);

//variables y constantes generales
let catalogoDeBusqueda = [];
let carritoDeCompras = [];
let usuarios = [];
let usuarioLogueado = [];
let idcounter = 0;
let idtotal = idcounter;
const iva = 1.21;

//Se crea el catálogo de búsqueda
catalogoDeBusqueda.push(libretaChicasGamer, libretaSixFanarts, libretaLuluMartins, libretaChristineHug, stickerSirenas, stickerChicas, stickerHalloween, stickerAnimales, posterNocheVerano, posterAmantesMariposa, posterDeSanValentin, posterDeGatos);