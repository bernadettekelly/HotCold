const express = require('express');
const router = express.Router();

router.post('/fewest-guesses', (req, res) => {
	const requiredFields = ['Number'];
	for (let i=0; i<requiredFields.length; i++) {
		const field = requiredFields[i];
		if (!(field in req.body)) {
			const message = `Missing \`${field}\` in request body`
			return res.status(400).send(message);
		}
	}
	Guesses 
	.create({
		Number: req.body.Number
	})
	.then(Guesses => res.status(201).json(Guesses.apiRepr()))
	.catch(err => {
		console.log(err);
		res.status(500).json({error: 'Something went wrong'});
	});
});

router.get('/fewest-guesses', (req, res) => {
	Guesses
	.find()
	.exec()
	.then(posts => {
		res.status(200).json({Guesses:guess});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: 'something went wrong'});
	})
});