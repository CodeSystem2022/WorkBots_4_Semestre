function hola(nombre, miCallback){
    setTimeout(function () {
        console.log('Hola '+ nombre);
        miCallback(nombre);
    },1000);
}

function adios(nombre,otroCallback){
    setTimeout(function(){
        console.log('Adios '+ nombre);
        otroCallback();         
    },1500);
}

console.log('Iniciando el proceso...');
hola('Leonela',function(nombre){
    adios(nombre,function(){
        console.log('Terminando el proceso...');
    });
}); 

/*
hola('Leonela ', function(){});
adios('Leonela', function(){});
*/

