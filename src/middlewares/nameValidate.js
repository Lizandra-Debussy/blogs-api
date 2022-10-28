const nameValidate = (req, res, next) => {
  const { displayName } = req.body;
  const caracteres = 8;

  if (displayName.length < caracteres) {
  return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

module.exports = nameValidate;