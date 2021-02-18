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
        let filePath = path.resolve(__dirname,"../products.json");
        let dataJSON = JSON.stringify(data,null,4);
        fs.writeFileSync(filePath,dataJSON);
    }
}