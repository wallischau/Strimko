var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
// Require all models
var db = require("../server/models");

router.get("/api/puzzle", (req, res) => {
	db.Puzzle.find({})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send(err.message?err.message:"Internal error");
		});
});



module.exports = router;
