// Rutas para Autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authValidations = require("../validations/authValidations")
const auth = require('../middleware/auth');
const usuarioValidations = require('../validations/usuarioValidations');

// api/auth
router.post('/register', usuarioValidations.crearUsuario, authController.register);
router.post('/login', authValidations.login, authController.login);

router.get('/', auth, authController.getUser);


module.exports = router;