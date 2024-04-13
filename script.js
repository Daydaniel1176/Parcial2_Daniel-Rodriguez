
var rentButtons = document.getElementsByClassName("rent-button");

// Agregar un evento de clic a cada botón de "Rentar"
for (var i = 0; i < rentButtons.length; i++) {
    rentButtons[i].addEventListener("click", showPopup);
}
var popup = document.getElementById("popup");
var close = document.getElementsByClassName("close")[0];

// Mostrar el popup cuando el usuario hace clic en un botón o enlace
function showPopup() {
    popup.style.display = "block";
}

// Ocultar el popup cuando el usuario hace clic en el botón de cerrar
close.onclick = function() {
    popup.style.display = "none";
}

// Ocultar el popup cuando el usuario hace clic en cualquier lugar fuera de él
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}