const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("sqlite:./bd/banco.sqlite");

module.exports = sequelize;