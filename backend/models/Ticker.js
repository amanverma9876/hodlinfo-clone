const { DataTypes } = require('sequelize');
const sequelize = require('../../database.js');

const Ticker = sequelize.define('Ticker', {
  name: DataTypes.STRING,
  last: DataTypes.STRING,
  buy: DataTypes.STRING,
  sell: DataTypes.STRING,
  volume: DataTypes.STRING,
  base_unit: DataTypes.STRING,
});

module.exports = Ticker;
