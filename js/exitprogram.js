function EXITPROGRAM() {
    contenido.innerHTML = "";
    if (carritoDeCompras.length > 0) {
        contenido.innerHTML = `
        <p>Al parecer ha dejado cargado el carrito de compras.</p>
        <p>Desea revisarlo antes de salir?</p>
        <button id="si"class="opciones-menu">si</button>
        <button id="no"class="opciones-menu">no</button>
    `
        const si = document.getElementById("si");
        si.addEventListener("mouseup", (e) => {
            e.preventDefault;
            MENUCARRITO();
        });
        const no = document.getElementById("no");
        no.addEventListener("mouseup", (e) => {
            e.preventDefault;
            localStorage.removeItem("usuarioLogueado")
            usuarioLogueado = [];
            carritoDeCompras = [];
            unlogged();
            Toastify({
                text: "Ha salido de la tienda, esperamos volver a verlo pronto.",
                duration: 3000,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "hsl(45, 100%, 70%)",
                }
            }).showToast();
        });
    } else {
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
}