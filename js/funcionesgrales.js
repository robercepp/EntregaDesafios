//Funciones generales

function logged() {
    usuarioLogueado = JSON.parse(localStorage.usuarioLogueado);
    bienvenido.innerHTML = `<p class="bienvenida">Bienvenido/a, ${usuarioLogueado[0].nombre}</p><a class="bienvenida subrayado" id="cerrar" href="">cerrar sesión</a>`;
    if (localStorage["carritoDeComprasId" + usuarioLogueado[0].id]) {
        carritoDeCompras = JSON.parse(localStorage["carritoDeComprasId" + usuarioLogueado[0].id]);
    }
    const cerrarSesion = document.getElementById("cerrar");
    cerrarSesion.addEventListener("click", (e) => {
        e.preventDefault();
        bienvenido.innerHTML = `<p class="bienvenida">Bienvenido/a, usuario sin registrar</p> <a class="bienvenida subrayado" id="login" href="">iniciar sesión</a> <a class="bienvenida subrayado" id="crearcuenta" href="">crear una cuenta</a>
        `;
        localStorage.removeItem("usuarioLogueado")
        alerta.innerHTML = usuarioLogueado[0].nombre + " ha salido de su cuenta."
        usuarioLogueado = [];
        carritoDeCompras = [];
        MENUPRINCIPAL();
    });
}

function unlogged() {
    bienvenido.innerHTML = `<p class="bienvenida">Bienvenido/a, usuario sin registrar</p> <a class="bienvenida subrayado" id="login" href="">iniciar sesión</a> <a class="bienvenida subrayado" id="crearcuenta" href="">crear una cuenta</a>
 `;
    const crearCuenta = document.getElementById("crearcuenta");
    crearCuenta.addEventListener("click", (e) => {
        e.preventDefault();
        CREARUSUARIO();
    });

    const login = document.getElementById("login");
    login.addEventListener("click", (e) => {
        e.preventDefault();
        LOGIN();
    });
}

function sincronizarCatalogo() {
    localStorage.catalogo = JSON.stringify(catalogoDeBusqueda);
    catalogoDeBusqueda = JSON.parse(localStorage.catalogo);
}

function sincronizarUsuario() {
    localStorage.usuarioLogueado = JSON.stringify(usuarioLogueado);
    usuarioLogueado = JSON.parse(localStorage.usuarioLogueado);
}

function sincronizarUsuarios() {
    localStorage.usuarios = JSON.stringify(usuarios);
    usuarios = JSON.parse(localStorage.usuarios)
}

function sincronizarIdCounter() {
    localStorage.idCounter = idcounter
    idcounter = parseInt(localStorage.idCounter)
}

function sincronizarCarrito() {
    localStorage["carritoDeComprasId" + usuarioLogueado[0].id] = JSON.stringify(carritoDeCompras);
    carritoDeCompras = JSON.parse(localStorage["carritoDeComprasId" + usuarioLogueado[0].id]);
}