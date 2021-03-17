const path = require('path');
const productDB = require(path.resolve(__dirname,"..","database","models","product"));
const products= productDB.all(); 
const result = products.filter(product => product.destacado==true);

module.exports = {
    index : (req,res) =>{

        return res.render(path.resolve(__dirname, '../views/web/home'),{products:result, styles:["master.css","home.css"], title:"Sandy titulo"});
    },
    
   
    
    cart : (req,res) =>{
        return res.render(path.resolve(__dirname, '../views/web/cart'),{styles: ["master.css", "cart.css", "detail.css"], title: "Sandy | Carrito"});
    }

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
    
}