const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return { message: category };
 };

 module.exports = {
  createCategory,
 };