// var express = require("express");
var mongoose = require("mongoose");
// var router = express.Router();
// Require all models
var db = require("../server/models");
module.exports = {
  findAll: function(req, res) {
    db.Puzzle
      .find(req.query)
      .sort({ puzzleNum: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Puzzle
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Puzzle
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Puzzle
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Puzzle
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

// router.get("/api/puzzles", (req, res) => {
// 	db.Puzzle.find({})
// 		.then((data) => {
// 			res.json(data);
// 		})
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).send(err.message?err.message:"Internal error");
// 		});
// });



// module.exports = router;
