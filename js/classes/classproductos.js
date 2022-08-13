//Constructor de Productos.
class Producto {
    constructor(id, tipo, nombre, precio, stockDisponible, imagen) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = stockDisponible;
        this.stockDisponible = parseInt(stockDisponible);
        this.imagen = imagen;
    }
}

// Creando Productos
//Libretas
const libretaChicasGamer = new Producto(0, "Libreta", "Chicas Gamer", 12.5, 10, "<img src='imagenes/chicasgamer.webp' alt='chicas gamer'>");
const libretaSixFanarts = new Producto(1, "Libreta", "Six Fanarts", 10.5, 15, "<img src='imagenes/sixfanarts.webp' alt='sixfanarts'>");
const libretaLuluMartins = new Producto(2, "Libreta", "Lulu Martins", 11.0, 6, "<img src='imagenes/lulumartins.webp' alt='lulumartins'>");
const libretaChristineHug = new Producto(3, "Libreta", "Christine Hug", 12.0, 8, "<img src='imagenes/christinehug.webp' alt='christinehug'>");

//Stickers
const stickerSirenas = new Producto(4, "Sticker", "Sirenas", 3.50, 6, "<img src='imagenes/sirenas.webp' alt='sirenas'>");
const stickerChicas = new Producto(5, "Sticker", "Chicas", 3.0, 7, "<img src='imagenes/chicas.webp' alt='chicas'>");
const stickerHalloween = new Producto(6, "Sticker", "Halloween", 2.75, 10, "<img src='imagenes/halloween.webp' alt='halloween'>");
const stickerAnimales = new Producto(7, "Sticker", "Animales", 3.5, 10, "<img src='imagenes/animales.webp' alt='animales'>");

//Posters
const posterNocheVerano = new Producto(8, "Poster", "Una Noche de Verano", 5.75, 6, "<img src='imagenes/nocheverano.webp' alt='noche de verano'>");
const posterAmantesMariposa = new Producto(9, "Poster", "Amantes Mariposa", 6.0, 8, "<img src='imagenes/amantesmariposa.webp' alt='amantes mariposa'>");
const posterDeSanValentin = new Producto(10, "Poster", "San Valentín espacial", 5.0, 10, "<img src='imagenes/sanvalentin.webp' alt='san valentin espacial'>");
const posterDeGatos = new Producto(11, "Poster", "Gatos", 5.50, 7, "<img src='imagenes/gatos.webp' alt='gatos'></img>");

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