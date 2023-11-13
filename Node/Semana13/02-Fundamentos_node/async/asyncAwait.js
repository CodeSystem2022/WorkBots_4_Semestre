async function hola(nombre) {
	//convertimos la funcion hola en una función asyncrona declarada.
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Hola ' + nombre);
			resolve(nombre);
		}, 1000);
	});
}

async function hablar(nombre) {
	return new Promise((resolve, reject) => {
		// usamos la sintaxis ES6
		setTimeout(function () {
			console.log('bla bla bla');
			resolve(nombre);
		}, 1000);
	});
}

//Función asincrona - adios
//await solamente es válido dentro de una función asíncrona.
async function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Adiós ' + nombre); //forma correcta de concatenar
			resolve();
			//reject('Hay un error');
		}, 1000);
	});
}

//await hola('Ariel'); // esto es una mala syntaxis no se debe utilizar
//await es válido solo dentro de una función asíncrona
async function main() {
	let nombre = await hola('Ariel');
	await hablar();
	//sin el await se manejan en segundo plano
	await hablar();
	await hablar();
	await adios(nombre);
	console.log('Termina el proceso...');
}

//async await convierte las promesas en procesos aparentemente s+incronos

//console.log('Empezamos el proceso...');

main();

//console.log('Esta va a ser la segunda instrucción');

//TODO EL CÓDIGO EN INGLES
function sayHello(name) {
	return new Promise((resolve, reject) => {
		// usamos la sintaxis ES6
		setTimeout(function () {
			console.log('Hello ' + name);
			resolve(name);
		}, 1000);
	});
}

function talk(name) {
	return new Promise((resolve, reject) => {
		// usamos la sintaxis ES6
		setTimeout(() => {
			console.log('bla bla bla');
			resolve(name);
		}, 1000);
	});
}

function sayBye(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Goodbye ' + name); //forma correcta de concatenar
			resolve(name);
			//reject('Hay un error');
		}, 1000);
	});
}

async function conversation(name) {
	console.log('Code in Eenglish');
	console.log('Starting async process...');
	await sayHello(name);
	await talk();
	await talk();
	await talk();
	await sayBye(name);
	console.log('Process completed');
}

conversation('Ariel');
