document.getElementById("registrar").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validación del correo electrónico
    if (!isValidEmail(email)) {
        alert("Correo electrónico no válido");
        return;
    }

    // Validación de contraseña
    if (contrasena.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    // Enviar los datos al servidor para el registro
    fetch("/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, contrasena })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registro exitoso");
            window.location.href = "siguiente_pagina.html";
        } else {
            alert("Error en el registro");
        }
    });
});

// Función de validación de correo electrónico
function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
