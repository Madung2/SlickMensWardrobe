module.exports = (sequelize:any, DataTypes:any) => {
    const Accord = sequelize.define('Accord', {
        AccordID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Kor: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: 'Accord',
    });
    return Accord;
}