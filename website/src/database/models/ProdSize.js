module.exports= (sequelize, dataTypes) => {
let alias = 'ProdSize';
let cols = {/*
    id: {
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    prodId: {
    	type: dataTypes.INTEGER,
    	
    },
    sizeId: {
    	type: dataTypes.INTEGER,
    	
    },
    colorId: {
        type: dataTypes.INTEGER,
    	
    },*/
    stock: {
            type: dataTypes.BIGINT(10),
            
        },
    price: {
            type: dataTypes.BIGINT(10),
            
        }    

        };

let config = {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: false
}
const ProdSize = sequelize.define(alias, cols, config); 



ProdSize.associate = function (models) {

        ProdSize.belongsTo(models.Product, { 
        foreignKey: "prodId"
       });      
       ProdSize.belongsTo(models.Color, { 
        as:"colorrel",   
        foreignKey: "colorId"
       }); 
       ProdSize.belongsTo(models.Size, { 
        as:"sizerel",
        foreignKey: "sizeId"
       }); 
  
}
return ProdSize;



};

