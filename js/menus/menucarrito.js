function MENUCARRITO() {
    numeracion = 0;
    let precioSinIva = carritoDeCompras.reduce((acumulador, carritoDeCompras) => {
        return acumulador + carritoDeCompras.subtotal;
    }, 0);
    let precioConIva = precioSinIva * iva;
    let pago;
    contenido.innerHTML = '';
    titulo.innerHTML = "---Carrito de compras---"
    document.getElementsByClassName("contenido")[0].appendChild(cabecera);
    cabecera.innerHTML = `
                <p>Repasemos lo que has cargado en el carrito antes de confirmar...</p>
                <div class="resultado-container"></div>
                `
    const listaDeBusqueda = (funcion, encontrado) => {
        for (const item of encontrado) {
            numeracion = numeracion + 1;
            funcion(item);
        }
    }
    listaDeBusqueda((carritoDeCompras) => {
     //algunos destructurings
     const {
        imagen
    } = carritoDeCompras;
    const {
        tipo
    } = carritoDeCompras;
    const {
        nombre
    } = carritoDeCompras;
    const {
        precio
    } = carritoDeCompras;
    const {
        cantidad
    } = carritoDeCompras;
    const {
        subtotal
    } = carritoDeCompras;
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.id = "item-" + numeracion;
    document.getElementsByClassName("resultado-container")[0].appendChild(tarjeta);
    tarjeta.innerHTML = `
    <div class="td-imagen">${imagen}</div>
    <div class="td-nombre">${nombre}</div>
    <div class="td-tipo">tipo: ${tipo}</div>
    <div class="td-stock">cantidad: ${cantidad}</div>
    <div class="td-precio">precio unitario: $${parseFloat(precio*iva).toFixed(2)}*</div>
    <div class="td-precio">subtotal: $${parseFloat(subtotal*iva).toFixed(2)}</div>
    <div class="td-precio">*los precios incluyen i.v.a.</div>
    <div class="td-form-container"> <form class="td-form" id="quitar-${numeracion}">
    <input style='width:3em' type="number" min="1">
    <button class="boton-contextual">quitar</button>
    </form>
    </div>
    `;
        eliminar(numeracion);
    }, carritoDeCompras);

    function eliminar(numero) {
        const quitar = document.querySelector("#quitar-" + numero);
        quitar.addEventListener("submit", (e) => {
            e.preventDefault();
            cantidades = parseInt(e.target[0].value);
            if (carritoDeCompras[(numero - 1)].cantidad >= cantidades) {
                carritoDeCompras[(numero - 1)].cantidad = carritoDeCompras[(numero - 1)].cantidad - cantidades;
                carritoDeCompras[(numero - 1)].subtotal = carritoDeCompras[(numero - 1)].subtotal - (carritoDeCompras[(numero - 1)].precio * cantidades);
                catalogoDeBusqueda[carritoDeCompras[(numero - 1)].id].stock = catalogoDeBusqueda[carritoDeCompras[(numero - 1)].id].stock + cantidades;
                Toastify({
                    text: cantidades + "x " + carritoDeCompras[(numero - 1)].nombre + " ha sido eliminado del carrito de compras.",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "hsl(45, 100%, 70%)",
                    }
                }).showToast();
                sincronizarCarrito();
                sincronizarCatalogo();
                console.log(carritoDeCompras.length)
                if (carritoDeCompras[(numero - 1)].cantidad < 1) {
                    const borrar = document.querySelector("#item-" + numero);
                    borrar.remove();
                    let borrado = carritoDeCompras.splice(numero - 1, 1);
                    sincronizarCarrito();
                    if (carritoDeCompras.length == 0) {
                        localStorage.removeItem("carritoDeComprasId" + usuarioLogueado[0].id)
                    } 
                }
                MENUCARRITO();
            } else if (e.target[0].value === "") {
                Toastify({
                    text: "debes ingresar una cantidad para quitar.",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "hsl(45, 100%, 70%)",
                    }
                }).showToast();
            } else {
                Toastify({
                    text: "cuidado, no puedes quitar mas items de los que has agregado.",
                    duration: 3000,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "hsl(45, 100%, 70%)",
                    }
                }).showToast();
            }
        });
    }
    salida.className = "foot"
    document.getElementsByClassName("contenido")[0].appendChild(salida);
    salida.innerHTML = `
    <div class="total-container"><div class="total"> Total: $${precioConIva.toFixed(2)}*</div>
    <div class="nota">*el precio incl. iva.</div></div>
                <button id="pagar">confirmar compra</button>
                <button id="cancelar">cancelar compra</button>
                <button id="salida">volver</button>
                `
    const volver = document.getElementById("salida");
    volver.addEventListener("mouseup", (e) => {
        e.preventDefault();
        MENUPRINCIPAL();
    });
    const cancelar = document.getElementById("cancelar");
    cancelar.addEventListener("mouseup", (e) => {
        e.preventDefault();
        EXITPROGRAM();
    });
    const pagar = document.getElementById("pagar");
    pagar.addEventListener("mouseup", (e) => {
        e.preventDefault();
        if (carritoDeCompras.length < 1) {
            Toastify({
                text: "Lo sentimos. no puedes continuar si no has cargado ningun ítem en el carrito.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
        } else {
            contenido.innerHTML = "";

            titulo.innerHTML = "---Carrito de Compras---";
            contenido.innerHTML = `
            <p>El precio total a pagar es de: $<u>${precioConIva.toFixed(2)}</u>.-</p>
            </br>
            <p>Por favor ingrese la suma a continuación</p>
            <form id="formulario">
            <input id="pago" type="text">
            <button type="submit" class="confirmar-pago">Confirmar Pago</button>
            </form>
            <button id="salida">volver</button>
            `

            const salida = document.getElementById("salida");
            salida.addEventListener("mouseup", (e) => {
                e.preventDefault();
                contenido.innerHTML = "";
                MENUCARRITO();
            })
            const confirmar = document.getElementById("formulario");
            confirmar.addEventListener("submit", (e) => {
                e.preventDefault();
                pago = parseFloat(e.target[0].value);
                document.querySelectorAll("input").forEach((input) => {
                    input.value = "";
                });
                if (pago == precioConIva.toFixed(2)) {
                    Swal.fire({
                        title: "Operación exitosa",
                        text: "El pago de: $" + precioConIva.toFixed(2) + " se ha acreditado correctamente.",
                        icon: "success",
                        confirmButtonText: "entendido",
                        background: "#fff",
                        backdrop: "rgba(0,0,123,0.4)",
                        color: "hsl(221, 56%, 31%)",
                        confirmButtonColor: "hsl(45, 100%, 82%)",
                    });
                    ENTREGABOLETA();
                } else if (pago > precioConIva) {
                    let vuelto = pago - precioConIva.toFixed(2);
                    Swal.fire({
                        title: "Operación exitosa",
                        text: "Al parecer nos has enviado mas dinero del que era necesario, por ello te reenviamos $" + vuelto.toFixed(2) + " como vuelto por tu compra.",
                        icon: "success",
                        confirmButtonText: "entendido",
                        background: "#fff",
                        backdrop: "rgba(0,0,123,0.4)",
                        color: "hsl(221, 56%, 31%)",
                        confirmButtonColor: "hsl(45, 100%, 82%)",
                    });
                    ENTREGABOLETA();
                } else if (pago < precioConIva && pago > 0) {
                    let pagoInsuficiente = precioConIva.toFixed(2) - pago;
                    Swal.fire({
                        title: "Lo sentimos",
                        text: "Al parecer has pagado $" + pago + ". Lamentablemente te faltan $" + pagoInsuficiente.toFixed(2) + " para completar los $" + precioConIva.toFixed(2) + " que se necesitan. Te devolvemos el dinero, Volvamos a completar la transacción.",
                        icon: "error",
                        confirmButtonText: "entendido",
                        background: "#fff",
                        backdrop: "rgba(0,0,123,0.4)",
                        color: "hsl(221, 56%, 31%)",
                        confirmButtonColor: "hsl(45, 100%, 82%)",
                    });
                }
            });
        }
    });
}