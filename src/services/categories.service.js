const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return { message: category };
 };

 const listCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

 module.exports = {
  createCategory,
  listCategories,
 };