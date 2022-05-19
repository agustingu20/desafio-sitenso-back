const FavouriteMovie = require("../models/FavouriteModel")

exports.favouriteMovie = async (req, res) => {
    const { name } = req.body;
    const newFavouriteMovie = new FavouriteMovie({ name })
    newFavouriteMovie.user = req.usuario.id
    await newFavouriteMovie.save()
}

exports.getFavouriteMovie = async (req, res) => {
    try {
        const favouritesMovies = await FavouriteMovie.find({ user: req.usuario.id });
        res.send(favouritesMovies)
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener las películas favoritas' });
        console.log('🚀 - error', error);
    }
}

exports.deleteFavouriteMovie = async (req, res) => {
    const { movieId } = req.params;
    const movie = await FavouriteMovie.findById(movieId);
    try {
        await movie.delete();
        res.send({ msg: 'Favorito eliminado' });
    } catch (error) {
        res.status(400).json({ msg: 'error al eliminar película favorita' });
        console.log('🚀 - error', error);
    }
}