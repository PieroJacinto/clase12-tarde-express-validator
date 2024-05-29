var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController');
// Requerimos las validaciones de la carpeta middlewares


/* GET home page. */
router.get('/', loginController.index);
// incluimos el middleware de validaciones entre el path y el controlador
router.post('/', loginController.login);

router.post('/logout', loginController.logout);


module.exports = router;