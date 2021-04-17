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
        color_id: {
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
        Product.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "movies",
            through: 'Product_movie',
            foreignKey: 'Product_id',
            otherKey: 'movie_id',
            timestamps: false
        })



    }

    return Product
};