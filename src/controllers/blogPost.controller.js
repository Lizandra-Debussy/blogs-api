const blogPostService = require('../services/blogPost.service');

// const createBlogPost = async (req, res) => {
//   const { title, content } = req.body;
//   const blogPost = await blogPostService.createBlogPost(title, content);
//   // console.log();
//   return res.status(201).json(blogPost);
// };

const listBlogPosts = async (req, res) => {
  const content = req.body;
  const list = await blogPostService.getAllblogPosts(content);
  return res.status(200).json(list);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const idBlogPost = await blogPostService.getById(id);

  if (!idBlogPost) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(idBlogPost);
};

module.exports = {
  // createBlogPost,
  listBlogPosts,
  getBlogPostById,
};