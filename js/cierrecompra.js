function ENTREGABOLETA() {
    const listadoCarrito = carritoDeCompras.map((carritoDeCompras) => "-" + carritoDeCompras.cantidad + "x " + carritoDeCompras.nombre + "<br />Subtotal: $" + (carritoDeCompras.subtotal * iva).toFixed(2) + "<br />");
    const precioSinIva = carritoDeCompras.reduce((acumulador, carritoDeCompras) => {
        return acumulador + carritoDeCompras.subtotal;
    }, 0);

    //Ejemplo de Spread y su aplicación en la suma del total de los elementos del carrito de compras
    const subtotales = carritoDeCompras.map((carritoDeCompras) => carritoDeCompras.subtotal);
    const sumar = (...precios) => {
        return precios.reduce((acumulador, precio) => acumulador + precio, 0);
    }
    precioTotal = (sumar(...subtotales) * iva).toFixed(2)

    const precioConIva = precioSinIva * iva;
    const fechaDeCompra = new Date();
    const dia = fechaDeCompra.toLocaleDateString();
    const hora = fechaDeCompra.toLocaleTimeString();
    contenido.innerHTML = "Su boleta de compra:<br />Factura tipo C consumidor final<br />Anabella Avena n°0001-000001<br />Fecha de compra: " + dia + "<br />hora: " + hora + "<br />Nombre: " + nombre(usuarioLogueado[0]) + "<br />Apellido: " + apellido(usuarioLogueado[0]) + "<br />email: " + email(usuarioLogueado[0]) + "<br />Items comprados:<br />" + listadoCarrito + "<br />Total monto: $" + precioTotal + "-.<br />Muchas gracias por su compra!";
    carritoDeCompras.splice(0, carritoDeCompras.length);
    localStorage.removeItem("carritoDeComprasId" + usuarioLogueado[0].id);
    Toastify({
        text: "Ha salido de la tienda, esperamos volver a verlo pronto.",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "hsl(45, 100%, 70%)",
        }
    }).showToast();
}