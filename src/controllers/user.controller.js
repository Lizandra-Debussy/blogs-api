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

module.exports = {
  createUser,
};