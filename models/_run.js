const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../configs/database');
const db = {};




// 하나씩 models에 있는 파일을 읽어서 db에 넣어준다.
fs.readdirSync(__dirname)
    .filter((file) => file !== '_run.js')
    .forEach((file) => {
        try{
            let model =require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
            db[model.name] = model;
        } catch(err){
            console.log('Error File=>', file)
            console.error('Error=>', err);
        }
    }
);

// db 객체에 있는 모델들의 associate 함수를 실행한다.
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    } 
});

console.log('DB all=>', db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;