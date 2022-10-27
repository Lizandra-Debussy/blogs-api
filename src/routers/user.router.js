const express = require('express');
const userController = require('../controllers/user.controller');

const emailValidate = require('../middlewares/emailValidate');
const nameValidate = require('../middlewares/nameValidate');
const passwordValidate = require('../middlewares/passwordValidate');

const routerUser = express.Router();

routerUser.post('/', 
nameValidate,
emailValidate,
passwordValidate,
userController.createUser);

module.exports = routerUser;