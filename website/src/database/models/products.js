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
        brand_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        material_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        foto_id: {
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
        },
        Product_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        
        Product.belongsTo(models.Brand, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "brand",
            foreignKey: "brand_id"
        })        
        Product.belongsTo(models.Material, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "material",
            foreignKey: "material_id"
        })  
        Product.belongsTo(models.Category, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "category",
            foreignKey: "category_id"
        })  
        Product.belongsTo(models.Foto, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "foto",
            foreignKey: "foto_id"
        })  
        Product.belongsToMany(models.Product, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "colors",
            through: 'Prod_color',
            foreignKey: 'product_id',
            otherKey: 'color_id',
            timestamps: false
        })  
        Product.belongsToMany(models.Size, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "sizes",
            through: 'Prod_size',
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestamps: false
        })  
        Product.belongsToMany(models.Cart, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "carts",
            through: 'Prod_cart',
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestamps: false
        })  
        



    }

    return Product
};