const Usuario = require("../models/UsuarioModel")

exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.send(usuarios);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener los usuarios' });
        console.log('🚀 - error', error);
    }
};

exports.deleteUsuario = async (req, res) => {
    const { userId } = req.params;
    const usuario = await Usuario.findById(userId);
    const usuarios = await Usuario.find({ category: 'admin' });

    // Condición para que como mínimo debe haber un usuario admin para poder eliminar otros usuarios //
    if (usuarios.length > 1) {
        try {
            await usuario.delete();
            res.send({ msg: 'Usuario eliminado' });
        } catch (error) {
            res.status(400).json({ msg: 'error al eliminar el usuario' });
            console.log('🚀 - error', error);
        }
    } else {
        res.status(400).json({ msg: 'No se puede eliminar al Usuario' });
    }
};
