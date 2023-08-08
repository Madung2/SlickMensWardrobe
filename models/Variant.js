//Size and Color Scent

module.exports = (sequelize, DataTypes) => {
    const Variant    = sequelize.define('Variant ', {
        VariantID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Value: DataTypes.STRING,
        TypeID: {
            type: DataTypes.INTEGER,
            // references: {
            //     model: VariantType,
            //     key: 'TypeID'
            // }
        }
    });
    Variant.associate = db => {
        // Variant.hasMany(db.Scent, { foreignKey: 'VariantID' });
        Variant.belongsTo(db.VariantType, { foreignKey: 'TypeID' })
    };

    return Variant;
}