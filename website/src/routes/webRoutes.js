const express = require('express');
const router=express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');

router.get('/',mainController.index);
/*router.get('/buscar',mainController.search);*/
/*router.get('/carrito',mainController.cart);*/
router.get('/nosotros', mainController.nosotros);


module.exports=router; 
