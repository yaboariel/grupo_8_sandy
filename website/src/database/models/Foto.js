module.exports = (sequelize, dataTypes) => {
    let alias = 'Foto';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        filename: {
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
    const Foto = sequelize.define(alias, cols, config); 

    Foto.associate = function (models) {
            Foto.belongsTo(models.Product, { // models.Genre -> Genres es el valor de alias en genres.js
                as: "product",
                foreignKey: "productId"
            })
            
        
    }
    

    return Foto
};