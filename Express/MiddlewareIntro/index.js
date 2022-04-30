const express = require('express');
const app = express();
const morgan = require('morgan');

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
	res.send('SORRY YOU NEED A PASSWORD');
};
// app.use((req, res, next) => {
// 	console.log('This is my FIRST middleware');
// 	return next(); //without next the code stops here, we dont see the second message on the console
// 	console.log('This is my FIRST middleware - after calling next()');
// });
// app.use((req, res, next) => {
// 	console.log('This is my SECOND middleware');
// 	return next();
// });
// app.use((req, res, next) => {
// 	console.log('This is my THIRD middleware');
// 	return next();
// });

app.get('/', (req, res) => {
	console.log(`REQUEST DATE: ${req.requestTime}`);
	res.send('homepage');
});

app.get('/dogs', (req, res) => {
	res.send('WOOF WOOF');
});

app.get('/secret', verifyPassword, (req, res) => {
	res.send('SECRET: ELON MUSK IS BOLD');
});

app.use((req, res) => {
	res.status(404).send('NOT FOUND');
});

app.listen(3000, () => {
	console.log('App is running on localhost:3000');
});
