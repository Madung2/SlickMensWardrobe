// const { DataTypes } = require('sequelize');
// const sequelize = require('../configs/database'); // config 폴더의 database.js 불러오기


module.exports = (sequelize, DataTypes) => {

    
    const User = sequelize.define('User', {
        UserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[0-9a-zA-Z!@#$%^&*]{8,30}$/, // 8자에서 30자 사이의 숫자와 문자, 특수문자만 허용
                msg: 'Password must be 8 to 30 characters, containing only numbers, letters, and special characters.'
            }
        },
        Name: {
            type: DataTypes.STRING,
        },
        Address: {
            type: DataTypes.TEXT
        },
        DateOfBirth: {
            type: DataTypes.DATE
        },
        RoleID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 3,
            // references: {
            //     model: Role,
            //     key: 'RoleID'
            // }
        }
    });
    User.associate = db => {
        User.belongsTo(db.Role, {foreignKey: 'RoleID'});
    };

    return User;
};


