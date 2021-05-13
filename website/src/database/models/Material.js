module.exports = (sequelize, dataTypes) => {
    let alias = 'Material';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Material = sequelize.define(alias, cols, config); 

    Material.associate = function (models) {
         
            Material.hasMany(models.Product, { // models.Movies -> Movie es el valor de alias en movie.js
                as: "products", // El nombre del modelo pero en plural
                foreignKey: "MaterialId"
            })
        
    }
    

    return Material
};