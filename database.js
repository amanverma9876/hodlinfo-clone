const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('hodlinfo', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
