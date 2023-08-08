//Size and Color Scent

module.exports = (sequelize, DataTypes) => {
    const Variant = sequelize.define('Variant', {
        VariantID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Value: DataTypes.STRING,
        ValueKor : DataTypes.STRING,
        TypeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    Variant.associate = db => {
        Variant.belongsTo(db.VariantType, { foreignKey: 'TypeID' })
    };

    return Variant;
}