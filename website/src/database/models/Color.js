/**hay que trabajar sobre esta tabla para relacionar con prod-size */


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
         /*esto hay que cambiarlo con lo que mando edu */
        Color.belongsTo(models.Product, { 
            as: "products",
            through: 'ProdColor',
            foreignKey: 'colorId',
            otherKey: 'prodId',
            timestamps: false
        })  
        
    }
    

    return Color
};