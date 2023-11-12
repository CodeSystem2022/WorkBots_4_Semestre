const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));






// const mysql = require('mysql2');



let conexion = mysql.createConnection({
    host: "localhost",
    database: "ecommerce_db",
    user: "root",
    password: "admin"
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
});

// conexion.end();





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/registro.html');
});

app.post('/registrar', (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    const sql = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)";

    conexion.query(sql, [nombre, correo, contraseña], (err, result) => {
        if(err) {
            throw err;
        }
        console.log("Usuario registrado");
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});