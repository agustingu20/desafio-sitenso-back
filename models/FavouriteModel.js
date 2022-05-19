const mongoose = require("mongoose");
const FavouritesMoviesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    user: {
        type: String
    }
})

module.exports = mongoose.model("FavouriteMovie", FavouritesMoviesSchema)