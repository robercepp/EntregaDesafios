function CREARUSUARIO() {
    titulo.innerHTML = "---Creador de Cuenta---";
    contenido.innerHTML = `
<p class="elements"> En esta sección podrás crear tu cuenta! </p>
<p class="pista">por favor llena todos los campos a continuación</p>
<form id="formulario" class="menu-intro">
<div class="elements">
<input id="nombre-usuario" class="inputs" placeholder="Elige un nombre de usuario" type="text">
</div>
<div class="elements">
<input id="nombre" class="inputs" placeholder="tu nombre" type="text">
</div>
<div class="elements">
<input id="apellido" class="inputs" placeholder="tu apellido" type="text">
</div>
<div class="elements">
<p class="pista"> tu fecha de cumpleaños </p>
<input id="fecha-nac" class="inputs" placeholder="dd/mm/aaaa" type="date">
</div>
<div class="elements">
<input id="email-1" class="inputs" placeholder="tu e-mail" type="email">
<input id="email-2" class="inputs" placeholder="repite tu email" type="email">
</div>
<div class="elements">
<input id="contraseña-1" class="inputs" placeholder="contraseña" type="password">
<input id="contraseña-2" class="inputs" placeholder="repita contraseña" type="password">
</div>
<div class="elements center">
<p class="pista"> Ingrese una pregunta y una respuesta que le servirá para recuperar su contraseña.</p>
<input id="pregunta" class="inputs separador" placeholder="ej: nombre de mascota?" type="text">
<input id="respuesta" class="inputs separador" placeholder="respuesta" type="text">
</div>
<div class="button-container">
<button type="reset" value="reset" class="button">Limpiar</button>
<button id="crear-usuario" type="submit" class="button">Crear Usuario</button>
</div>
</form>
<button id="salida">volver</button>
`
    const volver = document.getElementById("salida");
    volver.addEventListener("mouseup", (e) => {
        e.preventDefault();
        LOGIN();
    });
    const agregarUsuario = document.getElementById("formulario");
    agregarUsuario.addEventListener("submit", (e) => {
        e.preventDefault();
        const chequearUsuario = obj => obj.nombreDeUsuario === e.target[0].value;
        const años = parseInt(e.target[3].value);

        function calcularEdad(cumpleaños) {
            var edadDifMs = Date.now() - cumpleaños;
            var ageDate = new Date(edadDifMs);
            return Math.abs(ageDate.getUTCFullYear() - años);
        }

        if (e.target[0].value === "") {
            Toastify({
                text: "debes escribir un nombre de usuario",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#nombre-usuario").classList.toggle("red-border");
        } else if (usuarios.some(chequearUsuario) === true || usuarios == []) {
            Toastify({
                text: "Lo sentimos, el nombre de usuario ya está ocupado, por favor elija otro.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#nombre-usuario").classList.toggle("red-border")
        } else if (e.target[1].value === "") {
            Toastify({
                text: "Debes escribir tu nombre.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#nombre").classList.toggle("red-border");
        } else if (e.target[2].value === "") {
            Toastify({
                text: "Debes escribir tu apellido.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#apellido").classList.toggle("red-border");
        } else if (e.target[3].value === "") {
            Toastify({
                text: "Debes escribir tu fecha de nacimiento.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#fecha-nac").classList.toggle("red-border");
        } else if (e.target[4].value === "" || e.target[5].value === "") {
            Toastify({
                text: "Cuidado, Debes escribir un email válido.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#email-1").classList.toggle("red-border");
            document.querySelector("#email-2").classList.toggle("red-border");
        } else if (e.target[4].value !== e.target[5].value) {
            Toastify({
                text: "los e-mails escritos no coinciden. por favor intente nuevamente.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#email-1").classList.toggle("red-border");
            document.querySelector("#email-2").classList.toggle("red-border");
        } else if (e.target[6].value === "" || e.target[7].value === "") {
            Toastify({
                text: "cuidado, debes escribir una contraseña.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#contraseña-1").classList.toggle("red-border");
            document.querySelector("#contraseña-2").classList.toggle("red-border");
        } else if (e.target[6].value !== e.target[7].value) {
            Toastify({
                text: "las contraseñas no coinciden, intentelo nuevamente.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#contraseña-1").classList.toggle("red-border");
            document.querySelector("#contraseña-2").classList.toggle("red-border");
        } else if (e.target[8].value === "" || e.target[9].value === "") {
            Toastify({
                text: "cuidado, debes escribir una pregunta y una respuesta de seguridad.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
            document.querySelector("#pregunta").classList.toggle("red-border");
            document.querySelector("#respuesta").classList.toggle("red-border");
        } else {
            idcounter++;
            sincronizarIdCounter();
            const newUser = new Usuario(idcounter, e.target[0].value, e.target[1].value, e.target[2].value, calcularEdad(años), e.target[4].value, e.target[6].value, e.target[8].value, e.target[9].value);
            usuarios.push(newUser)
            sincronizarUsuarios();
            document.querySelectorAll('#formulario input').forEach((input) => {
                input.value = '';
            });
            Swal.fire({
                title: "Exito!",
                text: "Usuario creado satisfactoriamente",
                icon: "success",
                confirmButtonText: "entendido",
                background: "#fff",
                backdrop: "rgba(0,0,123,0.4)",
                color: "hsl(221, 56%, 31%)",
                confirmButtonColor: "hsl(45, 100%, 82%)",
            });
            MENUPRINCIPAL();
        }
    });
}