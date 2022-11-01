const express = require('express');

const blogPostController = require('../controllers/blogPost.controller');

const tokenValidate = require('../middlewares/tokenValidate');
const fieldsValidate = require('../middlewares/blogPostValidate');

const routerBlogPost = express.Router();

routerBlogPost.post('/',
tokenValidate,
fieldsValidate,
blogPostController.createBlogPost);

routerBlogPost.get('/',
tokenValidate,
blogPostController.listBlogPosts);

module.exports = routerBlogPost;
