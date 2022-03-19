const { check } = require('express-validator');

const authValidations = {
    login: [
        check('email', 'Agrega un Email Valido').isEmail(),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 }),
    ],
};

module.exports = authValidations;