module.exports = (sequelize:any, DataTypes:any) => {
    const VariantType = sequelize.define('VariantType', {
        TypeID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING, // 'scent', 'size', 'color' 등의 유형
            allowNull:false,
        },
        Kor: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'VariantType',
    });   

    return VariantType;
}