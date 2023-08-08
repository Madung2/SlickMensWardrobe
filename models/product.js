module.exports = (sequelize, DataTypes) => {
   const Product = sequelize.define('Product', {
      ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Seller: DataTypes.STRING,
      Name: DataTypes.STRING,
      Description: DataTypes.TEXT,
      BasePrice: DataTypes.DECIMAL(10, 0),
      CategoryID: { 
         type:DataTypes.INTEGER,
         allowNull: false
      },
      SubCategoryID: DataTypes.INTEGER,
      FamilyID: DataTypes.INTEGER,
      // VariantID: DataTypes.INTEGER,
      Stock: DataTypes.INTEGER
   });
   
   Product.associate = db => {
      Product.belongsTo(db.User, {foreignKey: 'UserID'});
      Product.belongsTo(db.Category, {foreignKey: 'CategoryID'});
      Product.belongsToMany(db.Variant, {
         through: 'ProductVariant',
         as: 'variants',
         foreignKey: 'ProductID',
         otherKey: 'VariantID'
      });
      // Product.belongsTo(db.SubCategory, {foreignKey: 'SubCategoryID'});
      // Product.belongsTo(db.Family, {foreignKey: 'FamilyID'});
      // Product.belongsTo(db.Variant, {foreignKey: 'VariantID'});
   };
   return Product;
};