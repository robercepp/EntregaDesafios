function MENU(clase, tipoPlural) {
    contenido.innerHTML = '';
    let busqueda = clase;
    let numeracion = 0;
    let encontrado = "";
    let cantidades;
    titulo.innerHTML = "---Menu de " + tipoPlural + "---";
    encontrado = catalogoDeBusqueda.filter(producto => producto.tipo.toLowerCase().includes(busqueda.toLowerCase()) || producto.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    const listaDeBusqueda = (funcion, encontrado) => {
        for (const item of encontrado) {
            numeracion = numeracion + 1;
            funcion(item);
        }
    }
    document.getElementsByClassName("contenido")[0].appendChild(cabecera);
    cabecera.innerHTML = `
                <p>Nuestro catálogo de ${tipoPlural}</p>
                <div class=resultado-cabecera> 
                    <div class="td-nombre">nombre</div>
                    <div class="td-precio">precio</div>
                    <div class="td-stock">stock</div>
                    <div class="td-form">carrito</div>
                    </div>
                `
    listaDeBusqueda((encontrado) => {
        const resultado = document.createElement("div");
        resultado.className = "resultado";
        document.getElementsByClassName("contenido")[0].appendChild(resultado);
        resultado.innerHTML = `
                    <div class="td-nombre">${encontrado.nombre}</div>
                    <div class="td-precio">$${encontrado.precio}</div>
                    <div class="td-stock">${encontrado.stock}</div>
                    <div class="td-form"> <form id="agregado-${numeracion}">
                    <input style='width:2em' type="number" min="1">
                    <button class="boton-contextual">agregar</button>
                    </form>
                    </div>
                    `;
        gestorCarrito(numeracion);
    }, encontrado);
    const salida = document.createElement("div");
    document.getElementsByClassName("contenido")[0].appendChild(salida);
    salida.innerHTML = `
                <button id="salida">volver</button>
                `
    const volver = document.getElementById("salida");
    volver.addEventListener("mouseup", (e) => {
        e.preventDefault();
        alerta.innerHTML = "";
        MENUPRINCIPAL();
    });

    function gestorCarrito(numero) {
        const agregar = document.querySelector("#agregado-" + numero);
        agregar.addEventListener("submit", (e) => {
            e.preventDefault();
            cantidades = parseInt(e.target[0].value);
            alerta.innerHTML = "";
            document.querySelectorAll("input").forEach((input) => {
                input.value = "";
            });
            if (localStorage.usuarioLogueado) {
                if (catalogoDeBusqueda[encontrado[(numero - 1)].id].stock > 0) {
                    if (catalogoDeBusqueda[encontrado[(numero - 1)].id].stock >= cantidades) {
                        catalogoDeBusqueda[encontrado[(numero - 1)].id].stock = catalogoDeBusqueda[encontrado[(numero - 1)].id].stock - cantidades;
                        carritoDeCompras.push({
                            id: catalogoDeBusqueda[encontrado[(numero - 1)].id].id,
                            tipo: catalogoDeBusqueda[encontrado[(numero - 1)].id].tipo,
                            cantidad: cantidades,
                            nombre: catalogoDeBusqueda[encontrado[(numero - 1)].id].nombre,
                            precio: (catalogoDeBusqueda[encontrado[(numero - 1)].id].precio),
                            subtotal: (cantidades * catalogoDeBusqueda[encontrado[(numero - 1)].id].precio)
                        });
                        sincronizarCarrito();
                        sincronizarCatalogo();
                        if (cantidades == 1) {
                            alerta.innerHTML = catalogoDeBusqueda[encontrado[(numero - 1)].id].nombre + " ha sido añadido al carrito.";
                            MENU(clase, tipoPlural)
                        } else {
                            alerta.innerHTML = cantidades + "x " + catalogoDeBusqueda[encontrado[(numero - 1)].id].nombre + " han sido añadidos al carrito.";
                            MENU(clase, tipoPlural)
                        }
                    } else {
                        alerta.innerHTML = "Atención: Stock insuficiente para cumplir la demanda, puedes pedir " + catalogoDeBusqueda[encontrado[(numero - 1)].id].stock + " unidades o menos.";
                    }
                } else {
                    alerta.innerHTML = "Al parecer nos hemos quedado sin stock, por favor intenta mas tarde.";
                }
            } else {
                alerta.innerHTML = "Debes loguearte con una cuenta de usuario para poder cargar items al carrito.";
            }
        });
    }
}