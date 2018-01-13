const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let coord = new Schema({ x: Number, y: Number});
let PuzzleSchema = new Schema({
	puzzleSet: {
		type: Number,
		required: true
	},
	puzzleNum: {
		type: Number,
		required: true
	},
	mat: {
		type: String,
		required: true
	},

	initEntries: [Number],
	solution: [Number]
});

let Puzzle = mongoose.model('Puzzle', PuzzleSchema);

module.exports = Puzzle;
