const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const nameValidateCategory = require('../middlewares/nameValidateCategory');

const tokenValidate = require('../middlewares/tokenValidate');

const routerCategories = express.Router();

routerCategories.post('/',
tokenValidate,
nameValidateCategory,
categoriesController.createCategory);

module.exports = routerCategories;