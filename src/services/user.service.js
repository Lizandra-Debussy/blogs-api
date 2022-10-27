const { User } = require('../models');

const findByEmail = async (email) => {
  const verifyEmail = await User.findOne({ where: { email } });
  return verifyEmail;
};

const createUser = async (content) => {
 await User.create(content);
};

module.exports = {
  createUser,
  findByEmail,
};