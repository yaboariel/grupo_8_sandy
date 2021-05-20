module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
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
        otherKey: 'productId',
        timestamps: false
    })  

}
    

    return Size
};