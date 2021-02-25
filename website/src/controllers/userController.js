const path = require("path");
const userDB = require(path.resolve(__dirname,"..","database","models","user"));
const productDB = require(path.resolve(__dirname,"..","database","models","product"));
module.exports = {
    login: (req,res) => {
        let stylesss = ["master.css","login-style.css"];
        let title = "Sandy | Ingresar";
        return res.render(path.resolve(__dirname, '../views/user/login'),{styles:["master.css","login-style.css"],title})
    },
    register: (req,res) => {
        let styles = ["master.css","register-style.css"];
        let title = "Sandy | Registro";
        return res.render(path.resolve(__dirname, '../views/user/register'),{styles,title})
    }
}