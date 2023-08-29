module.exports = (sequelize, DataTypes) => {
    const VariantType = sequelize.define('VariantType', {
        TypeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: DataTypes.STRING // 'scent', 'size', 'color' 등의 유형
    });   

    return VariantType;
}