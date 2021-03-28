const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const adminController = require(path.resolve(__dirname,'../controllers/adminController'));
//Requerir el middleware Ruta Acceso
const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images'));
    },
    filename: function (req, file, cb) {
      cb(null, 'calzados-'+Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage })

router.get('/',  adminController.index);
router.get('/create', adminController.create);
router.post('/create', upload.single('foto'), adminController.save);
router.get('/detail/:id', adminController.show);
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id', upload.single('foto'), adminController.update);
router.get('/delete/:id', adminController.destroy);

module.exports = router;