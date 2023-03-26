const express = require('express');

const blogPostController = require('../controllers/blogPost.controller');

const tokenValidate = require('../middlewares/tokenValidate');
const blogPostMiddlewares = require('../middlewares/blogPostValidate');

const routerBlogPost = express.Router();

routerBlogPost.get('/',
tokenValidate,
blogPostController.listBlogPosts);

routerBlogPost.get('/:id',
tokenValidate,
blogPostController.getBlogPostById);

routerBlogPost.post('/',
tokenValidate,
blogPostMiddlewares.fieldsValidate,
blogPostMiddlewares.categoryIdValidate,
blogPostController.createBlogPost);

routerBlogPost.put('/:id',
tokenValidate,
blogPostMiddlewares.fieldsValidate,
blogPostController.updateBlogPost);

module.exports = routerBlogPost;
