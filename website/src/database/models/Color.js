module.exports = (sequelize, dataTypes) => {
    let alias = 'Color';
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
    const Color = sequelize.define(alias, cols, config); 

    Color.associate = function (models) {
         
        Color.belongsToMany(models.Product, { // models.Actor -> Actors es el valor de alias en actor.js
            as: "products",
            through: 'Prod_color',
            foreignKey: 'color_id',
            otherKey: 'prod_id',
            timestamps: false
        })  
        
    }
    

    return Color
};