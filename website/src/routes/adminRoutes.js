const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminController = require(path.resolve(__dirname,'../controllers/adminController'));
//Requerir el middleware Ruta Acceso
const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));
const mantenimiento = require('../middlewares/mantenimiento');

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/calzados'));
    },
    filename: function (req, file, cb) {
      cb(null, 'calzados-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

router.get('/', mantenimiento, adminController.index);
router.get('/buscar', adminController.search);    /*hay que armarlo en controller */
router.get('/create', adminController.create);
router.post('/create', upload.single('foto'), adminController.save);
router.get('/detail/:id', adminController.show);
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id', upload.single('foto'), adminController.update);
router.get('/delete/:id', adminController.destroy);

module.exports = router;







/*

const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const mantenimiento = require('../middlewares/mantenimiento');

const adminController = require(path.resolve(__dirname , '..','controllers','adminController'));

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

router.get('/administrar/buscar', adminController.search);
router.get('/administrar',mantenimiento, adminController.index);
router.get('/admin/create',  adminController.create);
router.post('/admin/create', upload.single('imagen'), adminController.save);
router.get('/admin/detail/:id', adminController.show);
router.get('/admin/delete/:id', adminController.destroy);
router.get('/admin/edit/:id', adminController.edit);
router.put('/admin/edit/:id', upload.single('imagen'),adminController.update);




module.exports = router;

*/