const fieldsValidate = (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
  return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const categoryIdValidate = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  
  next();
};

module.exports = { fieldsValidate, categoryIdValidate };