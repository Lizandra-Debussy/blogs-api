const Joi = require('joi');
const jwtUtil = require('../utils/jwt.utils');

const { User } = require('../models');

const validateBody = (params) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(params);
  
  if (error) return { type: 400, message: 'Some required fields are missing' };

  return value;
};

const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    // return { type: 400, message: 'Invalid fields' };
    return null;
  }
  
  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);

  return token;
};

const validateToken = async (token) => {
  if (!token) return { error: 'Token not found' };
  
  const user = await jwtUtil.validateToken(token);
  return user;
};

module.exports = { validateBody, validateLogin, validateToken };