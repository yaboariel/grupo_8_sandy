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
        tableName: 'categories',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config) 
    //Aquí creo la relación con la tabla productos  - OJo: Relación de 1 a muchos
    Category.associate = function(models){
        Category.belongsTo(models.Product,{
                as: 'products',
                foreignKey: 'categoryId'})}   
    return Category
}


