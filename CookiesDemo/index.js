const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('OSEGREDO'));

app.get('/greet', (req, res) => {
	const { name = 'No-Name' } = req.cookies;
	res.send(`HEY THERE, ${name}!!`);
});

app.get('/setname', (req, res) => {
	res.cookie('name', 'romarinho');
	res.cookie('animal', 'kerlon foquinha');
	res.send('OK SENT YOU A COOKIE!!');
});

app.get('/getsignedcookie', (req, res) => {
	res.cookie('fruit', 'grape', { signed: true });
	res.send('OK SIGNED YOUR COOKIE');
});

app.get('/verifyfruit', (req, res) => {
	console.log(req.cookies);
	console.log(req.signedCookies);
	res.send(req.signedCookies);
});

app.listen(3000, () => {
	console.log('SERVING!!');
});
