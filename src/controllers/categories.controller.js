const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { message } = await categoriesService.createCategory(name);
  
  res.status(201).json(message);
};

module.exports = {
  createCategory,
};