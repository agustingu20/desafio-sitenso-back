const Usuario = require("../models/UsuarioModel")
const bcryptjs = require('bcryptjs')
const { validationResult } = require("express-validator")


// exports.crearUsuario = async (req, res) => {
//     const { email, password } = req.body
//     try {

//         //Se revisan errores
//         const errores = validationResult(req)
//         if (!errores.isEmpty())
//             return res.status(400).json({ msg: errores.array() })

//         //Revisando Email
//         let usuario = await Usuario.findOne({ email })

//         if (usuario) {
//             return res.status(400).json({ msg: "El usuario ya existe" })
//         }

//         //Nuevo usuario
//         usuario = new Usuario(req.body)

//         //Hashear password
//         const salt = await bcryptjs.genSalt(10)
//         usuario.password = await bcryptjs.hash(password, salt)

//         //Guardar usuario
//         await usuario.save()

//         res.send("Usuario creado correctamente")
//     } catch (error) {
//         console.log(error)
//         res.status(400).send("Hubo un error al crear al usuario")
//     }
// }

// exports.obtenerUsuarios = async (req, res) => {
//     try {
//         const usuarios = await Usuario.find();
//         res.send(usuarios);
//     } catch (error) {
//         res.status(400).json({ msg: 'error al obtener los usuarios' });
//         console.log('🚀 - error', error);
//     }
// };

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
