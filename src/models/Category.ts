module.exports = (sequelize: any, DataTypes:any) => {
    const Category = sequelize.define('Category', {
        CategoryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Description: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: 'Category',
    });
    return Category;
}