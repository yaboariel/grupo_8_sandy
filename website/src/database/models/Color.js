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
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const Color = sequelize.define(alias, cols, config); 

    Color.associate = function (models) {
        Color.belongsToMany(models.Product, { 
            as: "products",
            through: 'prod_color',
            foreignKey: 'colorId',
            otherKey: 'prodId',
            timestamps: false
        })  
        
    }
    

    return Color
};