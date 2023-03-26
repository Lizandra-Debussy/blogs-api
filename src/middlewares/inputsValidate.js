const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const re = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
  
  if (!re.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

const nameValidate = (req, res, next) => {
  const { displayName } = req.body;
  const caracteres = 8;

  if (displayName.length < caracteres) {
  return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  const caracteres = 6;

  if (password.length < caracteres) {
  return res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  emailValidate,
  nameValidate,
  passwordValidate,
};