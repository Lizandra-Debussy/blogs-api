const { BlogPost, User, Category, PostCategory } = require('../models');

const createBlogPost = async (title, content, userId, categoryIds) => {
  const { count } = await Category.findAndCountAll({
    where: { id: categoryIds },
  });

  if (count !== categoryIds.length) {
    return { type: 'ONE OR MORE "CATEGORYIDS" NOT FOUND',
    message: 'one or more "categoryIds" not found' };
  }

  const blogPost = await BlogPost.create({
    title, content, userId, updated: new Date(), published: new Date() });
    
  categoryIds.map((id) => PostCategory.create({ postId: blogPost.dataValues.id, categoryId: id }));
  
  return { type: null, message: blogPost };
};

const getAllblogPosts = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const getById = async (id) => BlogPost.findByPk(id, {
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = { 
  createBlogPost,
  getAllblogPosts,
  getById,
};