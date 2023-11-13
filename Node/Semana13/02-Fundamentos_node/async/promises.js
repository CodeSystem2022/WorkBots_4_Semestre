// La palabra async no es necesaria en las funciones, porque ya son asincronas
// Igual proyectan una sincronía visual
function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);
    })
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => { 
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Adiós ' + nombre); 
            //resolve();
            reject('Hay un error');
        }, 1000);
    });
}

console.log('Iniciando el proceso...');
hola('Ariel')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios) 
    .then((nombre) => {
        console.log('Terminando el proceso');
    })
    .catch(error => {
        console.log('Ha habido un error: ');
        console.log(error);
    })

// await hola("Ariel"); // eso es una mala sintaxis
// await solo es valido dentro de una funcion asincrona
async function main(){
    let nombre = await hola("Ariel");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}
console.log("Empezamos el proceso...")
main();
// console.log("Termina el proceso..")
console.log("Esta va a ser la segunda instrucción")