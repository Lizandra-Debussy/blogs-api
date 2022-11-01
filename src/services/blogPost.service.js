const { BlogPost, User, Category } = require('../models');
// PostCategory, sequelize 

// const createBlogPost = async (title, content, categoryIds) => {
//   try {
//     const result = await sequelize.transaction(async (t) => {
//       const blogPost = await BlogPost.create({
//         title, content, updated??, published?? }, { transaction: t });
      
//       await PostCategory.create({ categoryIds }, { transaction: t });
//       return blogPost;
//     });
//     return result;
//     } catch (e) {
//       console.log(e);
//       throw e;
//   }
//   // const createBlogPost = async (title, content, userId) => {
//   //   const blogPost = await BlogPost.create({
//   //     title, content, userId, updated: new Date(), published: new Date() });
//   //   return blogPost;
// };

// {
//   "id": 3,
//   "title": "Latest updates, August 1st",
//   "content": "The whole text for the blog post goes here in this key",
//   "userId": 1,
//   "updated": "2022-05-18T18:00:01.196Z",
//   "published": "2022-05-18T18:00:01.196Z"
// }

const getAllblogPosts = async () => BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

 module.exports = { 
  // createBlogPost,
  getAllblogPosts,
};