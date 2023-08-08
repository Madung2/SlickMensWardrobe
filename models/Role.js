module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        RoleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        Name: {
        type: DataTypes.STRING,
        allowNull: false
        },
        Permissions: {
        type: DataTypes.TEXT
        }
    });
    return Role;
};