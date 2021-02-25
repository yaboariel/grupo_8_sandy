const path = require('path');
const productDB = require(path.resolve(__dirname,"..","database","models","product"));

module.exports = {
    show: (req,res) => {
        return res.render(path.resolve(__dirname, '../views/product/detail'),{styles: ["master.css", "detail.css"], title: "Sandy | Detalle"});
    },
    edit: (req,res) => {
        return res.render(path.resolve(__dirname, '../views/product/editProduct'),{styles: ["master.css", "editProduct.css"], title: "Sandy | Detalle"});
    },
    save: (req,res) => {
        return res.render(path.resolve(__dirname, '../views/product/createProduct'),{styles: ["master.css", "createProduct.css"], title: "Sandy | Detalle"});
    }
}