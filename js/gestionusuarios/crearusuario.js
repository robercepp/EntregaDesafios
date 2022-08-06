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
        alerta.innerHTML = "";
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
            alerta.innerHTML = "debes escribir un nombre de usuario";
            document.querySelector("#nombre-usuario").classList.toggle("red-border");
        } else if (usuarios.some(chequearUsuario) === true || usuarios == []) {
            alerta.innerHTML = "Lo sentimos, el nombre de usuario ya está ocupado, por favor elija otro.";
            document.querySelector("#nombre-usuario").classList.toggle("red-border")
        } else if (e.target[1].value === "") {
            alerta.innerHTML = "debes escribir tu nombre";
            document.querySelector("#nombre").classList.toggle("red-border");
        } else if (e.target[2].value === "") {
            alerta.innerHTML = "debes escribir un apellido";
            document.querySelector("#apellido").classList.toggle("red-border");
        } else if (e.target[3].value === "") {
            alerta.innerHTML = "debes escribir tu fecha de nacimiento";
            document.querySelector("#fecha-nac").classList.toggle("red-border");
        } else if (e.target[4].value === "" || e.target[5].value === "") {
            alerta.innerHTML = "cuidado, debes escribir una email válido.";
            document.querySelector("#email-1").classList.toggle("red-border");
            document.querySelector("#email-2").classList.toggle("red-border");
        } else if (e.target[4].value !== e.target[5].value) {
            alerta.innerHTML = "los e-mails escritos no coinciden. por favor intente nuevamente.";
            document.querySelector("#email-1").classList.toggle("red-border");
            document.querySelector("#email-2").classList.toggle("red-border");
        } else if (e.target[6].value === "" || e.target[7].value === "") {
            alerta.innerHTML = "cuidado, debes escribir una contraseña ";
            document.querySelector("#contraseña-1").classList.toggle("red-border");
            document.querySelector("#contraseña-2").classList.toggle("red-border");
        } else if (e.target[6].value !== e.target[7].value) {
            alerta.innerHTML = "las contraseñas no coinciden, intentelo nuevamente.";
            document.querySelector("#contraseña-1").classList.toggle("red-border");
            document.querySelector("#contraseña-2").classList.toggle("red-border");
        } else if (e.target[8].value === "" || e.target[9].value === "") {
            alerta.innerHTML = "cuidado, debes escribir una pregunta y una respuesta de seguridad.";
            document.querySelector("#pregunta").classList.toggle("red-border");
            document.querySelector("#respuesta").classList.toggle("red-border");
        } else {
            idcounter = idcounter + 1
            sincronizarIdCounter();
            const newUser = new Usuario(idcounter, e.target[0].value, e.target[1].value, e.target[2].value, calcularEdad(años), e.target[4].value, e.target[6].value, e.target[8].value, e.target[9].value);
            usuarios.push(newUser)
            sincronizarUsuarios();
            document.querySelectorAll('#formulario input').forEach((input) => {
                input.value = '';
            });
            alerta.innerHTML = "Usuario creado satisfactoriamente";
        }
    });
}