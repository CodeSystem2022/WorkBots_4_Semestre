function hola(nombre){
    return new Promise(function(resolver, reject){
        setTimeout(function () {
            console.log('Hola '+nombre);
            resolver(nombre);
        },1000);  
    });
    
}

function hablar(callbackHablar){
    setTimeout( function  ()  {
        console.log('bla bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre, ){
    return new Promise((resolver, reject) =>{      
        setTimeout(function (){
            console.log('Adios '+ nombre);
            resolver();
          }, 1000);
    })
}

//llamamos a la funcion
console.log("Iniciando el proceso...");
hola("ariel")
    .then(adios) //.then nos retorna un valor
    .then((nombre)=> {
        console.log("Terminamos el proceso");
    })
