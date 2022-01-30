const express = require('express');
const serveStatic = require('serve-static');
var cors = require('cors');
const path = require('path');
var uuid = require('uuid');
const fs = require('fs');

const port = process.env.PORT || 80;
const dataJson = 'data.json';

let rawdata = fs.readFileSync(dataJson);
let parsedData = JSON.parse(rawdata);

var orders = parsedData.orders;
var userOrders = parsedData.userOrders;
var user = parsedData.user;

const app = express();

app.use(express.json());
app.use(cors());

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.get('/user', (req, res) => {
	res.json(user);
});
app.post('/user', (req, res) => {
	user = req.body.user;
	res.json(user);

	saveData();
});
app.post('/set_points', (req, res) => {
	user.points = req.body.points;
	res.json(user);

	saveData();
});
app.post('/set_name', (req, res) => {
	user.name = req.body.name;
	res.json(user);

	saveData();
});

app.get('/orders', (req, res) => {
	res.json(orders);
});
app.get('/orders/:order_id', (req, res) => {
	res.json(orders.find(order => order.id == req.params.order_id));
});
app.post('/orders', (req, res) => {
	orders.push({ id: uuid.v4(), ...req.body });
	res.json(orders);

	saveData();
});
app.delete('/orders/:order_id', (req, res) => {
	orders.splice(orders.findIndex(order => order.id === req.params.order_id), 1)
	res.json(orders);

	saveData();
});

app.get('/user_orders', (req, res) => {
	res.json(userOrders);
});
app.get('/user_orders/:user_order_id', (req, res) => {
	res.json(userOrders.find(userOrder => userOrder.id == req.params.user_order_id));
});
app.post('/user_orders', (req, res) => {
	console.log(req.body);
	userOrders.push({ id: uuid.v4(), ...req.body });
	res.json(userOrders);

	saveData();
});
app.delete('/user_orders/:user_order_id', (req, res) => {
	userOrders.splice(userOrders.findIndex(userOrder => userOrder.id === req.params.user_order_id), 1)
	res.json(userOrders);

	saveData();
});

app.listen(port, () => {
	console.log(`app is listening on port: ${port}`);
});

var saveData = () => {
	let data = JSON.stringify({
		"user": user,
		"orders": orders,
		"userOrders": userOrders
	}, null, 2);

	fs.writeFile(dataJson, data, (err) => {
		if (err) throw err;
		console.log('User data written to file');
	});
}