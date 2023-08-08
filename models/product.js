//product model
module.exports = (sequelize, DataTypes) => {
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
    });

    Product.associate = db => {
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