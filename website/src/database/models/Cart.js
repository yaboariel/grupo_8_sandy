module.exports = (sequelize, dataTypes) => {

let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        prodId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        qty: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        talleId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        userId: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const Cart = sequelize.define(alias, cols, config); 

        Cart.associate = function(models) {
            Cart.belongsToMany(models.Product, { // models.Actor -> Actors es el valor de alias en actor.js
                as: "products",
                through: 'Prod_cart',
                foreignKey: 'cartId',
                otherKey: 'prodId',
                timestamps: false
            })  
            Cart.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
                as: "users",
                foreignKey: "userId"
            })
            /*Cart.hasMany(models.Size, { // models.Movies -> Movie es el valor de alias en movie.js
                as: "sizes", // El nombre del modelo pero en plural
                foreignKey: "sizeId"
            })*/
    
    
        }



    return Cart
};