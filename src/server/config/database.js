const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DB_NAME, 'postgres', process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres' 
});

module.exports = db