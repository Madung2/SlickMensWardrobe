module.exports = (sequelize:any, DataTypes:any) => {
    const SubCategory  = sequelize.define('SubCategory', {
        SubCategoryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CategoryID: DataTypes.INTEGER,
        Name: DataTypes.STRING,
        Description: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: 'SubCategory',
    });
    // SubCategory.belongsTo(Category, { foreignKey: 'CategoryID' });
    return SubCategory;
}