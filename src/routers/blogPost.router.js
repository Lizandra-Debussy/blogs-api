const express = require('express');

const blogPostController = require('../controllers/blogPost.controller');

const tokenValidate = require('../middlewares/tokenValidate');
// const blogPostMiddlewares = require('../middlewares/blogPostValidate');

const routerBlogPost = express.Router();

// routerBlogPost.post('/',
// tokenValidate,
// blogPostMiddlewares.categoryIdValidate,
// blogPostMiddlewares.fieldsValidate,
// blogPostController.createBlogPost);

routerBlogPost.get('/',
tokenValidate,
blogPostController.listBlogPosts);

routerBlogPost.get('/:id',
tokenValidate,
blogPostController.getBlogPostById);

module.exports = routerBlogPost;
