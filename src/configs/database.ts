// Description: Database configuration
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });
console.log(path.join(__dirname, '../../.env'));

const getEnvVar = (key: string): string => {
    const value = process.env[key];
    if (typeof value === 'undefined') {
        throw new Error(`${key} environment variable is not defined.`);
    }
    return value;
};

const DB_NAME = getEnvVar('DB_NAME');
const DB_PORT = getEnvVar('DB_PORT');
const DB_HOST = getEnvVar('DB_HOST');
const DB_USER = getEnvVar('DB_USER');
const DB_PASSWORD = getEnvVar('DB_PASSWORD');
const DB_DIALECT = getEnvVar('DB_DIALECT');

import { Sequelize } from 'sequelize';

const db_config = {
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: DB_DIALECT as any,
  logging: false, // 쿼리문 출력 여부 (true: 출력, false: 미출력)
};

const sequelize = new Sequelize(db_config);

export default sequelize;