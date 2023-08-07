const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
   host: 'localhost',
   dialect: 'postgres'
});

module.exports = sequelize;

sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

module.exports = sequelize;