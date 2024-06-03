const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
// Requerimos las validaciones de la carpeta middlewares
const loginValidations = require("../middlewares/login-validator")


/* GET home page. */
router.get('/', loginController.index);
// incluimos el middleware de validaciones entre el path y el controlador
router.post('/', loginValidations, loginController.login);

router.post('/logout', loginController.logout);


module.exports = router;