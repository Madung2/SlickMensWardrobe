module.exports = (sequelize, DataTypes) => {
    const Family   = sequelize.define('Family', {
    FamilyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        Name: DataTypes.STRING
    });
    return Family ;
}