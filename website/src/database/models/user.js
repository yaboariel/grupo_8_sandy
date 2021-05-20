module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        username: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        role: {
            type: dataTypes.TINYINT(1).UNSIGNED,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        cartId: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        }
        
        
    };
    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }
    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.hasMany(models.Cart, { // models.Movies -> Movie es el valor de alias en movie.js
            as: "carts", // El nombre del modelo pero en plural
            foreignKey: "cartId"
        })
    }

    return User
};