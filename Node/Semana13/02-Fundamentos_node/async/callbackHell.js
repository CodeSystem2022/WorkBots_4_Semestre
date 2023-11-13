function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla');
        callbackHablar();
    }, 1000);
}

//Función asincrona - adios
function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('Adiós ' + nombre);
        otrocallback();
    }, 1500);
}

//Función recursiva
function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else{
        callback(nombre,callback);
    }
}

//--Proceso principal
console.log('Iniciando el proceso...');
hola('Ariel', function(nombre){
    conversacion(nombre, 4, function(){
        console.log('Terminando el proceso...');
    });
});

/*
Se comenta el codigo
callback hell -> bienvenidos al infierno
hola('Carlos', function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                hablar(function () {
                    adios(nombre, function () {
                        console.log('Terminando el proceso...');
                    });
                });
            });
        });
    });
});

*/