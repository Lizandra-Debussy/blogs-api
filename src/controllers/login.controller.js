const loginService = require('../services/login.service');

const login = async (req, res) => {
  const { email, password, message } = await loginService.validateBody(req.body);

  if (message) return res.status(400).json({ message });

  const token = await loginService.validateLogin({ email, password });
  // console.log(token);
  if (token === null) return res.status(400).json({ message: 'Invalid fields' });
  
  return res.status(200).json({ token });
};

module.exports = {
  login,
};