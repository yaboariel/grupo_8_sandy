module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        title: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        model: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        brandId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        materialId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        fotoId: {
            type: dataTypes.BIGINT(30).UNSIGNED,
            allowNull: false
        },
        descuento: {
            type: dataTypes.SMALLINT(3).UNSIGNED,
            allowNull: false
        },
        destacado: {
            type: dataTypes.TINYINT(1).UNSIGNED,
            allowNull: false
        },
        genero: {
            type: dataTypes.TINYINT(1),
            allowNull: false
        },
        adulto: {
            type: dataTypes.TINYINT(1),
            allowNull: false
        }
        
        
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        
        Product.belongsTo(models.Brand, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "brand",
            foreignKey: "brandId"
        });        
        Product.belongsTo(models.Material, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "material",
            foreignKey: "materialId"
        });
             

        Product.belongsTo(models.Category, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category",
            foreignKey: "categoryId"
        }) ; 
        Product.belongsTo(models.Foto, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "foto",
            foreignKey: "fotoId"
        })  ;
        Product.belongsToMany(models.Product, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "colors",
            through: 'Prod_color',
            foreignKey: 'productId',
            otherKey: 'colorId',
            timestamps: false
        })  ;
        Product.belongsToMany(models.Size, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "sizes",
            through: 'ProdSize',
            foreignKey: 'productId',
            otherKey: 'sizeId',
            timestamps: false
        })  ;
        Product.belongsToMany(models.Cart, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "carts",
            through: 'ProdCart',
            foreignKey: 'productId',
            otherKey: 'cartId',
            timestamps: false
        })  
        



    }

    return Product
};