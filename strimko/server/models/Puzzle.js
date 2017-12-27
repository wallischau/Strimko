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

	stream0: [coord],
	stream1: [coord],
	stream2: [coord],
	stream3: [coord],
	stream4: [coord],
	entries: [Number]
});

let Puzzle = mongoose.model('Puzzle', PuzzleSchema);

module.exports = Puzzle;
