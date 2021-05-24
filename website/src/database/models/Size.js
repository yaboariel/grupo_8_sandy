module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
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
    const Size = sequelize.define(alias, cols, config); 

    Size.associate = function (models) {

    
        
    Size.belongsToMany(models.Product, { 
        as: "products",
        through: 'ProdSize',
        foreignKey: 'sizeId',
        otherKey: 'prodId',
        timestamps: false
    })

}
    

    return Size
};