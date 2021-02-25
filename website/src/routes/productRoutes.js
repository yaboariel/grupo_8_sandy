const express = require ( 'express' );
const router = express.Router();
const productController = require('../controllers/productController');

/*router.get('/',productController.index);*/

/*Por ahora, voy a dejar '/detalle' para mostrar el mismo de manera estatica
Mas adelante, se debera poner '/detalle/:id' para mostrar de manera dinamica*/
router.get('/detalle',productController.show);


router.post('/crear',productController.save);


router.get('/editar/:id',productController.edit);
/*
router.put('/actulizar/:id',productController.update);
/*
router.delete('/eliminar/:id',productController.delete);
*/

/*Habilite el export del router*/
module.exports = router;