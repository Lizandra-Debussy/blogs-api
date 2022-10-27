const emailValidate = (req, res, next) => {
  const { email } = req.body;
  const re = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;
  
  if (!re.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = emailValidate;