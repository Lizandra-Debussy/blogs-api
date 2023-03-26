const blogPostService = require('../services/blogPost.service');
const userService = require('../services/user.service');

const createBlogPost = async (req, res) => {
  const { email } = req.user;
  const { title, content, categoryIds } = req.body;

  const getId = await userService.findByEmail(email);
  const userId = getId.dataValues.id;

  const { type, message } = await blogPostService.createBlogPost(
    title, content, userId, categoryIds,
  );
 
  if (type) {
    return res.status(400).json({ message });
  }
  return res.status(201).json(message);
};

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
  createBlogPost,
  listBlogPosts,
  getBlogPostById,
};