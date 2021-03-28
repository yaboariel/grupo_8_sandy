const fs = require("fs");
const path = require("path");

const product= module.exports = {
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
     write: (data,filename) => {
        const todos=product.all();
        let nuevoProducto = {
            id: product.generateId(),
            nombre : data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            descuento: data.descuento,
            foto: filename
        }
      
        todos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(todos,null,4);
        fs.writeFileSync(path.resolve(__dirname,'../products.json'), nuevoProductoGuardar);

        /*
        let dataJSON = JSON.stringify(data,null,4);
        fs.writeFileSync(filePath,dataJSON);*/
    },

     generateId: () => {
       let productos =product.all();
       console.log("hola estoy en generateid")
       
       let lastuser=productos.pop(); 
       if (lastuser) {
        console.log()   
        return lastuser.id+1
        }
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