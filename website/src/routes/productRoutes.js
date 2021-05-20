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
router.put('/actualizar/:id',productController.update);
/*
router.delete('/eliminar/:id',productController.delete);
*/

/*Habilite el export del router*/
module.exports = router;





/*

Codigo de dani

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const mantenimiento = require('../middlewares/mantenimiento');

const controllersProducto = require(path.resolve(__dirname, '..', 'controllers', 'controllersProducto'));

//Aquí dispongo la información del storage para tratamiento de guardado imagenes
//https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/platos'));    //Aquí deben indicar donde van a guardar la imagen
    },
    filename: function (req, file, cb) {
      cb(null, 'plato' + '-' + Date.now()+ path.extname(file.originalname));      //UNIQID() --- PHP
    }
  })
   
const upload= multer({ storage })


router.get('/productos', controllersProducto.index);
router.get('/productos/categoria',controllersProducto.categorias)
router.get('/productos/detail/:id', controllersProducto.show);




module.exports = router; */
