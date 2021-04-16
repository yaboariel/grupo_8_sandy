let alias = 'Cart';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        prod_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        qty: {
            dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        talle_id: {
            dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        user_id: {
            dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Cart = sequelize.define(alias, cols, config); 

        Cart.associate = function(models) {
            Cart.hasMany(models.Product, { // models.Carts -> Movie es el valor de alias en movie.js
                as: "products", // El nombre del modelo pero en plural
                foreignKey: "product_id"
            })
            Cart.belongsTo(models.User, { // models.Genre -> Genres es el valor de alias en genres.js
                as: "users",
                foreignKey: "user_id"
            })
            Cart.hasMany(models.Size, { // models.Movies -> Movie es el valor de alias en movie.js
                as: "sizes", // El nombre del modelo pero en plural
                foreignKey: "size_id"
            })
    
    
        }



    return Cart
};