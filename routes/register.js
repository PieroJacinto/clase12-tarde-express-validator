var express = require('express');
var router = express.Router();
var registerController = require('../controllers/registerController');
// Requerimos las validaciones de la carpeta middlewares


/* GET home page. */
router.get('/', registerController.index);
// incluimos el middleware de validaciones entre el path y el controlador
router.post('/', registerController.store);

module.exports = router;
