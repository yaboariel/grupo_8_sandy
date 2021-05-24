const path = require('path');
const fs = require('fs');
const {Product, Category, Brand, Material} = require('../database/models/');



const title= "Sandy | ADMIN";
/*const productDB = require(path.resolve(__dirname,"..","database","models","product"));*/

module.exports = {
    index: (req,res) => {
        Product
        .findAll()
        .then(productos => {
              res.render(path.resolve(__dirname, '../views/admin/administrar'),{productos, styles: ["master.css"], title});
        })
        .catch(error => res.send(error))
    },
    /*Por get */
    create: (req,res) =>{
       const categorias = Category.findAll();
       const calzados = Product.findAll();
       const brands = Brand.findAll();
      /* const colors = Color.findAll();*/

       const materials = Material.findAll();
       Promise.all([calzados,categorias,brands,materials])
       .then(([calzados,categorias,brands,materials]) =>
           //return res.send(platoComida);
           res.render(path.resolve(__dirname, '..','views','admin','create'), {calzados,categorias,brands,materials,styles:["master.css", "detail.css"], title:"Sandy - Subir Productos "})
       )                
       .catch(error => res.send(error))
/*
        Product
        .findAll()
        .then(productos => {
              res.render(path.resolve(__dirname, '../views/admin/create'),{productos,category, styles: ["master.css", "detail.css"], title});
        })
        .catch(error => res.send(error))   
 */       
    },
    /* Por post */
    save: (req,res) => {
         
        const _body= req.body;
        
        
        _body.title = req.body.nombre,
        _body.descripcion =req.body.descripcion,
        _body.precio= req.body.precio,
        _body.descuento=req.body.descuento,
        _body.categoryId=req.body.categoria,   
        _body.imagen= req.file ? req.file.filename : ""
        _body.materialId=req.body.material,   
        _body.model=req.body.model,   
        _body.brandId=req.body.brand,   
        _body.title=req.body.title,   
        _body.categoryId=req.body.categoria,   
        
        console.log(_body)

        Product 
        .create(_body)
        .then(producto => res.redirect('/administrar') );
      
         },

    show: (req,res) => {
        Product
        .findByPk(req.params.id)
        .then(calzado =>{ res.render(path.resolve(__dirname, '../views/admin/detail'), {calzado,styles: ["master.css"], title})
                } )
                
     
    },
    /* Por Get  */
    edit: function (req, res) {
        Product
        .findByPk(req.params.id)
        .then(calzado =>{ res.render(path.resolve(__dirname, '../views/admin/edit'), {calzado,styles: ["master.css", "detail.css"], title})
                } )
              

    },
    
    /* Por post */
    update: (req,res) => {
        res.send('Got a PUT request at /user')
        const _body=req.body;
               
        _body.title=req.body.title;
        _body.descripcion=req.body.descripcion;
        _body.precio=req.body.precio;
        _body.descuento=req.body.descuento;
        _body.fotoId=req.file ? req.file.filename : req.body.oldImagen;
        Product
        .update(_body ,{where: { 
                            id: req.params.id

        }})
        .then(calzado => { res.redirect('/administrar')})
        .catch(error => res.send(error))
            
        },
    destroy: (req,res) =>{
        Product
        .destroy({
                where: {
                    id:req.params.id

                }, 
                force:true

        })
        .then(confirm => {
                res.redirect('/administrar');
        })
        
    },

    search: (req,res) =>{
        Product.findAll({
                    where:{
                        name: {[Op.like]: `%${req.query.buscar}%`}
                    }
        })
        .then(resultado => { res.render(path.resolve(__dirname,"..","views","admin","administrar"),{calzados:resultado})})
        .catch(error=> res.send(error))      
         
        }
        
}




/*
codigo de dani
const path = require('path');
const fs = require('fs');

//requerir su Base  de Datos.
const db = require('../database/models/');
//Aqui hacen esto para lograr activa los operadores en sus querys (like - count - max) 
const Op = db.Sequelize.Op;


const Dish = db.Dish;

module.exports = {
    index : (req,res) =>{
        Dish
        .findAll()
        .then(platos =>{
            res.render(path.resolve(__dirname , '..','views','admin','index') , {platos});
        })           
        .catch(error => res.send(error))
    },
    create: (req,res) =>{
        res.render(path.resolve(__dirname, '..','views','admin','create'));
    },
    save: (req,res) =>{
        const _body = req.body;
        //return res.send(_body);
        _body.name = req.body.nombre,
        _body.description = req.body.descripcion,
        _body.price =  req.body.precio,
        _body.discount = req.body.descuento,
        _body.image = req.file ? req.file.filename : ''    // if ternario       

        Dish
        .create(_body)
        .then(plato =>{
            res.redirect('/administrar');
        })  
        
    },
    show: (req,res) => {
        Dish
        .findByPk(req.params.id)
        .then(platoComida =>{
            res.render(path.resolve(__dirname, '..','views','admin','detail'), {platoComida });
        })
    },
    destroy: (req,res) => {
        Dish
        .destroy({
            where : {
               id:  req.params.id
            },
            force : true 
        })
        .then(confirm =>{
            res.redirect('/administrar');
        })
    },
    edit: (req,res) => {
        Dish
        .findByPk(req.params.id)
        .then(platoComida =>{
            res.render(path.resolve(__dirname, '..','views','admin','edit'), {platoComida });
        })

    },
    update: (req,res) =>{
        const _body = req.body;
        //return res.send(_body);
        _body.name = req.body.nombre,
        _body.description = req.body.descripcion,
        _body.price =  req.body.precio,
        _body.discount = req.body.descuento,
        _body.image = req.file ? req.file.filename : req.body.oldImagen    // if ternario       

        Dish
        .update(_body ,{
            where : {
                id : req.params.id
            }
        })
        .then(plato =>{
            res.redirect('/administrar')
        })
        .catch(error => res.send(error));     //error de Base de Datos
    },
    search: ( req, res) =>{
        Dish.findAll({
            where:{
                name: {[Op.like]: `%${req.query.buscar}%`}
            }
        })
        .then(resultado => { res.render(path.resolve(__dirname, '..', 'views', 'admin', 'index'),{platos: resultado});})
        .catch(error => res.send(error))
    }

}
 */