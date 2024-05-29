var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController')
// Requerimos las validaciones de la carpeta middlewares

/* GET home page. */
router.get('/detail/:id', movieController.show);
router.get('/new', movieController.new);
router.get('/recomended', movieController.recomended);
router.get('/search', movieController.search);
router.get('/create', movieController.create);
// incluimos el middleware de validaciones entre el path y el controlador
router.post('/store', movieController.store);

router.post('/delete/:id', movieController.destroy);
router.get("/editMovie/:id", movieController.editMovie)
router.post("/update/:id", movieController.update)

module.exports = router;
