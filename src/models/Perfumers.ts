module.exports = (sequelize:any, DataTypes:any) => {
    const Perfumer = sequelize.define('Perfumer', {
        PerfumerID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Contry: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: 'Perfumer',
    });
    return Perfumer;
}