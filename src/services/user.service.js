const { User } = require('../models');

const findByEmail = async (email) => {
  const verifyEmail = await User.findOne({ where: { email } });
  return verifyEmail;
};

const createUser = async (content) => {
 await User.create(content);
};

const listUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

module.exports = {
  createUser,
  findByEmail,
  listUsers,
};