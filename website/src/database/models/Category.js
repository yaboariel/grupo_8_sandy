module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: dataTypes.STRING,
    };

    let config = {
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: false
    }

    const Category = sequelize.define(alias, cols, config) 
    //Aquí creo la relación con la tabla productos  - OJo: Relación de 1 a muchos
    Category.associate = function(models){
        Category.hasMany(models.Product,{
                as: 'products',
                foreignKey: 'categoryId'})}   
    return Category
}