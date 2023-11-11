
const express = require('express');
const app = express();
const mysql = require('mysql2');






app.set("view engine", "ejs");
// app.get('/', (req,res) => {
//     res.render("index")
// });


// app.get("/", (req, res) => {
//     res.render("carrito");
// });

// app.get("/", (req, res) => {
//     res.render("registro");
// });



app.get('/', (req, res) => {
    res.render("index");
});

app.get('/index', (req, res) => {
    res.render("index");
});

app.get('/carrito', (req, res) => {
    res.render("carrito");
});

app.get('/registro', (req, res) => {
    res.render("registro");
});





app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(express.static('client'));
// app.use(express.static('js'));


let conexion = mysql.createConnection({
    host: "localhost",
    database: "ecommerce_db",
    user: "root",
    password: "admin"
});

conexion.connect(function(err){
    if(err){
        throw err;
    } else{
        console.log("conexion exitosa");
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/registro.ejs');
});


app.post('/registrar', (req, res) => {
    const { nombre, email, contrasena } = req.body;

    const sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES (?, ?, ?)";

    conexion.query(sql, [nombre, email, contrasena], (err, result) => {
        if(err) {
            throw err;
        }
        console.log("Usuario registrado");
        res.redirect('/');
    });
});







// MERCADO PAGO

const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "APP_USR-6187064381911490-110811-1f5ae70e2d96219b564a50e6024ab183-1539972519",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, '../client')));



// app.use(express.static(path.join(__dirname, 'views')));
app.use(cors());

app.get("/", function () {
    path.resolve(__dirname, "..", "client"), "index", "views", "carrito";
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences
	.create(preference)
	.then(function (response) {
		res.json({
			id: response.body.id
		});
	})
	.catch(function (error) {
		console.log(error);
	});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port: http://localhost:8080/");
});