import fs from 'fs';
import path from 'path';
import { Sequelize, Model, DataTypes, ModelStatic } from 'sequelize';
import sequelizeConfig from '../configs/database';

const sequelize = sequelizeConfig as Sequelize;

interface DB {
    [key: string]: ModelStatic<Model> | typeof Sequelize | Sequelize; // Sequelize 인스턴스 타입을 추가
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
}

interface ModelInstance extends ModelStatic<Model> {
    associate?: (db: DB) => void;
}

const db: DB = {
    sequelize,
    Sequelize
};

fs.readdirSync(__dirname)
    .filter((file: string) => file !== '_run.js')
    .forEach((file: string) => {
        try {
            const model = require(path.join(__dirname, file))(sequelize, DataTypes) as ModelStatic<Model>;
            db[model.name] = model;
        } catch (err) {
            console.log('Error File=>', file);
            console.error('Error=>', err);
        }
    });

Object.keys(db).forEach((modelName: string) => {
    const modelInstance = db[modelName] as ModelInstance;
    if (modelInstance.associate) {
        modelInstance.associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
