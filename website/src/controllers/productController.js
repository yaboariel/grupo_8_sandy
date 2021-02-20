const path = require('path');
const productDB = require(path.resolve(__dirname,"..","database","models","product"));

module.exports = {
    show: (req,res) => {
        return res.render(path.resolve(__dirname, '../views/product/detail'),{styles: ["master.css", "detail.css"], title: "Sandy | Detalle"});
    }
}