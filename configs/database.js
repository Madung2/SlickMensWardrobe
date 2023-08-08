// Description: Database configuration
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DIALECT } = process.env;
const { Sequelize } = require('sequelize');


const db_config = {
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false, // 쿼리문 출력 여부 (true: 출력, false: 미출력)
};

const sequelize = new Sequelize(db_config);

module.exports = sequelize;