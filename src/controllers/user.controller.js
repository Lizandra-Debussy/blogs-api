const userService = require('../services/user.service');
const { createToken } = require('../utils/jwt.utils');

const createUser = async (req, res) => {
  const content = req.body;
  const checkEmail = await userService.findByEmail(content.email);
  if (checkEmail) return res.status(409).json({ message: 'User already registered' });

  const newUser = await userService.createUser(content);
  const message = createToken(newUser);
  return res.status(201).json({ token: message });
};

const listUsers = async (_req, res) => {
  const users = await userService.listUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await userService.getById(id);

  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const deleteUser = async (req, res) => {
  const { email } = req.user;

  const getId = await userService.findByEmail(email);
  const userId = getId.dataValues.id;

  const deleteUserId = await userService.deleteUser(userId);
  if (deleteUserId) return res.status(204).json();
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  deleteUser,
};