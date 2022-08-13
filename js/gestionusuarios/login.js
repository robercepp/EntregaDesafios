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
            Toastify({
                text: "Por favor llene los campos antes de continuar.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
        } else {
            const chequearUsuario = obj => obj.nombreDeUsuario === e.target[0].value;
            if (usuarios.some(chequearUsuario) === false) {
                Toastify({
                    text: "el nombre de usuario no se encuentra o la contraseña es incorrecta.",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "hsl(45, 100%, 70%)",
                    }
                }).showToast();
            } else {
                const encontrado = usuarios.find((user) => {
                    return user.nombreDeUsuario === e.target[0].value;
                });
                if (encontrado.contrasena === e.target[1].value) {
                    usuarioLogueado.push(encontrado)
                    sincronizarUsuario()
                    bienvenido.innerHTML = `<p class="bienvenida">Bienvenido/a, ${nombre(usuarioLogueado[0])}</p><a class="bienvenida subrayado" id="cerrar" href="">cerrar sesión</a>`;
                    if (localStorage["carritoDeComprasId" + id(usuarioLogueado[0])]) {
                        carritoDeCompras = JSON.parse(localStorage["carritoDeComprasId" + id(usuarioLogueado[0])]);
                    }
                    Swal.fire({
                        title: "Bienvenido/a",
                        text: "Usuario/a " + nombre(usuarioLogueado[0]) + " Activo/a",
                        icon: "success",
                        timer: 3000,
                        showConfirmButton: false,
                        background: "#fff",
                        backdrop: "rgba(0,0,123,0.4)",
                        color: "hsl(221, 56%, 31%)",
                        confirmButtonColor: "hsl(45, 100%, 82%)",
                    });
                    MENUPRINCIPAL();
                } else {
                    Toastify({
                        text: "el nombre de usuario no se encuentra o la contraseña es incorrecta.",
                        duration: 3000,
                        gravity: "bottom",
                        position: "right",
                        style: {
                            background: "hsl(45, 100%, 70%)",
                        }
                    }).showToast();
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