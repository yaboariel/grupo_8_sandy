module.exports = (sequelize, dataTypes) => {
    let alias = 'Brand';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const Brand = sequelize.define(alias, cols, config); 

    Brand.associate = function (models) {
         
            Brand.hasMany(models.Product, { // models.Movies -> Movie es el valor de alias en movie.js
                as: "products", // El nombre del modelo pero en plural
                foreignKey: "brandId"
            })
        
    }
    

    return Brand
};