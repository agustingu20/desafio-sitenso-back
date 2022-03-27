// Rutas para crear usuarios
const express = require('express');
const usuarioController = require("../controllers/usuarioController")
const router = express.Router();
const usuarioValidations = require("../validations/usuarioValidations")

// Crear un usuario
// api/usuarios
// router.post('/', usuarioValidations.crearUsuario, usuarioController.crearUsuario);
// router.get('/', usuarioController.obtenerUsuarios);
router.delete('/:userId', usuarioController.deleteUsuario);

module.exports = router;