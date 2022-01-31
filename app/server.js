const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const path = require('path');
const uuid = require('uuid');

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'iszlqxcjayzfnq',
  host: 'ec2-52-31-201-170.eu-west-1.compute.amazonaws.com',
  database: 'dbrp2248vaddfo',
  password: '53065aeffbaf5d7973ca1d73f5e4644df624f332256abfaba9a1a4a2b03952ee',
  port: 5432,
});

const port = process.env.PORT || 80;

try {	
	var data = {
		user: {
			name: 'Julia',
			points: 0
		},
		orders: [],
		userOrders: []
	}

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
		let userId = 'ee87a2cb-881a-4da1-a399-41b3f30d3e2c';

		pool.query('select * from users u where u.id like $1', [userId], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.post('/user', (req, res) => {
		data.user = req.body.user;

		saveData();

		res.json(data.user);
	});
	app.post('/set_points/:points', (req, res) => {
		data.user.points = parseInt(req.params.points);

		saveData();

		res.json(data.user);
	});
	app.post('/add_points/:points', (req, res) => {
		data.user.points = parseInt(data.user.points) + parseInt(req.params.points);

		saveData();

		res.json(data.user);
	});
	app.post('/set_name/:name', (req, res) => {
		data.user.name = req.params.name;

		saveData();

		res.json(data.user);
	});

	app.get('/orders', (req, res) => {
		res.json(data.orders);
	});
	app.get('/orders/:order_id', (req, res) => {
		res.json(data.orders.find(order => order.id == req.params.order_id));
	});
	app.post('/orders', (req, res) => {
		console.log('test', data);
		data.orders.push({ id: uuid.v4(), ...req.body });
		console.log('test', data);

		saveData();
		
		res.json(data.orders);
	});
	app.delete('/orders/:order_id', (req, res) => {
		data.orders.splice(data.orders.findIndex(order => order.id === req.params.order_id), 1);

		saveData();

		res.json(data.orders);
	});

	app.get('/user_orders', (req, res) => {
		res.json(data.userOrders);
	});
	app.get('/user_orders/:user_order_id', (req, res) => {
		res.json(data.userOrders.find(userOrder => userOrder.id == req.params.user_order_id));
	});
	app.post('/user_orders', (req, res) => {
		console.log(req.body);
		data.userOrders.push({ id: uuid.v4(), ...req.body });

		saveData();

		res.json(data.userOrders);
	});
	app.delete('/user_orders/:user_order_id', (req, res) => {
		data.userOrders.splice(data.userOrders.findIndex(userOrder => userOrder.id === req.params.user_order_id), 1);

		saveData();

		res.json(data.userOrders);
	});

	app.listen(port, () => {
		console.log(`app is listening on port: ${port}`);
	});

	var saveData = () => {
		
	}
} catch(error) {
	console.log(error);
}