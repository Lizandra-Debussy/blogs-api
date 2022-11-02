const { BlogPost, User, Category } = require('../models');
// PostCategory, sequelize 

// const createBlogPost = async (title, content, categoryIds) => {
//   try {
//     const result = await sequelize.transaction(async (t) => {
//       const blogPost = await BlogPost.create({
//         title, content, updated: new Date(), published: new Date() }, { transaction: t });
      
//       await PostCategory.create({ categoryIds }, { transaction: t });
//       return blogPost;
//     });
//     return result;
//     } catch (e) {
//       console.log(e);
//       throw e;
//   }
// };
// const createBlogPost = async (title, content, userId) => {
//   const blogPost = await BlogPost.create({
//     title, content, userId, updated: new Date(), published: new Date() });
//   return blogPost;
// };

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
  // createBlogPost,
  getAllblogPosts,
  getById,
};