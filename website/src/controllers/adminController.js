const path = require('path');
const fs = require('fs');
const DB = require(path.resolve(__dirname,"..","database","models"));
const Op = DB.Sequelize.Op;
const Product= DB.Product;
const title= "Sandy | ADMIN";
/*const productDB = require(path.resolve(__dirname,"..","database","models","product"));*/

module.exports = {
    index: (req,res) => {
        Product
        .findAll()
        .then(productos => {
              res.render(path.resolve(__dirname, '../views/admin/administrar'),{productos, styles: ["master.css", "detail.css"], title});
        })
        .catch(error => res.send(error))
    },
    /*Por get */
    create: (req,res) =>{
        Product
        .findAll()
        .then(productos => {
              res.render(path.resolve(__dirname, '../views/admin/create'),{productos, styles: ["master.css", "detail.css"], title});
        })
        .catch(error => res.send(error))   
        
    },
    /* Por post */
    save: (req,res) => {
         
        const _body= req.body;
        
        
        _body.nombre = req.body.nombre,
        _body.descripcion =req.body.descripcion,
        _body.precio= req.body.precio,
        _body.descuento=req.body.descuento,
        _body.filename= req.file ? req.file.filename : ""

        Product 
        .create(_body)
        .then(producto => res.redirect('/administrar') );
      
         },

    show: (req,res) => {
        Product
        .findByPk(req.params.id)
        .then(calzado =>{ res.render(path.resolve(__dirname, '../views/admin/detail'), {calzado,styles: ["master.css", "detail.css"], title})
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
module.exports = {
    index: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        res.render(path.resolve(__dirname, '../views/admin/administrar'), {motos});
    },
    create: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        res.render(path.resolve(__dirname, '../views/admin/create'));
    },
    save: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        let ultimaMoto = motos.pop();
        motos.push(ultimaMoto);
        console.log();
        let nuevoProducto = {
            id: ultimaMoto.id +1,
            nombre : req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename
        }

        motos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(motos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'), nuevoProductoGuardar);
        res.redirect('/administrar');
    },
    show: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        let miMoto;
        motos.forEach(moto => {
            if(moto.id == req.params.id){
                miMoto = moto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/detail'), {miMoto})

    },
    edit: (req,res)=>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        const modoId = req.params.id;
        let motoEditar = motos.find(moto=> moto.id == modoId);
        res.render(path.resolve(__dirname,'../views/admin/edit'), {motoEditar});
    },
    update: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let motosUpdate = motos.map(moto =>{
            if(moto.id == req.body.id){
                return moto = req.body;
            }
            return moto;
        })
        let motoActualizar = JSON.stringify(motosUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'),motoActualizar)
        res.redirect('/administrar');
    },
    destroy: (req,res) =>{
        let motos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/motos.json')));
        const motoDeleteId = req.params.id;
        const motosFinal = motos.filter(moto => moto.id != motoDeleteId);
        let motosGuardar = JSON.stringify(motosFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/motos.json'),motosGuardar);
        res.redirect('/administrar');
    }








} */