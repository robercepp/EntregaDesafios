function MENUBUSQUEDA() {
    contenido.innerHTML = '';
    let busqueda;
    let numeracion = 0;
    let encontrado;
    let cantidades;
    titulo.innerHTML = "---Menu de Busqueda---";
    contenido.innerHTML = `
    <p>---Buscador de Productos---</p>
    <p>Escriba el tipo o el nombre del ítem que esté buscando.</p>
    </br>
    <form id="formulario">
    <div class=buscador-container>
    <input id="buscador" style='width:20em' type="text"></input>
    <button class="boton-buscar" type="submit">Buscar</button>
    </div>
    <p class= "pista">Pista: puede ser un tipo como 'Sticker' o 'Poster', o alguna palabra clave.</p>
    </form>
    <button id="salida">volver</button>
    `
    const volver = document.getElementById("salida");
    volver.addEventListener("mouseup", (e) => {
        e.preventDefault();
        MENUPRINCIPAL();
    });
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        busqueda = e.target[0].value;
        if (busqueda === "") {
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
            encontrado = catalogoDeBusqueda.filter(producto => producto.tipo.toLowerCase().includes(busqueda.toLowerCase()) || producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
            if (encontrado.length == 0) {
                Toastify({
                    text: "Lo sentimos," + " '" + busqueda + "' " + "no ha arrojado ninún resultado, lo intentamos de nuevo?",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "hsl(45, 100%, 70%)",
                    }
                }).showToast();
            } else {
                contenido.replaceChildren();
                const listaDeBusqueda = (funcion, encontrado) => {
                    for (const item of encontrado) {
                        numeracion = numeracion + 1;
                        funcion(item);
                    }
                }
                document.getElementsByClassName("contenido")[0].appendChild(cabecera);
                cabecera.innerHTML = `
                <p>Hemos encontrado los siguientes items relacionados con: "${busqueda}"</p>
                <div class="resultado-container"> </div>
                `
                listaDeBusqueda((encontrado) => {
                    //algunos destructurings
                    const {
                        imagen
                    } = encontrado;
                    const {
                        tipo
                    } = encontrado;
                    const {
                        nombre
                    } = encontrado;
                    const {
                        precio
                    } = encontrado;
                    const {
                        stock
                    } = encontrado;
                    const tarjeta = document.createElement("div");
                    tarjeta.className = "tarjeta";
                    document.getElementsByClassName("resultado-container")[0].appendChild(tarjeta);
                    tarjeta.innerHTML = `
                    <div class="td-imagen">${imagen}</div>
                    <div class="td-nombre">${nombre}</div>
                    <div class="td-tipo">tipo: ${tipo}</div>
                    <div class="td-precio">precio: $${precio}*</div>
                    <div class="td-precio">*los precios no incluyen i.v.a.</div>
                    <div class="td-stock">stock: ${stock}</div>
                    <div class="td-form-container"> <form class="td-form" id="agregado-${numeracion}">
                    <input style='width:3em' type="number" min="1">
                    <button class="boton-contextual">agregar</button>
                    </form>
                    </div>
                    `;
                    gestorCarrito(numeracion);
                }, encontrado);
                document.getElementsByClassName("contenido")[0].appendChild(salida);
                salida.innerHTML = `
                <button id="salida">volver</button>
                `
                const volver = document.getElementById("salida");
                volver.addEventListener("mouseup", (e) => {
                    e.preventDefault();
                    MENUBUSQUEDA();
                });
                function gestorCarrito(numero) {
                    const agregar = document.querySelector("#agregado-" + numero);
                    agregar.addEventListener("submit", (e) => {
                        e.preventDefault();
                        cantidades = parseInt(e.target[0].value);
                        document.querySelectorAll("input").forEach((input) => {
                            input.value = "";
                        });
                        if (localStorage.getItem("usuarioLogueado") === null) {
                            Toastify({
                                text: "Debes loguearte con una cuenta de usuario para poder cargar items al carrito.",
                                duration: 3000,
                                gravity: "bottom",
                                position: "right",
                                style: {
                                    background: "hsl(45, 100%, 70%)",
                                }
                            }).showToast();
                        } else if (isNaN(cantidades)) {
                            Toastify({
                                text: "atención: debes ingresar la cantidad de items para cargar en el carrito.",
                                duration: 3000,
                                gravity: "bottom",
                                position: "right",
                                style: {
                                    background: "hsl(45, 100%, 70%)",
                                }
                            }).showToast();
                        } else if (catalogoDeBusqueda[encontrado[(numero - 1)].id].stock <= 0) {
                            Toastify({
                                text: "Al parecer nos hemos quedado sin stock, por favor intenta mas tarde.",
                                duration: 3000,
                                gravity: "bottom",
                                position: "right",
                                style: {
                                    background: "hsl(45, 100%, 70%)",
                                }
                            }).showToast();
                        } else if (catalogoDeBusqueda[encontrado[(numero - 1)].id].stock < cantidades) {
                            Toastify({
                                text: "Atención: Stock insuficiente para cumplir la demanda, puedes pedir " + catalogoDeBusqueda[encontrado[(numero - 1)].id].stock + " unidades o menos.",
                                duration: 3000,
                                gravity: "bottom",
                                position: "right",
                                style: {
                                    background: "hsl(45, 100%, 70%)",
                                }
                            }).showToast();
                        } else {
                            catalogoDeBusqueda[encontrado[(numero - 1)].id].stock = catalogoDeBusqueda[encontrado[(numero - 1)].id].stock - cantidades;
                            carritoDeCompras.push({
                                id: catalogoDeBusqueda[encontrado[(numero - 1)].id].id,
                                tipo: catalogoDeBusqueda[encontrado[(numero - 1)].id].tipo,
                                cantidad: cantidades,
                                nombre: catalogoDeBusqueda[encontrado[(numero - 1)].id].nombre,
                                precio: (catalogoDeBusqueda[encontrado[(numero - 1)].id].precio),
                                subtotal: parseFloat(((catalogoDeBusqueda[encontrado[(numero - 1)].id].precio)*cantidades).toFixed(2)),
                                imagen: (catalogoDeBusqueda[encontrado[(numero - 1)].id].imagen),
                            });
                            sincronizarCarrito();
                            sincronizarCatalogo();
                            if (cantidades == 1) {
                                Toastify({
                                    text: catalogoDeBusqueda[encontrado[(numero - 1)].id].nombre + " ha sido añadido al carrito.",
                                    duration: 3000,
                                    gravity: "bottom",
                                    position: "right",
                                    style: {
                                        background: "hsl(45, 100%, 70%)",
                                    }
                                }).showToast();
                            } else {
                                Toastify({
                                    text: cantidades + "x " + catalogoDeBusqueda[encontrado[(numero - 1)].id].nombre + " han sido añadidos al carrito.",
                                    duration: 3000,
                                    gravity: "bottom",
                                    position: "right",
                                    style: {
                                        background: "hsl(45, 100%, 70%)",
                                    }
                                }).showToast();
                            }
                        }
                    });
                }
            }
        }
    });
}