const express = require('express');
const router = express.Router();
const favouriteMovieController = require("../controllers/favouriteMovieController")
const auth = require('../middleware/auth');


router.post("/", auth, favouriteMovieController.favouriteMovie)
router.get("/", auth, favouriteMovieController.getFavouriteMovie)
router.delete("/:movieId", auth, favouriteMovieController.deleteFavouriteMovie)

module.exports = router;
