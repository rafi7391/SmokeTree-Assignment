const sequelize = require('../config/database');
const User = require('./user');
const Address = require('./address');

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced!');
};

module.exports = { initDb, User, Address };
