/*Home page----------------------------- */


const path = require('path');
const fs = require('fs');

/*const productDB = require(path.resolve(__dirname,"..","database","models","product"));
const products= productDB.all(); 
const result = products.filter(product => product.destacado==true);*/
const {Product, Category} = require('../database/models/');
module.exports = {
    

    index: function(req,res){
        Product
        .findAll()
        .then(product =>{
            //return res.send(platos)
            res.render(path.resolve(__dirname, '..','views','web','home'), {products: product, styles:["master.css"], title:"Sandy"});
        })           
        .catch(error => res.send(error))
    },
    nosotros: function(req,res){
       
        res.render(path.resolve(__dirname, '../views/web/nosotros'),{styles:["master.css"], title:"Sandy- About"});
    }
}    
    /*
    version anterior
    index : (req,res) =>{

        return res.render(path.resolve(__dirname, '../views/web/home'),{products:result, styles:["master.css","home.css"], title:"Sandy titulo"});
    },

    cart : (req,res) =>{
        return res.render(path.resolve(__dirname, '../views/web/cart'),{styles: ["master.css", "cart.css", "detail.css"], title: "Sandy | Carrito"});
    }
    */
    /*about : (req,res) =>{
        return res.render('about');
    },
    detalleMenu : (req,res) =>{
        return res.render('detalleMenu',{menues: menues,nummenu : req.params.id});
    }*/

    /*poner los directorios correctamente */

    /*const path = require('path');
    let miFamilia = ['Gloria','Indira','Victor','Luis','Zulay','Yelena','Henry','Yuraima'];
    
    module.exports = {
        index : (req,res) =>{
            return res.render(path.resolve(__dirname, '../views/web/home'),{titulo: 'Portafolio de Cristian', miFamilia});
        },
        about : (req,res) =>{
            return res.render(path.resolve(__dirname, '../views/web/about'), {titulo: 'About de Cristian'});
        } 
    
    
    }
*/
    



/*
codigo de dani

const path = require('path');
const fs = require('fs');

//let platos  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/platos.json')));
const {Dish, Category} = require('../database/models/');

const webController = {
    index: function(req,res){
        Dish
        .findAll()
        .then(platos =>{
            //return res.send(platos)
            res.render(path.resolve(__dirname, '..','views','web','index'), {platos: platos});
        })           
        .catch(error => res.send(error))
    },
    nosotros: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/nosotros.html'));
        res.render(path.resolve(__dirname, '../views/web/nosotros'));
    }

}
module.exports = webController;


*/