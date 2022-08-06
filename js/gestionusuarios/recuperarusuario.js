function RECUPERARUSUARIO() {
    titulo.innerHTML = "---Asistente de recuperación de Contraseña---";
    contenido.innerHTML = `
    <p class="elements"> Bienvenido al asistente de recuperación de contraseña </p>
    <p class="elements">le haremos algunas preguntas para verificar su identidad</p>
    <p class="pista">paso 1</p>
    <form id="formulario" class="menu-intro">
    <p class="pista">cuál es tu nombre de usuario?</p>
    <div class="elements">
    <input id="nombre-usuario" class="inputs" placeholder="nombre de usuario" type="text">
    </div>
    <div class="button-container">
    <button type="reset" value="reset" class="button">Limpiar</button>
    <button id="continuar" type="submit" class="button">Siguiente</button>
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
    const paso1 = document.getElementById("formulario");
    paso1.addEventListener("submit", (e) => {
        e.preventDefault();
        const chequearUsuario = obj => obj.nombreDeUsuario === e.target[0].value;
        if (usuarios.some(chequearUsuario) === false) {
            alerta.innerHTML = "No se encuentra al usuario"
        } else {
            const encontrado = usuarios.find((user) => {
                return user.nombreDeUsuario === e.target[0].value;
            });
            contenido.innerHTML = `
                <p class="elements">Su cuenta '${encontrado.nombreDeUsuario}' ha sido detectada</p>
                <form id="formulario2" class="menu-intro">
                <p class="pista">paso 2</p>
                <div class="elements">
                <p class="pista">cuál es tu correo electrónico</p>
                <input id="e-mail" class="inputs" placeholder="usuario@servidor.com" type="email">
                </div>
                <div class="elements">
                <p class="pista">cuantos años tenés?</p>
                <input id="edad" class="inputs" placeholder="tu edad" type="number">
                </div>
                <div class="button-container">
                <button type="reset" value="reset" class="button">Limpiar</button>
                <button id="continuar" type="submit" class="button">Siguiente</button>
                </div>
                </form>
                <button id="salida">volver</button>
                `
                const volver = document.getElementById("salida");
                    volver.addEventListener("mouseup", (e) => {
                        e.preventDefault();
                        alerta.innerHTML = "";
                        RECUPERARUSUARIO();
                    });
            const paso2 = document.getElementById("formulario2");
            paso2.addEventListener("submit", (e) => {
                e.preventDefault();
                if (encontrado.email !== e.target[0].value) {
                    alerta.innerHTML = "el email no coincide con el registrado en nuestra base de datos";
                } else if (encontrado.edad !== parseInt(e.target[1].value)) {
                    alerta.innerHTML = "alerta: la edad ingresada no es la correcta";
                } else {
                    contenido.innerHTML = `
                    <p class="elements">Una última pregunta. agradecemos su paciencia.</p>
                    <form id="formulario3" class="menu-intro">
                    <p class="pista">paso 3</p>
                    <div class="elements">
                    <p class="pista">${encontrado.pregunta}</p>
                    <input id="pregunta" class="inputs" placeholder="su respuesta aquí" type="text">
                    </div>
                    <div class="button-container">
                    <button type="reset" value="reset" class="button">Limpiar</button>
                    <button id="continuar" type="submit" class="button">Siguiente</button>
                    </div>
                    </form>
                    <button id="salida">volver</button>
                    `
                    const volver = document.getElementById("salida");
                    volver.addEventListener("mouseup", (e) => {
                        e.preventDefault();
                        alerta.innerHTML = "";
                        RECUPERARUSUARIO();
                    });
                    const paso3 = document.getElementById("formulario3");
                    paso3.addEventListener("submit", (e) => {
                        e.preventDefault();
                        if (encontrado.respuesta !== e.target[0].value) {
                            alerta.innerHTML = "alerta: su respuesta no es correcta";
                        } else {
                            contenido.innerHTML = `
                                        <p class="elements">Su contraseña es: "${encontrado.contrasena}"</p>
                                        <p class="elements">gracias por su paciencia.</p>
                                        <button id="salida">volver</button>
                                        `
                            const volver = document.getElementById("salida");
                            volver.addEventListener("mouseup", (e) => {
                                e.preventDefault();
                                alerta.innerHTML = "";
                                RECUPERARUSUARIO();
                            });
                        }
                    })
                }
            })
        }
    })
}