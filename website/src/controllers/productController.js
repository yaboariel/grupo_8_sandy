const path = require('path');
const fs = require('fs');
const {Product, Category, Color, ProdSize, Size} = require('../database/models/');

/*const productDB = require(path.resolve(__dirname,"..","database","models","product"));*/

module.exports = {

    index: function(req,res){
        
   
        const calzados = Product.findAll();
        const categorias = Category.findAll()

        Promise.all([calzados,categorias])
        .then(([calzados,categorias]) =>{
            res.render(path.resolve(__dirname , '..','views','product','products') , {calzados,categorias, styles:["master.css"], title:"Sandy - Catalogo de Productos"});
        })           
        .catch(error => res.send(error))
    },

    categorias: (req,res) =>{
       //return res.send(req.query.categoria);
       const categorias = Category.findAll();
       const calzados = Product
       .findAll({
           where: {categoryId : req.query.categoria},
           include: [{association: 'category'}]
       })
       Promise.all([calzados,categorias])
       .then(([calzados,categorias]) =>{
           console.log(calzados)
          
           res.render(path.resolve(__dirname, '..','views','product','products'), {calzados,categorias,styles:["master.css"], title:"Sandy - Categoria "})
       }
       )        
    },

    show: (req,res) => {
        
        /*sizeall= Size.findAll()*/
        /*const sizeall = Size.findByPk(3)*/
        
        prsize= ProdSize
        .findAll({where: {prodId : req.params.id},
            include: ['sizerel','colorrel'],
            raw: true,
            nest: true,
        })
        colores= Product
        .findAll({

            where: {id : req.params.id},
            include: [{association:'colors'}],
            raw: true,
            nest: true,

        })
        const prods = Product
        .findByPk(req.params.id, {
            include: ['category']
        })


        Promise.all([colores,prods,prsize])
        .then(([colores,prods,prsize]) => {
            console.log(prsize)
            
            res.render(path.resolve(__dirname, '..','views','product','detail'), {products: prods, prsize,colores,styles:["master.css"], title:"Sandy - Producto detalle"});
        })
    }
}