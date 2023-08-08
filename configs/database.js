// Description: Database configuration
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
// const Sequelize = require('sequelize');
const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DIALECT } = process.env;


// const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
//   host: DB_HOST,
//   port: DB_PORT,
//   dialect: DB_DIALECT // postgres에 연결한다는 뜻
// });


// sequelize.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch(err => console.log('Error: ' + err))

module.exports = {
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
};