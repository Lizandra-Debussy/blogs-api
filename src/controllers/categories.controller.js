const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { message } = await categoriesService.createCategory(name);

  res.status(201).json(message);
};

const listCategories = async (_req, res) => {
  const categories = await categoriesService.listCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  listCategories,
};