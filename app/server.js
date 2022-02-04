const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const path = require('path');
const uuid = require('uuid');

const twilio = require('twilio')( "AC2cee8b14d4d65706b7f80bccfb9ddc3f", "bd1a23897d9ff547136efd23842f24c9");

const Pool = require('pg').Pool;

const pool = new Pool({
  connectionString: 'postgres://iszlqxcjayzfnq:53065aeffbaf5d7973ca1d73f5e4644df624f332256abfaba9a1a4a2b03952ee@ec2-52-31-201-170.eu-west-1.compute.amazonaws.com:5432/dbrp2248vaddfo',
  ssl: {
    rejectUnauthorized: false
  }
});

const port = process.env.PORT || 80;

try {
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

	// User
	app.post('/user', (req, res) => {
		pool.query('INSERT INTO users ("id", "name", "points") VALUES ($1, $2, $3);', [uuid.v4(), req.body.name, req.body.points], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.get('/user/:user_id', (req, res) => {
		pool.query('select * from users where users.id like $1', [req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.post('/user/:user_id/set_points/:points', (req, res) => {
		if(req.params.points < 0) {
			res.status(400);
			return;
		}
		pool.query('update users set points = $1 where id = $2', [parseInt(req.params.points), req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.post('/user/:user_id/add_points/:points', (req, res) => {
		pool.query('select * from users u where u.id like $1', [req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}
			if(parseInt(req.params.points) + parseInt(results.rows[0].points) < 0) {
				res.status(400);
				return;
			}

			pool.query('update users set points = $1 where id = $2', [parseInt(req.params.points) + parseInt(results.rows[0].points), req.params.user_id], (error2, results2) => {
				if(error) {
					throw error;
				}
	
				res.status(200).json(results2.rows);
			});
		});
	});
	app.post('/user/:user_id/set_name/:name', (req, res) => {
		pool.query('update users set name = $1 where id = $2', [req.params.name, req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});

	// Orders
	app.get('/user/:user_id/orders', (req, res) => {
		pool.query('select orders.* from orders inner join users on orders.user_id = users.id where users.id = $1', [req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.get('/user/:user_id/orders/:order_id', (req, res) => {
		pool.query('select orders.* from orders inner join users on orders.user_id = users.id where users.id = $1 and orders.id = $2', [req.params.user_id, req.params.order_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.delete('/user/:user_id/orders/:order_id', (req, res) => {
		pool.query('delete from orders where orders.user_id = $1 and orders.id = $2', [req.params.user_id, req.params.order_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.post('/user/:user_id/orders', (req, res) => {
		pool.query('INSERT INTO orders ("id", "description", "points", "user_id") VALUES ($1, $2, $3, $4);', [uuid.v4(), req.body.description, req.body.points, req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});

	// User orders
	app.get('/user/:user_id/user_orders', (req, res) => {
		pool.query('select user_orders.* from user_orders inner join users on user_orders.user_id = users.id where users.id = $1', [req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.get('/user/:user_id/user_orders/:user_order_id', (req, res) => {
		pool.query('select user_orders.* from user_orders inner join users on user_orders.user_id = users.id where users.id = $1 and user_orders.id = $2', [req.params.user_id, req.params.user_order_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.delete('/user/:user_id/user_orders/:user_order_id', (req, res) => {
		pool.query('delete from user_orders where user_orders.user_id = $1 and user_orders.id = $2', [req.params.user_id, req.params.user_order_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});
	app.post('/user/:user_id/user_orders', (req, res) => {
		pool.query('INSERT INTO user_orders ("id", "description", "points", "user_id") VALUES ($1, $2, $3, $4);', [uuid.v4(), req.body.description, req.body.points, req.params.user_id], (error, results) => {
			if(error) {
				throw error;
			}

			res.status(200).json(results.rows);
		});
	});

	app.post('/user/:user_id/user_orders/:user_order_id/redeem', (req, res) => {

		twilio.messages.create({
			to: '+48730600933',
			body: "test"
		  }).then((response) => {
			  console.log(response.sid);
			  res.status(200).json(response);
		  });
		/*pool.query('select * from users where users.id like $1', [req.params.user_id], (errorUser, resultsUser) => {
			if(errorUser) {
				throw errorUser;
			}

			pool.query('select user_orders.* from user_orders inner join users on user_orders.user_id = users.id where users.id = $1 and user_orders.id = $2', [req.params.user_id, req.params.user_order_id], (errorUserOrder, resultsUserOrder) => {
				if(errorUserOrder) {
					throw errorUserOrder;
				}

				var message = `${resultsUser.rows[0].name} redeemed order "${resultsUserOrder.rows[0].description}"`;
	
				pool.query('delete from user_orders where user_orders.user_id = $1 and user_orders.id = $2', [req.params.user_id, req.params.user_order_id], (errorDelete, resultsDelete) => {
					if(errorDelete) {
						throw errorDelete;
					}
				});
			});
		});*/
	});

	app.listen(port, () => {
		console.log(`app is listening on port: ${port}`);
	});
} catch(error) {
	console.log(error);
}