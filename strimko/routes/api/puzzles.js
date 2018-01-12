const router = require("express").Router();
const puzzleController = require("../../controllers/puzzleController");

// Matches with "/api/books"
router.route("/")
  .get(puzzleController.findAll)
  // .post(puzzleController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(puzzleController.findById);
  // .put(puzzleController.update)
  // .delete(puzzleController.remove);

module.exports = router;
