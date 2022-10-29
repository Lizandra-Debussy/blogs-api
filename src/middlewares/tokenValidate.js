const loginService = require('../services/login.service');

const tokenValidate = async (req, res, next) => {
  const { authorization } = req.headers;
  const { error } = await loginService.validateToken(authorization);
  // console.log(error);
  if (error) return res.status(401).json({ message: error });
  next();
};

module.exports = tokenValidate;