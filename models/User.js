const bcrypt = require('bcrypt'); // 비밀번호 암호화를 위한 bcryptjs 모듈 불러오기
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
            unique: true,
            validate: {
                isEmail: true // 이메일 형식만 허용
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (!/^[0-9a-zA-Z!@#$%^&*]{8,30}$/.test(value)) {
                      throw new Error('Password must be 8 to 30 characters, containing only numbers, letters, and special characters.');
                    }
                }
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
        }
    });

    User.addHook('beforeCreate', async (user, options) => {
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(user.Password, salt);
      });
    
    User.addHook('beforeUpdate', async (user, options) => {
    if (user.changed('Password')) {
        const salt = await bcrypt.genSalt(10);
        user.Password = await bcrypt.hash(user.Password, salt);
    }
    });

    User.associate = db => {
        User.belongsTo(db.Role, {foreignKey: 'RoleID'});
    };

    return User;
};


