const path = require("path");
const userDB = require(path.resolve(__dirname,"..","database","models","user"));
const productDB = require(path.resolve(__dirname,"..","database","models","product"));
module.exports = {
    login: (req,res) => {
        let styles = ["master.css","login.css"];
        let title = "Sandy | Ingresar";
        res.render("user/login",{styles,title})
    },
    register: (req,res) => {
        let styles = ["master.css","register.css"];
        let title = "Sandy | Registro";
        res.render("user/register",{styles,title})
    }
}