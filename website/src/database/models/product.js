module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
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
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(100),
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
        
        Product.belongsTo(models.Brand, { 
            as: "brand",
            foreignKey: "brandId"
        });        
        Product.belongsTo(models.Material, { 
            as: "material",
            foreignKey: "materialId"
        });
             

        Product.belongsTo(models.Category, { 
            as: "category",
            foreignKey: "categoryId"
        }) ; 
       /* Product.belongsTo(models.Foto, { // models.Genre -> Genres es el valor de alias en genres.js
            as: "foto",
            foreignKey: "fotoId"
        })  ;*/
        Product.belongsToMany(models.Color, { 
            as: "colors",
            through: 'prod_color',
            foreignKey: 'prodId',
            otherKey: 'colorId',
            timestamps: false
        })  ;
        
        
        Product.belongsToMany(models.Size, { 
            as: "sizesrel",
            through: 'ProdSize',
            foreignKey: 'prodId',
            otherKey: 'sizeId',
            timestamps: false
        })
        
        Product.belongsToMany(models.Cart, { 
            as: "carts",
            through: 'ProdCart',
            foreignKey: 'prodId',
            otherKey: 'cartId',
            timestamps: false
        })  
        



    }

    return Product
};