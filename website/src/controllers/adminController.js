const path = require('path');
const fs = require('fs');


const productDB = require(path.resolve(__dirname,"..","database","models","product"));

module.exports = {
    index: (req,res) => {
        return res.render(path.resolve(__dirname, '../views/admin/administrar'),{productos:productDB.all(), styles: ["master.css", "detail.css"], title: "Sandy | ADMIN"});
    },
    /*Por get */
    create: (req,res) =>{
        let productos=productDB.all();
        res.render(path.resolve(__dirname, '../views/admin/create'),{productos, styles: ["master.css", "detail.css"], title: "Sandy | Create"});
    },
    /* Por post */
    save: (req,res) => {
        productDB.write(req.body);
       
        res.redirect('../views/admin/administrar');

/*
        return res.render(path.resolve(__dirname, '../views/admin/'),{styles: ["master.css", "createProduct.css"], title: "Sandy | Agregar Producto"});*/
    },

    show: (req,res) => {
                res.render(path.resolve(__dirname, '../views/admin/detail'), {calzado:productDB.one(req.params.id),styles: ["master.css", "detail.css"], title: "Sandy | Detalle"})
     
    },
    /* Por Get  */
    edit: function (req, res) {
    let productoaEditar = productDB.one(req.params.id);

    return res.render(path.resolve(__dirname, '../views/admin/edit'), { productoaEditar, styles: ["master.css", "editProduct.css"], title: "Sandy | Edit" });
    },
    
    /* Por post */
    update: (req,res) => {
        let todos=productDB.all();
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let productUpdate = todos.map(uno =>{
            if(uno.id == req.body.id){
                return uno = req.body;
            }
            return uno;
        })
        let productActualizar = JSON.stringify(productUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'),productActualizar);
        res.redirect('../views/admin/administrar');
    },
    destroy: (req,res) =>{
        let todos=productDB.all();

        const productoDeleteId = req.params.id;
        const productosFinal = todos.filter(uno => uno.id != productoDeleteId);
        let productosGuardar = JSON.stringify(productosFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/motos.json'),productosGuardar);
        res.redirect('../views/admin/administrar');
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