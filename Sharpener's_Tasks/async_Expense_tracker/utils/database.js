const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenseTracker', 'root', 'Qwerty@2022', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports = sequelize;