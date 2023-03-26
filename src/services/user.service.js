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

const getById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: 'password' } });
  
  if (user) return { type: null, message: user };
  return { type: 'USER_DOES_NOT_EXIST', message: 'User does not exist' };
};

const deleteUser = async (id) => {
  const result = await User.destroy({ where: { id } });
  return result > 0;
};

module.exports = {
  createUser,
  findByEmail,
  listUsers,
  getById,
  deleteUser,
};