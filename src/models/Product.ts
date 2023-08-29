//product model
module.exports = (sequelize:any, DataTypes:any) => {
    const Product = sequelize.define('Product', {
        ProductID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false
            
        },
        CategoryID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'Product',
    });

    Product.associate = (db: { User: any; Category: any; Variant: any; }) => {
        Product.belongsTo(db.User, {foreignKey: 'UserID'});
        Product.belongsTo(db.Category, {foreignKey: 'CategoryID'});
        Product.belongsToMany(db.Variant, {
            through: 'ProductVariant',
            as: 'Variant',
            foreignKey: 'ProductID',
            otherKey: 'VariantID'
        });
    };
    
    return Product;
};