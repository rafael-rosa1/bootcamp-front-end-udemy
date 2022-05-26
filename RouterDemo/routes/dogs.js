const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('ALL DOGS');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.send(`DOG NUMBER ${id}`);
});
router.get('/:id/edit', (req, res) => {
	const { id } = req.params;
	res.send(`EDITING DOG NUMBER ${id}`);
});

module.exports = router;
