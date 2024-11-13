const { DataTypes } = require('sequelize');
const sequelize = require('../bd/bd');

const Product = sequelize.define('Products', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  
});

module.exports = Product;
