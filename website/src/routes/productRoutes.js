const express = require ( 'express' );
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const mantenimiento = require('../middlewares/mantenimiento');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../public/images/calzados'));    //Aquí deben indicar donde van a guardar la imagen
  },
  filename: function (req, file, cb) {
    cb(null, 'calzado' + '-' + Date.now()+ path.extname(file.originalname));      //UNIQID() --- PHP
  }
})
 
const upload= multer({ storage })





router.get('/detalle/:id',productController.show);
router.get('/categoria',productController.categorias);
router.get('/', productController.index);
/*router.post('/crear',productController.save); 
router.get('/editar/:id',productController.edit);
*/





module.exports = router;





