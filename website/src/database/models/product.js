const fs = require("fs");
const path = require("path");

module.exports = {
    all: () => {
        let filePath = path.resolve(__dirname,"../products.json");
        let dataFile = fs.readFileSync(filePath,"utf-8");
        return JSON.parse(dataFile);
    },
    one: (id) => {
        let filePath = path.resolve(__dirname,"../products.json");
        let dataFile = fs.readFileSync(filePath,"utf-8");
        let data = JSON.parse(dataFile);
        return data.find(e => e.id == id);
    },
    write: (data) => {
        let todos=this.all();
               
        let nuevoProducto = {
            id: this.generateId(),
            nombre : data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            descuento: data.descuento,
            imagen: data.filename
        }

        todos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(todos,null,4);
        fs.writeFileSync(path.resolve(__dirname,'../database/motos.json'), nuevoProductoGuardar);

        /*
        let dataJSON = JSON.stringify(data,null,4);
        fs.writeFileSync(filePath,dataJSON);*/
    },

    generateId: () => {
       let productos =this.all();
       let lastuser=productos.pop(); 
       if (lastuser) {return productos.id+1}
       else
       return 1
/* generar ids con contador de 1  */

    },
    searchByField :  (field,text ) => {
        let filePath = path.resolve(__dirname,"../products.json");
        let dataFile = fs.readFileSync(filePath,"utf-8");
        let data = JSON.parse(dataFile);
        return data.filter(e => e[field] === text);


    }

}