const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  const caracteres = 6;

  if (password.length < caracteres) {
  return res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = passwordValidate;