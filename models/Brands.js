module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        BrandID: {
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
        Image: {
            //q: 이미지는 어떻게 저장할 것인가?
            //a: 이미지는 서버에 저장하고, 이미지의 경로를 저장한다.
            type: DataTypes.STRING
        },
        Contry: {
            type: DataTypes.STRING
        },
        Description: {
            type: DataTypes.TEXT
        }
    },
    {
        tableName: 'Brand',
    });
    return Brand;
}