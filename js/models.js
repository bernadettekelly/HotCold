const mongoose = require('mongoose');

const GuessesSchema = mongoose.Schema({
		Number: {type: Number}
	})

GuessesSchema.methods.apiRepr = function() {
	return {
		Number: this.Number
	};
}

const Guesses = mongoose.model('Guesses', GuessesSchema);

module.exports = {Guesses};