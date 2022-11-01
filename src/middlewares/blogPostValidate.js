const fieldsValidate = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || title === '' || !content || content === '') {
  return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = fieldsValidate;