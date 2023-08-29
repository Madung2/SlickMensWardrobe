module.exports = (sequelize: any, DataTypes:any) => {
    const Family   = sequelize.define('Family', {
    FamilyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        Name: DataTypes.STRING
    },
    {
        tableName: 'Family',
    });
    return Family ;
}