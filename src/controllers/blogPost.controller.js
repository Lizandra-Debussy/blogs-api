const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
  const content = req.body;
  const blogPost = await blogPostService.createBlogPost(content);
  // console.log(blogPost);
  return res.status(201).json(blogPost);
};

const listBlogPosts = async (req, res) => {
  const list = await blogPostService.getAllblogPosts();
  // console.log(list);
  return res.status(200).json(list);
};

module.exports = {
  createBlogPost,
  listBlogPosts,
};