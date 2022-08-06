function ENTREGABOLETA() {
    const listadoCarrito = carritoDeCompras.map((carritoDeCompras) => "-" + carritoDeCompras.cantidad + "x " + carritoDeCompras.nombre + "<br />Subtotal: $" + (carritoDeCompras.subtotal * iva).toFixed(2) + "<br />");
    const precioSinIva = carritoDeCompras.reduce((acumulador, carritoDeCompras) => {
        return acumulador + carritoDeCompras.subtotal;
    }, 0);
    const precioConIva = precioSinIva * iva;
    const fechaDeCompra = new Date();
    const dia = fechaDeCompra.toLocaleDateString();
    const hora = fechaDeCompra.toLocaleTimeString();
    contenido.innerHTML = "Su boleta de compra:<br />Factura tipo C consumidor final<br />Anabella Avena n°0001-000001<br />Fecha de compra: " + dia + "<br />hora: " + hora + "<br />Nombre: " + usuarioLogueado[0].nombre + "<br />Apellido: " + usuarioLogueado[0].apellido + "<br />email: " + usuarioLogueado[0].email + "<br />Items comprados:<br />" + listadoCarrito + "<br />Total monto: $" + precioConIva.toFixed(2) + "-.<br />Muchas gracias por su compra!";
    carritoDeCompras.splice(0, carritoDeCompras.length);
    alerta.innerHTML += "</ br> Ha salido de la tienda, esperamos volver a verlo pronto."
}