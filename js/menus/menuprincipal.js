function MENUPRINCIPAL() {
    titulo.innerHTML = "---Menu Principal---";
    contenido.innerHTML = `
    <p>Bienvenido/a al simulador de tienda, aquí podrás ver mi catálogo de items en venta.</p>
    <p>Por favor elige una opción:</p>
    <button id="opcion-1" class="opciones-menu">Buscar un Producto</button>
    <p>Cátalogo de productos</p>
    <button id="opcion-2" class="opciones-menu">Libretas</button>
    <button id="opcion-3" class="opciones-menu">Sticker</button>
    <button id="opcion-4" class="opciones-menu">Posters</button>
    <p>Mas Opciones</p>
    <button id="opcion-5" class="opciones-menu">Carrito de Compras</button>
    <button id="opcion-6" class="opciones-menu">Salir</button>
    `
    const opcion1 = document.getElementById("opcion-1");
    opcion1.addEventListener("mouseup", (e) => {
        MENUBUSQUEDA();
    });
    const opcion2 = document.getElementById("opcion-2");
    opcion2.addEventListener("mouseup", () => {
        MENU("Libreta", "Libretas");
    });
    const opcion3 = document.getElementById("opcion-3");
    opcion3.addEventListener("mouseup", () => {
        MENU("Sticker", "Stickers");
    });
    const opcion4 = document.getElementById("opcion-4");
    opcion4.addEventListener("mouseup", () => {
        MENU("Poster", "Posters");
    });
    const opcion5 = document.getElementById("opcion-5");
    opcion5.addEventListener("mouseup", () => {
        MENUCARRITO();
    });
    const opcion6 = document.getElementById("opcion-6");
    opcion6.addEventListener("mouseup", () => {
        EXITPROGRAM();
    });
}