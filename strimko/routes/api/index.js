const router = require("express").Router();
const puzzleRoutes = require("./puzzles");

// Book routes
router.use("/puzzles", puzzleRoutes);

module.exports = router;
