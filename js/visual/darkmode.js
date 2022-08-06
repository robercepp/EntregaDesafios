//Modo obscuro switch
let modoobscuro = document.getElementById('switch-label')

modoobscuro.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark-mode");
    document.querySelector(".invertir").classList.toggle("modo-obscuro")
});