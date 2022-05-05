const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('dev'));
app.use((req, res, next) => {
	req.requestTime = Date.now();
	console.log(req.method, req.path);
	next();
});

app.use('/dogs', (req, res, next) => {
	console.log('I LOVE DOGS');
	next();
});

const verifyPassword = (req, res, next) => {
	const { password } = req.query;
	if (password === 'valentinaepepe') {
		next();
	}
	throw new AppError('Password required!', 401);
	// res.send('SORRY YOU NEED A PASSWORD');
	// res.status(401);
};

app.get('/', (req, res) => {
	console.log(`REQUEST DATE: ${req.requestTime}`);
	res.send('HOMEPAGE');
});

app.get('/error', (req, res) => {
	chicken.fly();
});

app.get('/dogs', (req, res) => {
	res.send('WOOF WOOF');
});

app.get('/secret', verifyPassword, (req, res) => {
	res.send('SECRET: ELON MUSK IS BOLD');
});

app.get('/admin', (req, res) => {
	throw new AppError('You are not an admin!', 403);
});

app.use((req, res) => {
	res.status(404).send('NOT FOUND');
});

// app.use((err, req, res, next) => {
// 	console.log('******************************');
// 	console.log('*************ERROR************');
// 	console.log('******************************');
// 	next(err);
// });

app.use((err, req, res, next) => {
	const { status = 500, message = 'SOMETHING WENT WRONG' } = err;
	res.status(status).send(message);
});

app.listen(3000, () => {
	console.log('App is running on localhost:3000');
});
