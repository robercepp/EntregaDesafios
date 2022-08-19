/* Este proyecto es un módulo eCommerce para una pagina ya existente de una Ilustradora Gráfica. la idea es crear un catalogo de productos a vender, implementar un carrito de compras donde cargarlos, y añadir un modulo de pagos y encargos */

//Anabella Avena - Ilustradora Gráfica - módulo eCommerce.

//variables y constantes generales
let catalogoDeBusqueda = [];
let carritoDeCompras = [];
let usuarios = [];
let usuarioLogueado = [];
let idcounter = 0;
let idtotal = idcounter;
const iva = 1.21;

const llenarCatalogo = async () => {
  const response = await fetch("./JSON/inventario.json");
  const data = await response.json()
  localStorage.catalogo ? catalogoDeBusqueda = JSON.parse(localStorage.catalogo) : catalogoDeBusqueda = data
  }

llenarCatalogo();

//inserción de contenido en sitio web
let titulo = document.createElement("h4");
document.getElementsByClassName("titulo-relativo")[0].appendChild(titulo);
let bienvenido = document.createElement("p");
document.getElementsByClassName("bienvenido")[0].appendChild(bienvenido);
const tr = document.createElement("tr");
const contenido = document.querySelector(".contenido")
const cabecera = document.createElement("div");
cabecera.className = "cabecera";
cabecera.id = "cabecera"
const salida = document.createElement("div");

//condicioes antes de iniciar el sitio
//algunos operadores ternarios
localStorage.usuarioLogueado ? logged() : unlogged()
localStorage.usuarios ? usuarios = JSON.parse(localStorage.usuarios) : null
localStorage.idCounter ? idcounter = parseInt(localStorage.idCounter) : null

//A partir de aquí comienza el menú...
MENUPRINCIPAL();

/*nota: el resto del codigo se ha compartimentalizado en diferentes módulos para hacer mas sencillo encontrar los segmentos de codigo deseados y modificarlos sin interferir con el correcto funcionamiento de los demas.

a continuación agrego un índice de archivos. 

-main.js: verificaciones generales de estado de sitio según estado de memoria local (ej si hay un usuario logueado = cargar su carrito, etc.).
-funcionesgrales.js: un conjunto de funciones auxiliares para el correcto funcionamiento del sitio y manejo de memoria local.
-cierredecompra.js: confirma la compra de lo cargado en el carrito, emite una factura tras el pago exitoso.
-exitprogram.js: chequea la existencia de items cargados en el carrito antes de salir, desloguea al usuario activo, cierra el programa.
-json/inventario.json: un inventario de los productos para vender (se simula un servidor al cual se le hace fetch para alimentar las bases de datos correspondientes). 
-classes/classproductos.js: establece las variables de las cuales se crean los usuarios por ej: un id único de usuario, nombre, e-mail, contraseña, etc. 
-gestionusuarios/crearusuario.js: motor de creación de usuarios. toma las pautas de la clase y guarda un nuevo usuario en un array. 
-gestionusuarios/login.js: es el menú de login, a partir de este motor, se puede ingresar a una cuenta previamente creada, crear una nueva o recuperar la contraseña.
-gestionusuarios/recuperarusuario.js: el motor de recuperación de contraseña de cuentas.
-menus/menuprincipal.js: se encarga de presentar las opciones generales de sitio así también como un derivador a cada uno de ellos.
-menus/menubusqueda.js: se encarga de buscar, encontrar y presentar productos así también como cargarlos al carrito de compra.
-menus/menusdinamicos.js: es una función dinámica que lista productos según la variable que sea cargada (tipo de producto).
-menus/menucarrito.js: se encarga de gestionar el carrito previo a la confirmación de compra este carrito. este carrito es dinamico en base al usuario logueado, lista los items cargados previamente, asigna un valor subtotal según la cantidad de items iguales que se hayan cargado y también el valor total de compra, además, permite quitar elementos que no se deseen comprar en el momento.
-visual/darkmode.js: ajusta el aspecto visual del sitio a "modo obscuro" (experimental).
*/