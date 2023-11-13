
console.log('Hola a toda la cohorte 2022') // Ejecutamos desde la terminal, digitando node monohilo

var i = 0;
setInterval(function() {
    console.log(i);
    i++;
    if(i === 5){
        console.log('Forzamos un error');
        var a = 3 + z;
    }
}, 1000);
console.log("Última instrucción");
// 7.3-instalacion de un paquete pm2 en la terminal
