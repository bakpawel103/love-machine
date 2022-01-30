const express = require('express');
const serveStatic = require('serve-static');
var cors = require('cors');
const path = require('path');

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

const port = process.env.PORT || 80;

var orders = [];
var userOrders = [];
var user = {
	name: "Julia",
	points: 0
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.get('/user', (req, res) => {
	res.json(user);
});
app.post('/set_points', (req, res) => {
	user.points = req.body.points;
	res.json(user);
});
app.post('/set_name', (req, res) => {
	user.name = req.body.name;
	res.json(user);
});

app.get('/orders', (req, res) => {
	res.json(orders);
});
app.get('/orders/:order_id', (req, res) => {
	res.json(orders.find(order => order.id == req.params.order_id));
});
app.post('/orders', (req, res) => {
	orders.push({ id: orders.length, ...req.body });
	res.json(orders);
});

app.get('/user_orders', (req, res) => {
	res.json(userOrders);
});
app.get('/user_orders/:user_order_id', (req, res) => {
	res.json(userOrders.find(userOrder => userOrder.id == req.params.user_order_id));
});
app.post('/user_orders', (req, res) => {
	userOrders.push({ id: userOrders.length, ...req.body });
	res.json(userOrders);
});

app.listen(port, () => {
	console.log(`app is listening on port: ${port}`);
});