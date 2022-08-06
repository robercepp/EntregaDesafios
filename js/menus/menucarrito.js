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
                <div class=resultado-cabecera> 
                <div class="td-tipo">tipo</div>
                    <div class="td-nombre">nombre</div>
                    <div class="td-precio">precio unitario</div>
                    <div class="td-cantidad">cantidad</div>
                    <div class="td-subtotal">subtotal</div>
                    <div class="td-quitar">quitar</div>
                    </div>
                `
    const listaDeBusqueda = (funcion, encontrado) => {
        for (const item of encontrado) {
            numeracion = numeracion + 1;
            funcion(item);
        }
    }
    listaDeBusqueda((carritoDeCompras) => {
        const resultado = document.createElement("div");
        resultado.className = "resultado";
        resultado.id = "item-" + numeracion;
        document.getElementsByClassName("contenido")[0].appendChild(resultado);
        resultado.innerHTML = `
                    <div class="td-tipo">${carritoDeCompras.tipo}</div>
                                <div class="td-nombre">${carritoDeCompras.nombre}</div>
                                <div class="td-precio">$${(carritoDeCompras.precio*iva).toFixed(2)}</div>
                                <div class="td-cantidad">${carritoDeCompras.cantidad}</div>
                                <div class="td-subtotal">$${(carritoDeCompras.subtotal*iva).toFixed(2)}</div>
                                <div class="td-form"> <form id="quitar-${numeracion}">
                                <input style='width:2em' type="number" min="1">
                                <button class="boton-contextual">quitar</button>
                                </form>
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
                alerta.innerHTML = cantidades + "x " + carritoDeCompras[(numero - 1)].nombre + " ha sido eliminado del carrito de compras.";
                sincronizarCarrito();
                sincronizarCatalogo();
                if (carritoDeCompras[(numero - 1)].cantidad === 0) {
                    const borrar = document.querySelector("#item-" + numero);
                    borrar.remove();
                    let borrado = carritoDeCompras.splice(numero - 1, 1);
                    localStorage.removeItem("carritoDeComprasId" + usuarioLogueado[0].id)
                }
                MENUCARRITO();
            } else if (e.target[0].value === "") {
                alerta.innerHTML = "debes ingresar una cantidad para quitar";
            } else {
                alerta.innerHTML = "cuidado, no puedes quitar mas items de los que has agregado";
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
        alerta.innerHTML = "";
        MENUPRINCIPAL();
    });
    const cancelar = document.getElementById("cancelar");
    cancelar.addEventListener("mouseup", (e) => {
        e.preventDefault();
        alerta.innerHTML = "";
        EXITPROGRAM();
    });
    const pagar = document.getElementById("pagar");
    pagar.addEventListener("mouseup", (e) => {
        e.preventDefault();
        if (carritoDeCompras.length < 1) {
            alerta.innerHTML = "Lo sentimos. no puedes continuar si no has cargado ningun ítem en el carrito"
        } else {
            alerta.innerHTML = "";
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
                    alerta.innerHTML = "El pago de: $" + precioConIva.toFixed(2) + " se ha acreditado correctamente.";
                    ENTREGABOLETA();
                } else if (pago > precioConIva) {
                    let vuelto = pago - precioConIva.toFixed(2);
                    alerta.innerHTML = "Al parecer nos has enviado mas dinero del que era necesario, por ello te reenviamos $" + vuelto.toFixed(2) + " como vuelto por tu compra.";
                    ENTREGABOLETA();
                } else if (pago < precioConIva && pago > 0) {
                    let pagoInsuficiente = precioConIva.toFixed(2) - pago;
                    alerta.innerHTML = "Vaya!, al parecer has pagado $" + pago + ". Lamentablemente te faltan $" + pagoInsuficiente.toFixed(2) + " para completar los $" + precioConIva.toFixed(2) + " que se necesitan.</ br>Te devolvemos el dinero, Volvamos a completar la transacción.";
                }
            });
        }
    });
}