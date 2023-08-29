module.exports = (sequelize, DataTypes) => {
    const Perfume = sequelize.define('Perfume', {
        PerfumeID: {
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
        tableName: 'Perfume',
    });
    return Perfume;
}