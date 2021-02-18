const express = require ( 'express' );
const router=express.Router();
const userController = require('../controllers/userController');

router.get('/registrar',userController.register);

router.get('/ingresar',userController.login);
/*
router.get('/perfil',userController.profile);

router.get('/compras',userController.orders);

router.post('/guardar',userController.save);

router.put('/actualizar',userController.update);

router.delete('/desactivar',userController.disable);
*/


module.exports = router;