const express = require('express');
const categoriesController = require('../controllers/categories.controller');

const tokenValidate = require('../middlewares/tokenValidate');
const nameValidateCategory = require('../middlewares/nameValidateCategory');

const routerCategories = express.Router();

routerCategories.post('/',
tokenValidate,
nameValidateCategory,
categoriesController.createCategory);

routerCategories.get('/',
tokenValidate,
categoriesController.listCategories);

module.exports = routerCategories;