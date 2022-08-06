function LOGIN() {

    contenido.innerHTML = `
    <form id="formulario" class="menu-intro">
    <div class="elements">
    <input class="inputs" placeholder="nombre de usuario" type="text">
    </div>
    <div class="elements">
    <input class="inputs" placeholder="contraseña" type="password">
    </div>
    <div class="button-container">
    <button type="submit" class="button">Ingresar</button>
    </div>
    </form>
    <div class="elements-especial">
    <a id="crearCuenta" class= "pista" href="">crear una cuenta</a>
    <a id="recuperarCuenta" class= "pista" href="">olvidé mi contraseña</a>
    </div>
    `
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target[0].value === "" || e.target[1].value === "") {
            alerta.innerHTML = "Por favor llene los campos antes de continuar"
        } else {
            const chequearUsuario = obj => obj.nombreDeUsuario === e.target[0].value;
            if (usuarios.some(chequearUsuario) === false) {
                alerta.innerHTML = "el nombre de usuario no se encuentra o la contraseña es incorrecta."
            } else {
                const encontrado = usuarios.find((user) => {
                    return user.nombreDeUsuario === e.target[0].value;
                });
                if (encontrado.contrasena === e.target[1].value) {
                    usuarioLogueado.push(encontrado)
                    sincronizarUsuario()
                    bienvenido.innerHTML = `<p class="bienvenida">Bienvenido/a, ${usuarioLogueado[0].nombre}</p><a class="bienvenida subrayado" id="cerrar" href="">cerrar sesión</a>`;
                    if (localStorage["carritoDeComprasId" + usuarioLogueado[0].id]) {
                        carritoDeCompras = JSON.parse(localStorage["carritoDeComprasId" + usuarioLogueado[0].id]);
                    }
                    alerta.replaceChildren();
                    MENUPRINCIPAL();
                } else {
                    alerta.innerHTML = "el nombre de usuario no se encuentra o la contraseña es incorrecta."
                }
            }
        }
    });
    const crearCuenta = document.getElementById("crearCuenta");
    crearCuenta.addEventListener("click", (e) => {
        e.preventDefault();
        CREARUSUARIO();
    });
    const recuperarContrasena = document.getElementById("recuperarCuenta");
    recuperarContrasena.addEventListener("click", (e) => {
        e.preventDefault();
        RECUPERARUSUARIO();
    })
}