$(document).ready(function() {

    setTimeout(function() {
        //
        $(".bienvenido").fadeOut(1500);
    }, 5000);
    setTimeout(function() {
        $(".form-group").fadeIn(1500);
    }, 5000);


});

function onKeyUnPressed(event) {
    var codigo = event.which || event.keyCode;
    console.log("Presionada: " + codigo);
    if (codigo == 17 && codigo == 121) {
        document.getElementById("validE").style.display = "block";
        document.getElementById("invalidE").style.display = "none";
    }
}

function validar() {
    var email = document.getElementById("email").value;
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(email)) {
        alert("La dirección de email " + email + " es correcta.");
        window.location.href = 'formulario.html';
    } else {
        alert("La dirección de email es incorrecta.");
        //console.log(email);
    }
}